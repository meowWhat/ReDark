import React, { useRef, ChangeEvent, useState } from 'react'
import { Button, Spin, Message } from 'src/UI'
import { NoticeProps } from '../../feedback/Message/Message'
import './Upload.less'

interface UploadProps {
  limitSize?: number
  maxList?: number
  serve?: {
    upload?: UploadSereve
    delete?: DeleteServe
  }
}
interface UploadSereve {
  url: string
  method: string
  onResolve?: (res: any) => void // 上传成功
  onReject?: (res: any) => void // 上传失败
  onError?: (err: any) => void // 服务器错误
}
interface DeleteServe extends UploadSereve {
  deleteBody: (name?: string, index?: number) => any //获取删除参数
}

export function Upload(props: UploadProps) {
  const { limitSize = 8888, maxList = 3, serve } = props
  const input = useRef<HTMLInputElement>(null)
  const [spinning, setSpinning] = useState(false)
  const [messageArr, setMessageArr] = useState<Array<NoticeProps>>([])
  const [fileList, setFileList] = useState<Array<string>>([])
  const handleUploadClick = () => {
    if (input.current && !spinning) {
      //点击按钮 触发input的点击事件
      input.current.click()
      setMessageArr([])
    }
  }
  /* 链接serve封装 */
  const goServe = async (
    param: any,
    url: string,
    method?: string,
    onResolve?: (data: any) => void,
    onReject?: (data: any) => void,
    onError?: (data: any) => void
  ) => {
    setSpinning(true)
    try {
      const res = await fetch(url, {
        method: method || 'POST',
        body: param,
      })
      const data = await res.json()
      if (res.ok) {
        //成功的回调
        setMessageArr([{ type: 'success', text: '操作成功 ! !' }])
        onResolve && onResolve(data)
      } else {
        //失败的回调
        setMessageArr([{ type: 'error', text: '操作失败 ! !' }])
        onReject && onReject(data)
      }
    } catch (e) {
      //错误回调
      setMessageArr([{ type: 'error', text: '操作失败 ! !' + e }])
      onError && onError(e)
    }
    //隐藏spining
    setSpinning(false)
  }

  const handleUploadChange = async (e: ChangeEvent<HTMLInputElement>) => {
    //获取上传的文件信息
    const file = e.target.files && e.target.files[0]
    //清空value 防止重复文件不执行
    if (input.current) {
      input.current.value = ''
    }
    //上传文件
    if (file && serve?.upload) {
      const { url, method, onReject, onResolve, onError } = serve.upload
      if (file.size > limitSize) {
        setMessageArr([
          { type: 'error', text: `文件体积不能超过${limitSize}Bytes` },
        ])
        return
      }
      if (fileList.length >= maxList) {
        setMessageArr([
          { type: 'error', text: `超过最大传输数量 ${maxList}`, delay: 3000 },
        ])
        return
      }
      const formData = new FormData()
      formData.append('rdFiles', file)
      try {
        await goServe(
          formData,
          url,
          method,
          (res) => {
            //成功时 setFileList
            setFileList((pre) => pre.concat(file.name))
            onResolve && onResolve(res)
          },
          onReject,
          onError
        )
      } catch (error) {
        if (onError) {
          onError(error)
        } else {
          throw error
        }
      }
    } else {
      setMessageArr([
        {
          type: 'warning',
          text: '不填接口你想把文件传到哪里去?',
          delay: 3000,
        },
      ])
    }
  }

  const deleteFile = (index: number) => {
    //点击item 删除文件
    if (serve?.delete) {
      const {
        url,
        method,
        onReject,
        onResolve,
        onError,
        deleteBody,
      } = serve.delete
      //将index 传入用户, 获取用户返回的body
      const body = deleteBody(fileList[index], index)
      goServe(
        JSON.stringify(body),
        url,
        method,
        (res) => {
          setFileList((pre) => {
            pre.splice(index, 1)
            return Array.from(pre)
          })
          onResolve && onResolve(res)
        },
        onReject,
        onError
      )
    }
  }
  return (
    <div className="rd-upload">
      <input
        type="file"
        style={{ display: 'none' }}
        ref={input}
        onChange={handleUploadChange}
      />
      <div className="rd-upload-btn">
        <Message notices={messageArr} />
        <Spin spinning={spinning} simple>
          <Button
            onClick={handleUploadClick}
            style={spinning ? { cursor: 'not-allowed' } : null}
          >
            <span className="iconfont icon-daoru" />
            &nbsp; 点击上传
          </Button>
        </Spin>
      </div>
      <ul className="rd-upload-list">
        {fileList.map((el, index) => {
          return (
            <li key={el + index}>
              <span className="iconfont icon-rizhi" />
              {el}
              {serve?.delete ? (
                <span
                  className="iconfont icon-shanchu"
                  onClick={() => deleteFile(index)}
                />
              ) : null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
