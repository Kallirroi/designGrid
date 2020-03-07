import React from 'react';
import { useDrag, useDrop} from 'react-dnd'
import {ItemTypes} from '../Utils'

import '../styles/DraggableItem.css'

function DraggableItem(props) {

	const ref = React.createRef()
	const onDrop = (e) => {
		console.log('drop')
	}
	const [{isDragging}, connectDrag] = useDrag({
		item: { type: ItemTypes.ITEM },
		// collect: monitor => ({
		// 	isDragging: !!monitor.isDragging(),
		// }),
		})

	const [{isOver}, connectDrop] = useDrop({
	  accept: ItemTypes.ITEM,
	  drop: (e) => onDrop(e),
	 //  collect: monitor => ({
		// 	isOver: !!monitor.isOver(),
  //   		canDrop: !!monitor.canDrop(),
		// }),
	})

	connectDrag(ref);
  	connectDrop(ref);

  	const itemClass = `item ${props.item.className}`
	
	return (
		<div 
			ref={ref} 
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