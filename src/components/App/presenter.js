import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

//import Navbar from '../Navbar';
import Footer from '../Footer';
import Landing from '../Landing';
import Auth from '../Auth';
import Projects from '../showProject/presenter';
import ProjectDetail from '../projectDetails/ProjectDetail';

const App = props  => [
    // Nav,
    //props.isLoggedIn ? <Navbar key={1}/> : null,
    props.isLoggedIn ? <PrivateRoutes key={1} /> : <PublicRoutes key={1} />,// Priv : // Public
    <Footer key={2} />
  ];

App.propTypes = {
    isLoggedIn : PropTypes.bool.isRequired
  }
  const PrivateRoutes = props => (
    <Switch>
        <Route exact path="/" component={Landing} />
        
    </Switch>
);

const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/projects/projectDetail" component={ProjectDetail}/>
        
    </Switch>
);

export default App;
