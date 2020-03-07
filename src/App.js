import React from 'react';
import Grid from './components/Grid'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import './styles/App.css';

export default function App(props) {
  return (
    <div className="App">
		<DndProvider backend={Backend}> 
   			<Grid position={props.position}/>
		</DndProvider>
    </div>
  )
}