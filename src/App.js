import { useState, useEffect, useRef } from 'react';
import autosize from 'autosize';
import Nav from './Nav.js'
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const textareaRef = useRef();

  useEffect(() => {
    autosize(textareaRef.current);
  }, []);

  function handleInputChange(event) {
    setInputText(event.target.value);
  }
  
  return (
    <>
      <Nav />
      <div className="App">
        <section className="home-body">
          <div className="box-ctn">
            <div className="container-1">
              <div className="text-header">
                <p>Input text here</p>
              </div>
              <div className="box">
                <textarea
                  className="input-text"
                  ref={textareaRef}
                  value={inputText}
                  onChange={handleInputChange} />
              </div>
            </div>
            <div className="container-2">
              <div className="text-header">
                <p>Beshified Text Result</p>
              </div>
              <div className="box-result">
                <div className="input-result-container">
                  <p className="input-result">{inputText.replaceAll(' ', '🤸🏼‍♂️')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <p>© 2023 Niko Soriano</p>
              <button className="btn">Copy</button>
            </div>
        </section>
      </div>
    </>
  );
}

export default App;

