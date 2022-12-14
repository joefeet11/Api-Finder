import React, {useState, useEffect} from "react";
import Header from "./components/header.js"
import {Routes, Route} from "react-router-dom"
import Home from "./components/home"
import Search from "./components/search"
import Myapi from "./components/myapis.js"

import './App.css';
const API = 'https://api.publicapis.org/entries'
const LocalApi = 'http://localhost:3500/entries'

function App() {
  const [apis, setApis] = useState([])
  const [search, setSearch] = useState('')
  const [myApis, setMyApis] = useState([])
  const [filterState, setFilterState] = useState('All')

  
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

   const addApi = apiToAdd => {
    setMyApis([...myApis, apiToAdd]);
    setApis(apis.filter(api => api.Link !== apiToAdd.Link));
    
  };

  const removeApi = apiToAdd => {
    setApis([...apis, apiToAdd]);
    setMyApis(myApis.filter(api => api.Link !== apiToAdd.Link));
   
  };

  function handlePost(data) {
    fetch(LocalApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(data),
    })
    .then((resp) => resp.json())
    .then(addApi)

  }
   function handleDelete(data) {
     fetch(`http://localhost:3500/entries/${data.id}`,{
      method:"DELETE",
    })
    .then((resp) => resp.json())
    .then(removeApi(data))

    

  }

const slice = apis.slice(0,6)
 
const filteredApis = apis.filter((api)=> {
  return api.Description.toLowerCase().includes(search.toLowerCase())
})
  
function filteredCategories() {
  if (filterState === "All") {
    return filteredApis
  }
  else {
    return filteredApis.filter(
      (api) => api.Category === filterState
    );
  }
};
 
return (
  <div className="App">
    
    < Header  />
    
      <Routes>
        <Route exact path="/" element={<Home apis = {slice} onAddApi={handlePost} />}/>
        <Route exact path="/Search" element={<Search filterState={filterState} setFilterState={setFilterState} apis ={filteredCategories()} search ={search} setSearch= {setSearch} onAddApi={handlePost}/>}/>
        <Route exact path="/Myapi" element={<Myapi apis={myApis} onRemoveApi={handleDelete} />}/>
      </Routes>
    
  
  </div>
);
}

export default App;
