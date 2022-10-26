import React, {useState, useEffect} from "react";
import Header from "./components/header.js"
import {Routes, Route} from "react-router-dom"
import Home from "./components/home"
import Search from "./components/search"
import Myapi from "./components/myapis.js"
import Addapi from "./components/addapi.js"

import './App.css';
const api = 'http://localhost:3500/entries'

function App() {
  const [apis, setApis] = useState([])
  const [search, setSearch] = useState('')
  const [homeapis, setHomeapis] = useState([])

  useEffect(() => {
    fetch(api)
    .then(res => res.json())
    .then(apis => setApis(apis))
    
  }, [] )
  console.log(apis)

  const filteredApis = apis.filter((api)=> {
    return api.Description.toLowerCase().includes(search.toLowerCase())
  })
  
    
    
    
  return (
    <div className="App">
      
      < Header />
      
        <Routes>
          <Route exact path="/" element={<Home apis = {apis}/>}/>
          <Route exact path="/Search" element={<Search apis ={filteredApis} search ={search} setSearch= {setSearch}/>}/>
          <Route exact path="/Addapi" element={<Addapi/>}/>
          <Route exact path="/Myapi" element={<Myapi/>}/>
          
        </Routes>
      
    
    </div>
  );
}

export default App;
