import { useState } from 'react'
import NavBar from './components/NavBar';

import './App.css';
import AllProduct from './pages/AllProduct';
import Home from './pages/Home';
import OneProduct from './pages/OneProduct';

function App() {
  const [page, setPage] = useState("home")
  
  return (
    <div className="App">
      <NavBar />
      {page === "home" && <Home />}
      {page === "AllProduct" && <AllProduct />}
      {page === "OneProduct" && <AllProduct />}
    </div>
  );
}

export default App;
