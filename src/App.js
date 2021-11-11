import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Watch from './components/Watch';
import Marketplace from './components/Marketplace';
import Group from './components/Group';
import Gaming from './components/Gaming';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const MyRoute = () => {
  return (
    <Router>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/watch" element={<Watch/>} />
          <Route path="/marketplace" element={<Marketplace/>} />
          <Route path="/group" element={<Group/>} />
          <Route path="/gaming" element={<Gaming/>} />
      </Routes>
  </Router>
  )
}


export default MyRoute;
