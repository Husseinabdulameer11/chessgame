/*
import logo from './logo.svg';
import './App.css';
*/
import {useState} from "react";
import Chess from "chess.js";
import { Chessboard } from "react-chessboard";

function App() {
  return (
  /*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/
<div>
 <Chessboard id="BasicBoard" />
</div>
  );
}

export default App;
