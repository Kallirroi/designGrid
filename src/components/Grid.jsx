import React from 'react';
import initialItems from '../Utils'
import DraggableItem from './DraggableItem'

import '../styles/Grid.css'

function Grid() {
	const items = initialItems

	return (
		<div className='Grid'>
	        <ul> 
	          {items.map((item) => (
	            <DraggableItem key={item.id} item={item}/>
	          ))}
	        </ul> 
      	</div>
    )
}

export default Grid