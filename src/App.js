import React from 'react';
import useDraggableItems from 'react-drag-elements'
import './App.css';

const initialItems = [
  { id: 1}, // colored
  { id: 2},
  { id: 3},
  { id: 4},
  { id: 5},
  { id: 6},
  { id: 7},
]

export default function App() {
  const { items, getItemProps } = useDraggableItems({
    initialItems, 
    delay: 10, 
    debounceMs: 10, 
    easeFunction: 'cubic-bezier(.39, .28, .13, 1.14)',
  })

  // Fade in demo
  React.useEffect(() => {
    document.body.style.opacity = '1'
  }, [])

  const classNames = [
    'fullWidth',
    'twothirds',
    'twothirds',
    'circle',
    'halfGridHeight',
    'fifthGridHeight',
    'fifthGridHeight',
  ]

  return (
    <div className="main">
      <span className="shadowMain"> 
        <span className="item"></span>
        <span className="item"></span>
        <span className="item"></span>
        <span className="item"></span>
        <span className="item"></span>
        <span className="item"></span>
        <span className="item"></span>
        <span className="item"></span>
        <span className="item"></span>
      </span>
      <div className='draggingArea'>
        {items.map((item) => (
          <li key={item.id} className={classNames[item.id-1]} {...getItemProps(item.id)}> </li>
        ))}
      </div>
    </div>
  )
}