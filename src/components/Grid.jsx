import React from 'react';
import {Items} from '../Utils'
import DraggableItem from './DraggableItem'

import '../styles/Grid.css'

function Grid() {
	return (
		<div className='Grid'>
	        <ul> 
	          {Items.map((item) => (
	            <DraggableItem  key={item.id}  item={item}/>
	          ))}
	        </ul> 
      	</div>
    )
}

export default Grid