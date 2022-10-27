import React, {useState, useEffect} from "react";
import Header from "./components/header.js"
import {Routes, Route} from "react-router-dom"
import Home from "./components/home"
import Search from "./components/search"
import Myapi from "./components/myapis.js"
import Addapi from "./components/addapi.js"

import './App.css';
const API = 'https://api.publicapis.org/entries'
const LocalApi = 'http://localhost:3500/entries'

function App() {
  const [apis, setApis] = useState([])
  const [search, setSearch] = useState('')
  const [myApis, setMyApis] = useState([])

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(apiArray => {
      setApis(apiArray.entries)
      })
    .catch(console.error)

    
      

  }, []);

    useEffect(() => {
     fetch(LocalApi)
      .then(resp => resp.json())
      .then(apiArray => {
        setMyApis(apiArray)
        })
      .catch(console.error)
      
    
      

   }, []);

  function addApi(apiToAdd) {
     const apiSend = myApis.find(api => api.Description === apiToAdd.Description)
     if (!apiSend) {
       setMyApis([...myApis, apiToAdd ])
     }
   }
   function removeApi(apiToRemove) {
     setMyApis((myApis) => 
     myApis.filter((api) => api.Description !== apiToRemove.Description))
   }

  
 
  const shuffle = [...apis].sort(() => 0.5 - Math.random()).filter((item, index) => index % 285 === 0);
  
 

  
  

  const filteredApis = apis.filter((api)=> {
    return api.Description.toLowerCase().includes(search.toLowerCase())
  })
  
    
    
    
  return (
    <div className="App">
      
      < Header  />
      
        <Routes>
          <Route exact path="/" element={<Home apis = {shuffle} onAddApi={addApi} />}/>
          <Route exact path="/Search" element={<Search apis ={filteredApis} search ={search} setSearch= {setSearch} onAddApi={addApi}/>}/>
          <Route exact path="/Addapi" element={<Addapi/>}/>
          <Route exact path="/Myapi" element={<Myapi apis={myApis} onRemoveApi={removeApi} />}/>
          
        </Routes>
      
    
    </div>
  );
}

export default App;
