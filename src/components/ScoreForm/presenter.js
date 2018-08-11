import React from 'react';
import './style.css';
import {FormGroup,Col, Label,Input,Button, Form  } from 'reactstrap';
import PropTypes from 'prop-types';

const ScoreForm = props => (
        <div className="score-container" > 
          <div className="score-title">
          프로젝트 평가<hr color="black" /> 
          </div> 
          <div className="score-body">
          <Form onSubmit= {props.handleSubmit}>
          <FormGroup tag="fieldset" row >
          <legend className="col-form-label col-sm-12">Q1) 평가질문1 ..? </legend>
            <Col sm={10}>
              <FormGroup check > 
              <Label check for="q1">
                  <Input 
                  type="radio" 
                  name="q1" 
                  value="A"
                  checked={props.q1Value==="A"}
                  onChange={props.handleInputChange}
                  />
                  A
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check for="q1">
                  <Input 
                  type="radio" 
                  name="q1"
                  value="B"
                  checked={props.q1Value==="B"}
                  onChange={props.handleInputChange}
                   />
                 B
                </Label>
              </FormGroup>
              <FormGroup check >
                <Label check for="q1">
                  <Input 
                  type="radio"
                  name="q1" 
                  value="C"
                  checked={props.q1Value==="C"}
                  onChange={props.handleInputChange}
                    />
                  C
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
  
  
          <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-12">Q2) 평가질문2 ..? </legend>
            <Col sm={10}>
              <FormGroup check>
                <Label check for="q2">
                  <Input 
                  type="radio"
                  name="q2" 
                  value="A"
                  checked={props.q2Value==="A"}
                  onChange={props.handleInputChange} />
                  A 
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check for="q2">
                  <Input 
                  type="radio" 
                  name="q2"
                  value="B"
                  checked={props.q2Value==="B"}
                  onChange={props.handleInputChange} />
                  B 
                </Label>
              </FormGroup>
              <FormGroup check >
                <Label check for="q2">
                  <Input 
                  type="radio"
                  name="q2"
                  value="C"
                  checked={props.q2Value==="C"}
                  onChange={props.handleInputChange}  />
                  C
                </Label>
              </FormGroup>

            
            </Col>
          </FormGroup>
  
          <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-12">Q3) 평가질문3 ..? </legend>
            <Col sm={10}>
              <FormGroup check>
                <Label check for="q3">
                  <Input 
                  type="radio"
                  name="q3" 
                  value="A"
                  checked={props.q3Value==="A"}
                  onChange={props.handleInputChange} />
                  A 
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check  for="q3">
                  <Input 
                  type="radio" 
                  name="q3" 
                  value="B"
                  checked={props.q3Value==="B"}
                  onChange={props.handleInputChange} />
                  B 
                </Label>
              </FormGroup>
              <FormGroup check >
                <Label check  for="q3">
                  <Input 
                  type="radio" 
                  name="q3"  
                  value="C"
                  checked={props.q3Value==="C"}
                  onChange={props.handleInputChange} />
                 C
                </Label>
              </FormGroup>
     
            </Col>
          </FormGroup>

          <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-12">Q4) 평가질문4 ..? </legend>
            <Col sm={10}>

              <FormGroup check>
                <Label check for="q4">
                  <Input 
                  type="radio" 
                  name="q4" 
                  value="one"
                  checked={props.q4Value==="A"}
                  onChange={props.handleInputChange}/>
                  A
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check  for="q4">
                  <Input 
                  type="radio"
                  name="q4"  
                  value="B"
                  checked={props.q4Value==="B"}
                  onChange={props.handleInputChange}/>
                  B 
                </Label>
              </FormGroup>

              <FormGroup check >
                <Label check  for="q4">
                  <Input 
                  type="radio" 
                  name="q4" 
                  value="C"
                  checked={props.q4Value==="C"}
                  onChange={props.handleInputChange}  />
                  C
                </Label>
              </FormGroup>

              
            </Col>
          </FormGroup>

          <FormGroup className="evl-formgroup-textarea">
          <Label for="evl-textarea">Q5) 자유롭게 의견을 적어주세요...?</Label>
          <Input 
            type="textarea" 
            name="score-textarea" 
            id="score-textarea" 
            placeholder="1000자 이내.." 
            maxlength="2000" 
            value={props.textValue}
            onChanbe={props.handleInputChange}
          />
          </FormGroup>

        <div className="score-button" >
          <Button type="submit" value="score" >Submit</Button>
        </div>
        </Form>
          </div>

        </div>
  )
 
  ScoreForm.propsTypes = {
    q1Value: PropTypes.string.isRequired,
    q2Value: PropTypes.string.isRequired,
    q3Value: PropTypes.string.isRequired,
    q4Value: PropTypes.string.isRequired,
    q5textvalue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }
  

  export default ScoreForm ;