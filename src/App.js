import { useState } from 'react'
import NavBar from './components/NavBar';

import './App.css';
import AllProduct from './pages/AllProduct';

function App() {
  const [page, setPage] = useState("home")
  return (
    <div className="App">
      <NavBar />
      {page === "home" && <AllProduct />}
    </div>
  );
}

export default App;
