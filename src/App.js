import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import StarwarList from './components/starwar-list';
import StarwarInfo from './components/starwar-info';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StarwarList/>} />
        <Route path="/starwar-info" element={<StarwarInfo/>} />
      </Routes>
    </Router>
  );
}

export default App;
