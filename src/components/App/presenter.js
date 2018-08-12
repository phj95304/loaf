import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';

//import Navbar from '../Navbar';
import Footer from '../Footer';
import Landing from '../Landing';
import Auth from '../Auth';
import ProjectFeed from '../ProjectFeed';
import ProjectDetail from '../projectDetails';
import ScoreForm from '../ScoreForm/presenter';
import MemberFeed from '../MemberFeed';

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
    
    <Route exact path="/score" component={ScoreForm}/>
    <Route exact path="/members" component={MemberFeed}/>
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth}/>
    <Route exact path="/projects" component={ProjectFeed}/>
    <Route exact path="/projects/:id" component={ProjectDetail}/>
    <Route exact path="/members" component={MemberFeed}/>
  </Switch>
);
export default App;