import React from 'react';
import { useDrag, useDrop} from 'react-dnd'
import {ItemTypes} from '../Utils'
import {useMouse} from 'react-use'

import {moveItem} from '../ActionObserver'

import '../styles/DraggableItem.css'

function DraggableItem(props) {

	const ref = React.createRef()
	const {elX, elY} = useMouse(ref);

	const [{isDragging}, drag] = useDrag({
   		item: { type: ItemTypes.DRAGGABLE },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
  	})

	const [, connectDrop] = useDrop({
	    accept: "DRAGGABLE",
	    hover: (item) => console.log("Hovering item. id: ", item.id, 'at mouse pos', elX, elY),
	    drop: () => moveItem(elX, elY)
	  });

  	const itemClass = `item ${props.item.className}`

  	// connectDrag(ref);
	connectDrop(ref);
	
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