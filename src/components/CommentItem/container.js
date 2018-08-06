import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentsForm from './CommentsForm';

class Container extends Comment {
    state = {
        comment = ''
    };
    render(){
        const {comment} = this.state;
        return(
            <CommentsForm
            onKeyPress  = {handleKeyPress}
            userCommentValue = {comment}
            handlecommentChange = {handleChange}
            onCreate = {handleCreate}
            />
        )
    };
    handleChange = (e) => {
        this.setState({
          comment: e.target.value // comment 의 다음 바뀔 값
        });
      }
    
      handleCreate = () => {
        const { comment, todos } = this.state;
        this.setState({
          comment: '', // 인풋 비우고
          // concat 을 사용하여 배열에 추가
          todos: todos.concat({
            id: this.id++,
            text: comment,
            checked: false
          })
        });
      }
    
      handleKeyPress = (e) => {
        // 눌려진 키가 Enter 면 handleCreate 호출
        if(e.key === 'Enter') {
          this.handleCreate();
        }
      }
    
}
