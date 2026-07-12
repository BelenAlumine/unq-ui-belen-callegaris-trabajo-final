import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Game from '../src/pages/Game'

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
    <GameProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Game />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </GameProvider>
  )
}

export default App;