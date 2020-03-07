import React, {useRef} from 'react'
import {useMouse} from 'react-use'

import {Items} from '../Utils'
import DraggableItem from './DraggableItem'
import Square from './Square'

import {moveItem} from '../ActionObserver'

import '../styles/Grid.css'

const gridFreq = 3;
const flexPercentage = 100/gridFreq;
const numSquares = gridFreq*gridFreq;

function renderSquare(i) {
	return (
	    <div key={i}  style={{ flex: `0 0 ${flexPercentage}%`, zIndex: '-1'}}>
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
	const ref = React.useRef(null);
	const {elX, elY, elW, elH} = useMouse(ref);
	
	for (let i = 0; i < Items.length; i++) {
		items.push(renderItems(i,props))
	}

	for (var i = 0; i < numSquares; i++) {
		squares.push(renderSquare(i))
	}

	const handleClick = () => {
  		// move the item to [elX, elY]
  		moveItem(elX,elY);
  	}

	return (
		<div onClick={handleClick} ref={ref} className='Grid'>
          {squares}
          {items}
      	</div>
    )
}

export default Grid