import React from 'react';
import Grid from './components/Grid'

import './styles/App.css';

export default function App(props) {
  return (
    <div className="App">
   		<Grid position={props.position}/>
    </div>
  )
}