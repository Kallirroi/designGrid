import React from 'react'
import {Items} from '../Utils'
import DraggableItem from './DraggableItem'
import Square from './Square'

import '../styles/Grid.css'

const gridFreq = 3;
const flexPercentage = 100/gridFreq;
const numSquares = gridFreq*gridFreq;

function renderSquare(i) {
	return (
	    <div key={i} style={{ flex: `0 0 ${flexPercentage}%` }}>
	      <Square></Square>
	    </div>
	  )
}

function renderItems(i,props) {
	return ( <DraggableItem  key={i} item={Items[i]} position={props.position} /> )
}

function Grid(props) {
	const items=[];
	const squares = [];
	
	for (let i = 0; i < Items.length; i++) {
		items.push(renderItems(i,props))
	}

	for (var i = 0; i < numSquares; i++) {
		squares.push(renderSquare(i))
	}

	return (
		<div>
			<div className='Items'> {items} </div>
			<div className='Grid'> {squares} </div>
		</div>
    )
}

export default Grid