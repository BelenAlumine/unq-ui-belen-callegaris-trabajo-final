import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Game from '../src/pages/Game'

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Game />} />
        </Routes>
      </Router>
    </GameProvider>
  )
}

export default App;