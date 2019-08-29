import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';

import Home from './pages/Home/Home'
import Signin from './pages/Signin/Signin'
import Navbar from './pages/Navbar/Navbar'
import GetAllUsers from './pages/GetAllUsers/GetAllUsers'
 
function App() {
  return (
    <div className="App">
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
