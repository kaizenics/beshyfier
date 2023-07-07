import { useState, useEffect, useRef } from 'react';
import autosize from 'autosize';
import './App.css';

function App() {
  const [inputText, setInputText] = useState();
  const textareaRef = useRef();

  useEffect(() => {
    autosize(textareaRef.current);
  }, []);

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="App">
      <section className="home-body">
       <div className="box-ctn"></div>
        <div className="container-1">
          <div className="text-header">
            <p>Input text here</p>
          </div>
            <div className="box">
             <textarea 
             className="input-text" 
             ref={textareaRef} 
             value={inputText} 
             onChange={handleInputChange}/>
          </div>
        </div>
        <div className="container-2">
          <div className="text-header">
            <p>Beshified Text Result</p>
            </div>
            <div className="box-result">
              <p className="input-result">{inputText}</p>
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
