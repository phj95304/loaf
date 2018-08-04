import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './styles.css'
import PropTypes from 'prop-types';

const SignupForm = props => (
    <div className = "signbackground">
          <br/>
          <br/>
<Form className = "signupform" onSubmit = {props.handleSubmit}>
        <FormGroup className = "signuptitle_detail">
          <br/>
          <Label className = "signup_title">Sign up</Label>
          <Input plaintext>아래 내용을 입력해 주세요</Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleName"><i class="fas fa-user"></i>&nbsp;닉네임</Label>
          <Input 
            type="username" 
            name="username" 
            value = {props.usernameValue}
            placeholder="User Name" 
            onChange = {props.handleInputChange}  
          />
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleEmail"><i class="fas fa-at"></i>&nbsp;이메일</Label>
          <Input 
            type="email" 
            name="email" 
            value = {props.useremailValue} 
            placeholder="Email" 
            onChange = {props.handleInputChange} 
            />
        </FormGroup>

        <FormGroup>
          <Label for="exampleName"><i class="fas fa-user"></i>&nbsp;성명</Label>
          <Input 
            type="name" 
            name="name" 
            value = {props.nameValue}
            placeholder="Name" 
            onChange = {props.handleInputChange}  
          />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword"><i class="fas fa-lock"></i> &nbsp;비밀번호</Label>
          <Input 
             type="password" 
             name="password1" 
             value={props.password1Value}
             placeholder="Password" 
             onChange={props.handleInputChange}
           />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword"><i class="fas fa-lock"></i>&nbsp;비밀번호 확인</Label>
          <Input 
             type="password" 
             name="password2" 
             value={props.password2Value}
             placeholder="Check Password" 
             onChange={props.handleInputChange}
           />
        </FormGroup>
 
          <hr/>
          <div>
            <Button type="submit"  className = "submit_btn" ><i class="fas fa-sign-in-alt">&nbsp;Sign up</i></Button> 
          </div>
          
        </Form>
      <br/>
  <br/>
</div>
)

SignupForm.propsTypes = {
  usernameValue: PropTypes.string.isRequired,
  useremailValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  passwor1dValue: PropTypes.string.isRequired,
  password2Value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default SignupForm;