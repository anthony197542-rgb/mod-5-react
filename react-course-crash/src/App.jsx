import "./App.css";
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
imoprt Home from './pages/Home.jsx'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";

function App() {
  return (
    <Router>

    <Nav />
    <Routes>
      <Route path="/" elements={<Home />} />
      <Route path="/Users/:username" element={Users />} />
    <Routes>
  </Router>

  );
}

export default App;
