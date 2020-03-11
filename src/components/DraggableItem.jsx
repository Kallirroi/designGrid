import React from 'react'
import Draggable from 'react-draggable'

import '../styles/DraggableItem.css'

function DraggableItem(props) {
  	const itemClass = `item ${props.item.className}`
	const text = 'The quick brown fox jumps over the lazy dog'
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