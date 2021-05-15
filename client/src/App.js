import React, { useState } from 'react';
import { BrowserRouter, useHistory, Redirect, Route, Switch } from 'react-router-dom'
import { userContext } from './utils/context/userContext'
import './css/app.css'
import './css/normalize.css'
import Battle from './components/pages/battle'
import World from './components/pages/world'
import Landing from './components/pages/landing'
import WinningSound from './sound/victory.mp3'
import ForestSound from './sound/forest.mp3'
import HealSound from './sound/healing-pokemon-sound.mp3'
import LandingSound from './sound/opening.mp3'
import BattleSound from './sound/battle.mp3'
import HomeSound from './sound/town.mp3'

const winningSound = new Audio(WinningSound)
const forestSound = new Audio(ForestSound)
const healSound = new Audio(HealSound)
const battleSound = new Audio(BattleSound)
const landingSound = new Audio(LandingSound)
const homeSound = new Audio(HomeSound)


function App() {
  //TODO: handleRun , validat that no more than 8 pokemons, 
  
  const location = useHistory()

  location.listen((newLocation, action) => {
    if (action === "PUSH") {
      if (
        newLocation.pathname !== this.currentPathname ||
        newLocation.search !== this.currentSearch
      ) {
        this.currentPathname = newLocation.pathname;
        this.currentSearch = newLocation.search;

        location.push({
          pathname: newLocation.pathname,
          search: newLocation.search
        });
      }
    } else {
      location.go(1);
    }
  })


  const [user, setUser] = useState(null)

  const value = {
    user,
    setUser
  }

  const sounds = {

    landingSound: {
      on: () => {
        landingSound.volume = 0.5
        landingSound.play()
      },
      pause: () => landingSound.pause(),
      off: () => {
        landingSound.pause()
        landingSound.currentTime = 0
      },
    },
    battleSound: {
      on: () => {
        battleSound.volume = 0.5
        battleSound.play()
      },
      pause: () => battleSound.pause(),
      off: () => {
        battleSound.pause()
        battleSound.currentTime = 0
      }
    },
    winningSound: {
      on: () => {
        winningSound.volume = 0.5
        winningSound.play()
      },
      pause: () => winningSound.pause(),
      off: () => {
        winningSound.pause()
        winningSound.currentTime = 0
      }
    },
    healSound: {
      on: () => {
        healSound.volume = 0.8
        healSound.play()
      },
      pause: () => healSound.pause(),
      off: () => {
        healSound.pause()
        healSound.currentTime = 0
      }
    },
    forestSound: {
      on: () => {
        forestSound.volume = 0.5
        forestSound.play()
      },
      pause: () => forestSound.pause(),
      off: () => {
        forestSound.pause()
        forestSound.currentTime = 0
      }
    },
    homeSound:{
      on:()=> {
        homeSound.volume = 0.5
        homeSound.play()
      },
      pause: ()=> homeSound.pause(),
      off:()=>{
        homeSound.pause()
        homeSound.currentTime = 0
      }
    }
  }

  return (<BrowserRouter >
    <Switch >
      <userContext.Provider value={value} >

        <Route exact path="/" render={() => <Redirect to="/landing" />} />

        <Route exact path="/battle">
          <Battle sounds={sounds} />
        </Route>

        <Route exact path="/landing">
          <Landing sounds={sounds} />
        </Route>

        <Route exact path="/world">
          <World sounds={sounds} />
        </Route>

      </userContext.Provider>
    </Switch>
  </BrowserRouter>
  )
}

export default App;