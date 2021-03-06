import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';

//import Navbar from '../Navbar';
import Footer from '../Footer';
import Landing from '../Landing';
import Auth from '../Auth';
import ProjectFeed from '../ProjectFeed';
import ProjectDetail from '../projectDetails/ex3';
import ScoreForm from '../ScoreForm/presenter';
import MemberFeed from '../MemberFeed/ex1';

const App = props => [
  // Nav, props.isLoggedIn ? <Navbar key={1}/> : null,
  props.isLoggedIn ? <PrivateRoutes key={1}/> : <PublicRoutes key={1}/>, // Priv : sic
   < Footer key = {2} />
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/members" component={MemberFeed}/>
    <Route exact path="/projects" component={ProjectFeed}/>
    <Route exact path="/projects/projectdetail" component={ProjectDetail}/>
    <Route exact path="/score" component={ScoreForm}/>
    
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth}/>
  </Switch>
);
export default App;