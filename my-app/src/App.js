import React, {useState, useEffect} from "react";
import Header from "./components/header.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/home"
import Search from "./components/search"
import Myapi from "./components/myapis.js"
import Addapi from "./components/addapi.js"

import './App.css';
const api = 'https://api.publicapis.org/random'

function App() {
  const [apis, setApis] = useState([])

  useEffect(() => {
    fetch(api)
    .then(res => res.json())
    .then(apis => setApis(apis))
    
  }, [] )
  console.log(apis)
    
    
    
  return (
    <div className="App">
      
      < Header />
      
        <Routes>
          <Route exact path="/" element={<Home apis = {apis}/>}/>
          <Route exact path="/Search" element={<Search/>}/>
          <Route exact path="/Addapi" element={<Addapi/>}/>
          <Route exact path="/Myapi" element={<Myapi/>}/>
          
        </Routes>
      
    
    </div>
  );
}

export default App;
