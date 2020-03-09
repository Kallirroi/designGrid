import React from 'react'

export default function Square(props,{children }) {

  return (
    <div
      style={{
        border: '1px solid #ccc',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  )
}