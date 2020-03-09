import React from 'react'
import Draggable from 'react-draggable'

import '../styles/DraggableItem.css'

function DraggableItem(props) {

  	const itemClass = `item ${props.item.className}`
	
	return (
		<Draggable grid={[5, 5]} >
			<div className={itemClass} onDragEnd={props.OnMoveItem}> </div>
		</Draggable>
    )
}

export default DraggableItem