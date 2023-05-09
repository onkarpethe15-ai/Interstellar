import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";

function App() {
  return (

    <div className="App">
      {/* <Router> */}

      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Home />
      {/* </Router> */}

    </div>

  );
}

export default App;
