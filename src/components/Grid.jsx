import React from 'react'
import {Items, flexPercentage, numSquares} from '../Utils'
import DraggableItem from './DraggableItem'

import '../styles/Grid.css'

function renderSquare(i) {
	return (
	    <div key={i} style={{ flex: `0 0 ${flexPercentage}%` }}>
	        <div className='Square'></div>
	    </div>
	  )
}

function renderItems(i,props) {
	return ( <DraggableItem  key={i} item={Items[i]} textVisible={props.textVisible}/> )
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