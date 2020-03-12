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

  const saveGrid = () => {
    const renderEl = document.getElementById('grid');

    html2canvas(renderEl, {
      useCORS: true,
    }).then(canvas => {
      let imgData = canvas.toDataURL('image/png');
      setPersistedData(prevState => [...prevState, imgData]);
    });
  }

  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
  }

  return (
    <div className='App'>
      <Information />
	    <div className="GridWrapper" id='grid'>
	   		<Grid position={props.position} textVisible={textVisible} />
        <div className='controls'>
          <button onClick={ () => setTextVisible( (prevState) => !prevState)}>{buttonText}</button>
          <button onClick={saveGrid}>Save thumbnail</button>
          <button onClick={() => setPersistedData([])}>Clear thumbnails</button>
       </div>
	    </div>
      <div className='savedGrids'>
        {persistedData.map( (image,i) => (
          <img key={i} src={image} alt='thumbnail' width='100vw' onClick={(e) => {e.preventDefault(); downloadURI(image, `thumbnail_${i+1}.png`);}} />
          ))
        }
      </div>
    </div>
  )
}