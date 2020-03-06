import React from 'react';
import {Items} from '../Utils'
import DraggableItem from './DraggableItem'

import '../styles/Grid.css'

function Grid() {
	const items=[];
	for (let i = 0; i < Items.length; i++) {
		items.push( <DraggableItem key={i} item={Items[i]} position={Items[i].position} /> )
	}

	return (
		<div className='Grid'>
	        <ul> 
	          {items}
	        </ul> 
      	</div>
    )
}

export default Grid