import Python from '../src/components/python/python';
import Game from '../src/components/game/game';
import Highscores   from '../src/components/highscores/highscores';
import logo from './logo.svg';
import './App.css';
import { NavLink, BrowserRouter as Router,browserHistory,Route,Link ,Outlet} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  
} from "react-router-dom";
 
 

function App() {
  return (
    <div className="App">

  

    <div className="container">
        <div id="home" className="flex-center flex-column">
            <h1>Study Battles</h1>
        

      <Routes>
        <Route path="/" component={App}/>
        <Route path="/python" components={Python} />
        <Route path="/game"  element={<Game />} />
        <Route path="/highscores" component={Highscores} />
      </Routes>
            <Link to="/python" className="btn">Python Challenge</Link>
            <Link to="/custom" className="btn">Custom Challenge Test</Link>
            <Link to="/game" className="btn">Game</Link>
            <Link to="/highscores" className="btn">Highscores</Link>
     
        </div>
    </div>
 
 
    </div>
  );
}

export default App;
