import React from 'react'
import { Result, Button } from 'src/UI'
import result404 from 'src/basic/img/404.jpg'

export default function NotFound() {
  return (
    <Result
      imgSrc={result404}
      title="404"
      desp="Sorry, the page you visited does not exist."
      extra={
        <>
          <Button type="primary" onClick={() => (window.location.href = '/')}>
            Back Home
          </Button>
        </>
      }
      style={{ marginTop: '49px' }}
    />
  )
}
