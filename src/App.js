import React, { Component } from 'react';
import Navigationbar from './components/navbar';
import Projects from './components/showProject/Projects';
import './App.css';
import { BrowserRouter as  Router,Route } from 'react-router-dom';
import ProjectDetail from './components/projectDetails/ProjectDetail';
import Landing from './components/Landing/Landing';
import Signin from './components/Login/Signin';
import Loginin from './components/Login/Loginin';



class App extends Component {
  render(){
    return(
      <div>
        <Navigationbar /> 
       
        <Landing/>
        <Router>
          <div>
          <Route exact path="/signin" component={Signin}/>
            <Route exact path="/login" component={Loginin}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/projects/projectDetail" component={ProjectDetail}/>
          
          </div>  
        </Router>
       
      </div>
    );
  }
}

export default App;
