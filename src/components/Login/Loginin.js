import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Signin.css'
import {  Link } from 'react-router-dom';


const Loginin = (props) => {
    return(
        <div className = "signbackground">
          <br/>
          <br/>
<Form className = "signinform">
        <FormGroup className = "signintitle">
          <Label for="exampleEmail" >로그인</Label>
          <Input plaintext>아래 내용을 입력해 주세요</Input>
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleEmail">이메일</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">비밀번호</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        
        <Button> Sumit </Button> 
        <hr/>
        <div>
          계정이 없습니까? 
          <Link to="/signin">
                <Button> Sign in </Button>
                </Link> 
          </div>
          
        </Form>
        <br/>
        <br/>
            </ div>
    )
 

}
export default Loginin;