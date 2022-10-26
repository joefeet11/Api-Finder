import React, {useState, useEffect} from "react";
import Header from "./components/header.js"
import {BrowserRouter as Routes, Route} from "react-router-dom"
import Home from "./components/home"
import Search from "./components/search"
import MyApi from "./components/myApis.js"
import AddApi from "./components/addApi.js"
import './App.css';
const API = 'https://api.publicapis.org/entries'

function App() {
  const [apis, setApis] = useState([])

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(apiArray => {
      setApis(apiArray.entries)
      console.log(apiArray.entries)
    })
  }, []);
  

  return (
    <div className="App">
      < Header />
        <Routes>
          <Route exact path="/" element={<Home apis = {apis}/>}/>
          <Route exact path="/Search" element={<Search/>}/>
          <Route exact path="/Addapi" element={<AddApi/>}/>
          <Route exact path="/Myapi" element={<MyApi/>}/>
        </Routes>
    </div>
  );
}

export default App;
