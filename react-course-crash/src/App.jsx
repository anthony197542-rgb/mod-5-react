import "./App.css";
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './pages/Home'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
    <Routes>
      <Route path="/" elements={<Home />} />
      <Route path="/Users/:username" element={<Users />} />
       <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>

  );
}

export default App;
