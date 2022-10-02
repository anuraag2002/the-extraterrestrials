import './App.css';
import { Routes,Route,NavLink } from 'react-router-dom';
import Home from './components/Home';
import Mission from './components/Mission';
import Gallery from './components/Gallery';
import Header from './components/Header';
import React from 'react';
// import Users from './components/Users';
// import Contactus from './components/Contactus';
// import Technologies from './components/Technologies';
// import Html from './components/Html';
// import Javascript from './components/Javascript';
// import Register from './components/Registration'

function App() {
  return (
    <div classname="container">
      


      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='/mission' element={<Mission/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route> */}
        <Route path="/audio" element={<Audio/>}></Route>
        <Route path="/model" element={<Model/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
