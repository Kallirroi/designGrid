import React from 'react';
import {Items} from '../Utils'
import DraggableItem from './DraggableItem'
import Square from './Square'

import '../styles/Grid.css'

const gridFreq = 3;
const flexPercentage = 100/gridFreq;

function renderSquare(i) {
	return (
	    <div key={i} style={{ flex: `0 0 ${flexPercentage}%` }}>
	      <Square></Square>
	    </div>
	  )
}

function renderItems(i) {
	return ( <DraggableItem key={i} item={Items[i]} position={Items[i].position} /> )
}

function Grid() {
	const items=[];
	const numSquares = gridFreq*gridFreq;
	
	for (let i = 0; i < Items.length; i++) {
		items.push(renderItems(i))
	}

	const squares = [];
	for (var i = 0; i < numSquares; i++) {
		squares.push(renderSquare(i))
	}

	return (
		<div className='Grid'>
          {squares}
          {items}
      	</div>
    )
}

export default Grid