import React from 'react';
import {useDrag, useDrop} from 'react-dnd'
import {ItemTypes} from '../Utils'
import {moveItem} from '../ActionObserver'
import {useMouse} from 'react-use' 

import '../styles/DraggableItem.css'

function DraggableItem(props) {

	const ref = React.useRef(null)
	const {elX, elY} = useMouse(ref)

	const [{isDragging}, connectDrag] = useDrag({
   		item: { type: ItemTypes.DRAGGABLE },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
  	})

	const [, connectDrop] = useDrop({
		accept: "DRAGGABLE",
		hover(item) {
		  console.log("Hovered over item with id: ", item.id);
		},
		drop: () => moveItem(elX, elY)
	});

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