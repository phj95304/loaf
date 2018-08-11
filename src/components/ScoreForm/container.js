import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScoreForm from './presenter';

class Container extends Component {
    state = {
        q1 :"",//질문1
        q2 : "",//질문2
        q3: "",//질문3
        q4: "",//질문4
        q5text:" "//textarea
    };

    static propTypes ={///!!!!!!!!!!!!!!!!!!
        createAccount : PropTypes.func.isRequired
    };

    render() {
        const { q1,q2, q3, q4, textarea} = this.state;
        return (
            <ScoreForm 
                q1Value = {q1}
                q2Value = {q2}
                q3Value = {q3}
                q4Value = {q4}
                q5textvalue={q5text}
                handleInputChange = {this._handleInputChange}
                handleSubmit={this._handleSubmit}    
              
            />
        )
    };

    _handleInputChange = event => {
        const { target : { value, name}} = event;
        this.setState({
            [name] : value//name은 뭐든 가능!
        });
    }
    _handleSubmit = event => {
        const { createAccount } = this.props;
        const { username, password, email, name } = this.state;
        event.preventDefault();
        // redux will be here
        createAccount(username, password, email, name);
    }
}

export default Container;
