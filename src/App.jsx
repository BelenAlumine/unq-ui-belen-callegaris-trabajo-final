import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import { LeaderboardProvider } from './context/LeaderboardContext';
import Home from './pages/Home';
import Game from './pages/Game';

const NotFound = () => {
  return (
    <div className='error-container'>
      <h1>ERROR 404</h1>
      <p>PÁGINA NO ENCONTRADA</p>
      <Link to="/">
        [VOLVER AL JUEGO]
      </Link>
    </div>
  )
}

function App() {
  return (
    <LeaderboardProvider>
      <GameProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/game' element={<Game />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </GameProvider>
    </LeaderboardProvider>
  )
}

export default App;
