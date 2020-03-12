import React from 'react'
import Draggable from 'react-draggable'

import '../styles/DraggableItem.css'

function DraggableItem(props) {
  	const itemClass = `item ${props.item.className}`
	const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio tempor orci dapibus ultrices in iaculis nunc sed augue.'
	return (
		<Draggable grid={[2, 2]}>
			<div className={itemClass} 
				onDragEnd={props.OnMoveItem}
				style={{ 
					color: props.textVisible ? '#000' : '#fc6767', 
					backgroundColor: (props.textVisible && props.item.className !== 'circle') ? 'transparent' : '#fc6767' }}
				>
				{props.item.className !== 'circle' ? text : ''}
			</div>
		</Draggable>
    )
}

export default DraggableItem