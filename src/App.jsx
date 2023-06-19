import React,{useEffect,useContext, useState } from 'react'   
import './App.css'
import ChatAppProvider from './Context/ChatAppProvider'
import { Filter, Friend, NavBar } from './Components/index'
import {  Routes, Route,Navigate } from "react-router-dom";
import Alluser from './pages/Alluser'
import Chat from './pages/Chat'
function App() { 
  return (
    <>
      <ChatAppProvider>
         
        
      <Routes>
        <Route path="/" element={<Navigate replace to="/chat" />} />
        <Route path="/alluser" element={<Alluser />}/>
        <Route path="/chat" element={<Chat />}/>
         
      </Routes>
     
      </ChatAppProvider>
         
    </>
  )
}

export default App
