import React from 'react'
import Draggable from 'react-draggable'
import {gridFreq, flexPercentage, numSquares} from '../Utils'

import '../styles/DraggableItem.css'

function DraggableItem(props) {
  	const itemClass = `item ${props.item.className}`
	const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed.'
	return (
		<Draggable grid={[2, 2]}>
			<div className={itemClass} 
				onDragEnd={props.OnMoveItem}
				style={{ 
					color: props.textVisible ? '#000' : '#ff7070', 
					backgroundColor: props.textVisible ? '#fff' : '#ff7070' }}
				>
				{props.item.className !== 'circle' ? text : ''}
			</div>
		</Draggable>
    )
}

export default DraggableItem