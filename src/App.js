import React, {useState, useEffect} from 'react';
import Grid from './components/Grid'
import Information from './components/Information'
import html2canvas from 'html2canvas';
import './styles/App.css';

export default function App(props) {
  
  const [textVisible, setTextVisible] = useState(false);
  const buttonText = !textVisible ? 'Show text' : 'Hide text';
  const [persistedData, setPersistedData] = usePersistedState('savedGrids',[]);

  function usePersistedState(key, defaultValue) {
    // create the element in local storage if it doesn't exist
    const [state, setState] = useState(()=> {
      return JSON.parse(localStorage.getItem(key))  || defaultValue
    })

    // update the element at [key] position with state if needed
    useEffect(()=>{
      if (state !== undefined) localStorage.setItem(key, JSON.stringify(state))
    },[key, state])

    return [state, setState];
  }

  const saveGrid = async () => {
    const renderEl = document.getElementById('test');

    html2canvas(renderEl, {
      useCORS: true,
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      console.log(imgData);
      setPersistedData(imgData)
    });
  }


  return (
    <div className='App'>
      <Information />
	    <div className="GridWrapper" id='test'>
	   		<Grid position={props.position} textVisible={textVisible} />
        <div className='controls'>
         <button onClick={ () => setTextVisible( (prevState) => !prevState)}>{buttonText}</button>
         <button onClick={saveGrid}>Export</button>
         <button onClick={() => setPersistedData([])}>Clear</button>
       </div>
	    </div>
      <div className='savedGrids'>
          <img src={persistedData} width='100vw' />
      </div>
    </div>
  )
}