import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* components */
import Login from './components/Login/Login'
import Dentists from './components/Dentists/Dentists'

function App() {
  const [token, setToken] = useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dentists' element={<Dentists />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
