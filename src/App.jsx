import React from 'react'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//-------------- Components -------------X
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// ------------ Pages -------------X
import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';

function App() {

  return (
    <>
        <Router>
          {/* Navbar Component  */}
          <Navbar />

          <Switch>
            {/* Home Component  */}
            <Route exact path="/">
              <Home />
            </Route>

            {/* Register Component  */}
            <Route exact path="/register">
              <Register />
            </Route>

            {/* Login Component  */}
            <Route exact path="/login">
              <Login />
            </Route>

          </Switch>



          {/* Footer Component  */}
          <Footer />
        </Router>
    </>
  )
}

export default App
