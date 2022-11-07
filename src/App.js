import { useState } from 'react'
import NavBar from './components/NavBar';

import './App.css';
import AllProduct from './pages/AllProduct';
import Home from './pages/Home';
import OneProduct from './pages/OneProduct';

function App() {
  const [pageInfo, setPage] = useState({ name: "Home", Id: null })

  return (
    <div className="App">
      <NavBar setPage={setPage} />
      {page === "Home" && <Home handlePage={setPage} />}
      {page === "AllProduct" && <AllProduct />}
      {page === "OneProduct" && <OneProduct id={page.id} />}
    </div>
  );
}

export default App;
