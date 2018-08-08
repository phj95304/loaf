import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProjectDetail from './presenter';

class Container extends Component {

    static propTypes ={
        getProject : PropTypes.func.isRequired,
        logout : PropTypes.func.isRequired,
        getFeed: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getProject();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.loggedInUser !== this.props.loggedInUser) {
          this.setState({
            loggedIn: true
          });
        }
      }

    render() {
        return(
            <ProjectDetail
             {...this.props}
             {...this.state}
            />
        )
    };
}

export default Container;