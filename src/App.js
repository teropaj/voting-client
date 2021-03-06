import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';

import Home from './pages/Home/Home'
import Signin from './pages/Signin/Signin'
import Navbar from './pages/Navbar/Navbar'
import GetAllUsers from './pages/GetAllUsers/GetAllUsers'
import {useSelector} from 'react-redux'

function App() {

  const isLogged=useSelector(state=>state.loggedReducer)

  return (
    <div className="App">
      {isLogged}
       <Navbar/>
       <Router> 
        <Switch>
      
        
         <Route exact path="/" component={Home}/>
         <Route exact path="/signin" component={Signin}/>
         <Route exact path="/getAllUsers" component={GetAllUsers}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
