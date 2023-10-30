// React and ReactDOM modules are imported
import React from 'react'
import ReactDOM from 'react-dom/client'
//The App components fro App.jsx are imported. 
import App from './App.jsx'
// The root instance are created,via the ReactDOM.createRoot.
// The element is retrieved via the root ID in the HTML document
// Therefore the root is prepared for redering in concurrent mode. 
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
