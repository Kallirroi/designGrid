import React from 'react';
import useDraggableItems from 'react-drag-elements'
import initialItems from '../Utils'

import '../styles/Grid.css'

function Grid() {
	const { items, getItemProps } = useDraggableItems({
		initialItems, 
		delay: 150, 
		debounceMs: 150, 
		easeFunction: 'cubic-bezier(.39, .68, .13, 1.14)',
	})

	return (
		<div className='Grid'>
	        <ul> 
	          {items.map((item) => (
	            <li 
	            key={item.id} 
	            className={item.className} 
	            {...getItemProps(item.id)}> </li>
	          ))}
	        </ul> 
      	</div>
    )
}

export default Grid