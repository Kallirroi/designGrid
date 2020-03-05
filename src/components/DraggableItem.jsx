import React from 'react';
import { useDrag } from 'react-dnd'
import {ItemTypes} from '../Utils'

import '../styles/DraggableItem.css'

function DraggableItem(props) {

	const [{isDragging}, drag] = useDrag({
		item: { type: ItemTypes.ITEM },
			collect: monitor => ({
				isDragging: !!monitor.isDragging(),
			}),
		})

	return (
		<li ref={drag} style={{opacity: isDragging ? 0.5 : 1}} className={props.item.className}> </li>
    )
}

export default DraggableItem