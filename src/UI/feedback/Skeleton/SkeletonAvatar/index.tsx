import React from 'react'
import Skeleton from '../Skeleton'
import './index.less'
interface SkeletonAvatar {
  size?: 'default' | 'small' | 'large'
  shape?: 'square' | 'circle'
  loading?: boolean
  acitve?: boolean
}

export default function (props: SkeletonAvatar) {
  const {
    size = 'default',
    shape = 'circle',
    loading = true,
    acitve = false,
  } = props

  const getDetailClassName = () => {
    let className = 'rd-skeleton-detail-avatar'
    if (size !== 'default') {
      className = `${className} rd-skeleton-detail-avatar-${size}`
    }
    if (shape !== 'circle') {
      className = `${className} rd-skeleton-detail-avatar-${shape}`
    }
    return className
  }

  return (
    <div className={getDetailClassName()}>
      <Skeleton
        title={false}
        avatar={true}
        rows={0}
        footer={false}
        loading={loading}
        active={acitve}
      />
    </div>
  )
}
