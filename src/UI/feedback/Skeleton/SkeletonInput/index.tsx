import React from 'react'
import Skeleton from '../Skeleton'
import './index.less'
interface SkeletonAvatar {
  size?: 'default' | 'small' | 'large'
  loading?: boolean
  acitve?: boolean
}

export default function (props: SkeletonAvatar) {
  const { size = 'default', loading = true, acitve = false } = props

  const getDetailClassName = () => {
    let className = 'rd-skeleton-detail-input'
    if (size !== 'default') {
      className = `${className} rd-skeleton-detail-input-${size}`
    }

    return className
  }
  return (
    <div className={getDetailClassName()}>
      <Skeleton
        title={true}
        avatar={false}
        rows={0}
        footer={false}
        loading={loading}
        active={acitve}
      />
    </div>
  )
}
