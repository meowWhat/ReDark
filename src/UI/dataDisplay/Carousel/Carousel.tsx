import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  cloneElement,
  ReactElement,
} from 'react'
import './Carousel.less'

interface Carousel {
  width?: number
  height?: number
  content?: Array<ReactElement>
  delay?: number
}

export default function (props: Carousel) {
  const { width = 400, height = 400, content = [], delay = 1500 } = props
  const [translateX, setTranslateX] = useState(0)
  const timeOut = useRef<NodeJS.Timeout>()
  const timeInterval = useRef<NodeJS.Timeout>()
  const div: any = useRef()
  const go = useCallback(() => {
    //轮播图开始
    setTranslateX((pre) => {
      if (pre >= width * (content.length - 1)) {
        new Promise((resolve) => {
          timeOut.current = setTimeout(() => {
            div.current.style.transition = 'null'
            setTranslateX(0)
            resolve()
          }, 300)
        }).then(() => {
          timeOut.current && clearTimeout(timeOut.current)
        })
      }
      div.current.style.transition = 'transform 0.3s'
      return pre + width
    })
  }, [width, content.length])

  useEffect(() => {
    timeInterval.current = setInterval(go, delay)
    return () => {
      timeInterval.current && clearInterval(timeInterval.current)
    }
  }, [go, delay])

  const pointerChange = (index: number) => {
    //指示器切换
    timeInterval.current && clearInterval(timeInterval.current)
    setTranslateX(index * width)
    timeInterval.current = setInterval(go, delay)
  }
  const initStyle = () => {
    //初始化宽高
    return {
      width: width + 'px',
      height: height + 'px',
    }
  }
  return (
    <div className="rd-carousel" style={initStyle()}>
      <div
        className="rd-carousel-content"
        style={{
          transform: `translateX(-${translateX}px)`,
          width: `${width * 5}px`,
        }}
        ref={div}
      >
        {content.map((E, index) =>
          cloneElement(E, { style: initStyle(), key: index })
        )}
        {cloneElement(content[0], { style: initStyle() })}
      </div>
      <ul className="rd-carousel-pointer">
        {content.map((_, index) => {
          return (
            <li
              className={
                translateX / width === index ||
                (index === content.length - 1 &&
                  translateX / width === index + 1)
                  ? 'rd-carousel-pointer-active'
                  : ''
              }
              onClick={() => pointerChange(index)}
              key={index}
            />
          )
        })}
      </ul>
    </div>
  )
}
