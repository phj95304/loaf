import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProjectsFeed from './presenter';

class Container extends Component {
    state = {
        loading:true
    };

    static propTypes ={
        getFeed : PropTypes.func.isRequired
    };


    componentDidMount() {
        this.props.getFeed();
    };

    render() {
        const {feed} = this.props;
        return(
            <ProjectsFeed
             {...this.props}
             {...this.state}
            />
        )
    };
}

export default Container;