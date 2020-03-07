import React from 'react'
import { useDrop} from 'react-dnd'
import {ItemTypes} from '../Utils'
import {moveItem} from '../ActionObserver'

export default function Square(props,{children }) {

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ITEM,
    drop: () => moveItem(props.nextPosition),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  })

  return (
    <div
      ref={drop}
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