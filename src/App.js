import { useState } from 'react';
import './App.css';
import Game from './components/Game.js';
import Start from './components/Start/Start';
import End from './components/End/End';

function App() {

  const [gamePhase, setGamePhase] = useState('start');

  const startGame = () => {
    setGamePhase('game');
  }
  
  const endGame = () => {
    setGamePhase('end');
  }

  return (
    <div class="App">
      {gamePhase === 'start' 
      ? <Start onStart={startGame}></Start>
      : gamePhase === 'game'
      ? <Game onLose={endGame}></Game>
      : <End></End> 
      }
    </div>
  );
}

export default App;
