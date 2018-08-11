import React from 'react';
import './CommentsForm.css';
import {Label, Input, Form} from 'reactstrap';
import PropTypes from 'prop-types';

const CommentsInputForm = props => {

  return (
    <div cl assName="form">
    <Form>
     <Label className = "comments_intro1">댓글 <span className = "comments_count">25</span></Label>
     <div className = "comment_prop">
      <div className = "comment_input">
          <Input 
            onKeyPress={props.onKeyPress} //엔터 눌렀을때 댓글 추가
            type="text" 
            name="comments" 
            value = {props.userCommentValue} //인풋 값
            placeholder="주제와 무관한 댓글, 악플은 삭제될 수 있습니다." 
            onChange = {props.handleInputChange} 
            >  
          </Input>
          </div>
          <div className = "comment_btn">
          <button onClick = {props.onCreate} className = "btn"> &nbsp;&nbsp;등록&nbsp;&nbsp; </button>
          </div>
         </div>
    </Form>
    </div>
  );
};

Comments.propsTypes= {
  onKeyPress: PropTypes.func.isRequired,
  userCommentValue: PropTypes.string.isRequired,
  handleInputChange:PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired
}

export default CommentsInputForm;