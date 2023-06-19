import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ChatAppProvider from './Context/ChatAppProvider'
import { NavBar } from './Components/index'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChatAppProvider> 
    <NavBar/>
      <App />
    </ChatAppProvider>
    </BrowserRouter>
  </React.StrictMode>
)
