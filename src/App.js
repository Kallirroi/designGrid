import React, {useState} from 'react';
import Grid from './components/Grid'
import './styles/App.css';

export default function App(props) {
  
  const [textVisible, setTextVisible] = useState(false);
  const buttonText = !textVisible ? 'Show text' : 'Hide text';
  return (
    <div>
	    <div className="App">
	   		<Grid position={props.position} textVisible={textVisible}/>
	    </div>
   		<div className='controls'>
	   		<button onClick={ () => setTextVisible( (prevState) => !prevState)}>{buttonText}</button>
	   		<button>Export</button>
   		</div>
    </div>
  )
}