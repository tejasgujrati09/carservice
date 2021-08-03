import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./components/pages/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Layout/navbar";
import NotFound from "./components/pages/NotFound";
import {BrowserRouter as Router ,Route ,Switch} from 'react-router-dom'
import AddUser from "./components/users/AddUser";
import AddCar from "./components/AddCar";
import EditUser from "./components/users/EditUser"
function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/addcar' component={AddCar}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/users/add' component={AddUser}/>
        <Route exact path='/users/edit/:id' component={EditUser}/>
        <Route component={NotFound}/>

      </Switch>
    </div>

    </Router>
    
  );
}

export default App;
