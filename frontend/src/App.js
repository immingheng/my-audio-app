import "./App.css";
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Contact from './components/Contact';
import SignUp from './components/Signup';
import Dashboard from './components/Dashboard';
import ForgotPassword from "./components/ForgotPassword";
import AudioPlayer from "./components/AudioPlayer";
import Profile from "./components/Profile";


// For any other routes that are not mapped, default it back to home-page
const App = () => {
  // Hard coding this to true first - until I figure out how React handles authenticated state to determine if someone has logged in.
  const isLoggedIn = true;

  return (
    <div class="container">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <div class="flex-1">
              <img src={require('./static/logo.png')} alt="logo" width="50" height="50"/>
          </div>
        
          <div class="flex-none">
            <ul class="list-group list-group-horizontal p-0">
              <li class="list-group-item"><a href="/">Home</a></li>
              <li class="list-group-item"><a href="/about">About</a></li>
              <li  class="list-group-item"><a href="/contact">Contact</a></li>
              <li  class="list-group-item"><a href="/login">Login</a></li>
            </ul>
          </div> 
        </div>
      </nav>
    
      {/*All other unrouted path(s) will be redirected to home page */}
      <Router>
        <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/contact" element={<Contact/>}/>
              <Route exact path="/signup" element={<SignUp/>}/>
              <Route exact path="/forgotpassword" element={<ForgotPassword/>}/>
              {/* Protected routes based on authentication which redirect user to homepage if they are not logged in*/}
              {
                isLoggedIn ?
                [
                  <Route path="/dashboard" element={<Dashboard/>}/>,
                  <Route path="/profile" element={<Profile/>}/>
                ]
                :
                null
              }
              <Route path="/player" element={<AudioPlayer/>}/>
              <Route path="*" element={<Home/>}/>
        </Routes>
      </Router>
      <footer class="p-4 footer text-base-content footer-center">
        <div class="d-flex justify-content-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserves by my-audio-app</p>
        </div>
      </footer>
    </div>
  );
}

export default App;