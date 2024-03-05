import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';

function App() {


  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [output, setOutput] = useState('');

  const compileCode = () => {
    // Concatenate HTML, CSS, and JS code
    const fullCode = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>${cssCode}</style>
      <title>Your Page Title</title>
    </head>
    <body>
      ${htmlCode}
      <script>${jsCode}</script>
    </body>
    </html>
  `;

    // Create a blob from the code
    const blob = new Blob([fullCode], { type: 'text/html' });

    // Create a URL for the blob
    const url = URL.createObjectURL(blob);

    // Set the URL as the iframe source
    setOutput(url);
  };


  return (
    <>

      <>
<div className='border bg-warning p-4 text-dark'>
  <h4 className='mx-4'>Codedev</h4>
</div>
        <div className="container-fluid  col-12  bg-light main-code-comainer p-4">
          <div className='row'>
            <div className="col-12 col-md-4">
              {/* <h6>HTML</h6>
                    <textarea   /> */}
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">HTML</label>
                <textarea class="form-control shadow-none" id="exampleFormControlTextarea1" rows="3" value={htmlCode} onChange={(e) => setHtmlCode(e.target.value)}></textarea>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <h6>CSS</h6>
              <textarea class="form-control shadow-none" id="exampleFormControlTextarea1" rows="3" value={cssCode} onChange={(e) => setCssCode(e.target.value)} />
            </div>
            <div className="col-12 col-md-4">
              <h6>JS</h6>
              <textarea class="form-control shadow-none" id="exampleFormControlTextarea1" rows="3" value={jsCode} onChange={(e) => setJsCode(e.target.value)} />
            </div>
            <div className="compile-button ">
              <button className='btn btn-success' onClick={compileCode}>Compile</button>
            </div>
          
          </div>
          <div className="output-section border mt-3">
              <p className='p-2 fw-bold text-dark'>Output</p>
              {output && <iframe title="output" src={output} width="100%" height="300px" />}
            </div>
        </div>
      </>
    </>
  )
}

export default App

