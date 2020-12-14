import { BrowserRouter, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Header from './components/Header'
import StarshipPage from './components/StarshipPage'
import StarshipDetails from './components/StarshipDetails'
import './App.css';

let starshipList = [
  {
    name: "CR90 corvette",
    model: "CR90 corvette",
    path: "/0"
  },
  {
    name: "Star Destroyer",
    model: "Imperial I-class Star Destroyer",
    path: '/1'
  },
  {
    name: "Death Star",
    model: "DS-1 Orbital Battle Station",
    path: '/2'
  }
]

function App() {
  const [starships, setStarships] = useState([]);
  setStarships(starshipList)

  // useEffect(() => {
  //     console.log('hi from useEffect');

  //     if(starships.length === 10) {
  //         return
  //     }
  //     axios.get('https://swapi.dev/api/starships/')
  //     .then((result) => {
  //         let starshipArray = []
  //         result.data.results.map((starship, index) => {
  //             let pathName = '/'
  //             pathName.concat(index)
  //             let starshipObject = {
  //               name: starship.name,
  //               model: starship.model,
  //               path: pathName
  //             }
  //             starshipArray.push(starshipObject)
  //             setStarships(starshipArray)
  //         })
  //     })
  //     .catch((err) => {
  //         console.log(err);
  //     })        
  // })
  
  // console.log(starships);

  return (
    <BrowserRouter>
      <div className="App">
      <Header />

      <Route 
      exact path="/" 
      render={() => {return <StarshipPage starships={starships} />}}
      />
      <Route
      path="/:id"
      render={(routeInfo) => {return <StarshipDetails starships={starships} starshipId={starships[parseInt(routeInfo.match.params.id)]} />}} 
      />
      </div>
    </BrowserRouter>
  );
}

export default App;
