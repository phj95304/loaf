import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input} from 'reactstrap';
//import FacebookLogin from 'react-facebook-login';
import './styles.css'

const LoginForm = (props) => (
        <div className = "loginbackground">
            <br/>
            <br/>
            <Form className = "loginform" onSubmit={props.handleSubmit}>
                <FormGroup className = "logintitle">
                <Label for="exampleEmail" >로그인</Label>
                <Input plaintext>아래 내용을 입력해 주세요</Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">유저아이디</Label>
                    <Input
                        type="text" 
                        name="username" 
                        value={props.usernameValue} 
                        placeholder="Username" 
                        onChange={props.handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">비밀번호</Label>
                    <Input 
                        type="password" 
                        name="password" 
                        value={props.passwordValue} 
                        placeholder="Password" 
                        onChange={props.handleInputChange}
                    />
                </FormGroup>  
                <hr/>
                <Input type="submit" value="로그인"/>
                <br />   
            </Form>
            
            <br/>
        </ div>
    );

LoginForm.propTypes = {
    usernameValue : PropTypes.string.isRequired,
    passwordValue : PropTypes.string.isRequired,
    handleInputChange : PropTypes.func.isRequired,
    handleSubmit : PropTypes.func.isRequired,
    handleFacebookLogin : PropTypes.func.isRequired
}
 

export default LoginForm;