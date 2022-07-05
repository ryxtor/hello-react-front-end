import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting/Greeting';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}

export default App;
