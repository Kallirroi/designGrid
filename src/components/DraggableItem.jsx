import React from 'react';
import { useDrag, useDrop} from 'react-dnd'
import {ItemTypes} from '../Utils'

import '../styles/DraggableItem.css'

function DraggableItem(props) {

	const ref = React.createRef()
	const onDrop = (e) => {
		console.log('drop')
	}
	const [{isDragging}, drag] = useDrag({
	    item: { type: ItemTypes.ITEM },
			collect: monitor => ({
				isDragging: !!monitor.isDragging(),
			}),
	  })

  	const itemClass = `item ${props.item.className}`
	
	return (
		<div 
			ref={drag} 
			style={{
				left: props.position[0],
				top: props.position[1],
				opacity: isDragging ? 0.5 : 1
			}} 
			className={itemClass}> 
		</div>
    )
}

export default DraggableItem