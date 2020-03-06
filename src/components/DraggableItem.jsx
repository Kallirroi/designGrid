import React from 'react';
import { useDrag, useDrop} from 'react-dnd'
import {ItemTypes} from '../Utils'

import '../styles/DraggableItem.css'

function DraggableItem(props) {

	const ref = React.createRef()
	const onDrop = () => {
		console.log('drop')
	}

	const [{isDragging}, connectDrag] = useDrag({
		item: { type: ItemTypes.TEST },
			collect: monitor => ({
				isDragging: !!monitor.isDragging(),
			}),
		})

	const [{isOver}, connectDrop] = useDrop({
	  accept: ItemTypes.TEST,
	  drop: () => onDrop(),
	  collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	})

	connectDrag(ref);
  	connectDrop(ref);

	return (
		<li ref={ref} 
			style={{
				left: props.position[0],
				top: props.position[1],
				opacity: isDragging ? 0.5 : 1}} 
			className={props.item.className}> 
		</li>
    )
}

export default DraggableItem