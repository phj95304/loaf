import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MemberFeed from './presenter';

class Container extends Component {
    state= {
        loading: true
    };
    static propTypes ={ 
        getFeed: PropTypes.func.isRequired
    };

    componentWillReceiveProps = nextProps => {
        if(nextProps.feed){
            this.setState({
                loading: false
            })
        }
    }
    
    componentDidMount(){
        const { getUserFeed } = this.props;
        if(!this.props.feed){
            getUserFeed();
        } else {
            this.setState({
                loading:false
            })
        }
    }

    render() {
        const { feed } = this.props;
        return <MemberFeed {...this.state}  feed={feed} />
    }
}

export default Container;