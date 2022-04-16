import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Meme from './Meme';
function App() {
  return (
    <div>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="meme" element={ <Meme /> } />
        </Routes>
      </div>
    </div>
   
  );
}

export default App;
