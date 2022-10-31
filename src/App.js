import './App.css';
import React, { useState } from 'react'
import Header from './components/Header.js'
import Transfer from './components/Transfer.js'
import Allocation from './components/Allocation.js'
import Connect from './components/Connect.js'
import Home from './components/Home.js'
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {

  const [connectWallet, setconnectWallet] = useState(false);

  return (
    <div className="App">
      
      <Routes>

        <Route exact path='/' element={connectWallet?(<Navigate replace to ={"/home"}/>):(<Navigate replace to ={"/connect"}/>)}/>
        <Route path='/home' element={<Home />} />
        <Route path='/connect' element={<Connect  />} />
        <Route path='/allocation' element={<Allocation />} />
        <Route path='/tranfer' element={<Transfer />} />

      </Routes>

      



    </div>
  );
}

export default App;
