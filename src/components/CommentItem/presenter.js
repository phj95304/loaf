import React from 'react';
import './styles.css';
import ji from './ji.jpg';

const CommentItem = props => {
    return(
        <div className = "comment_form">
            <div className = "comment_prop">
                <div className = "comment_img">
                    <img 
                        className = "img"
                        src = {ji}/>
                </div>
                <div className = "comment_username">
                    <p className = "username"> 지수는귕영웡 </p>
                </div>
            </div>

            <div className = "comment_value">
                정말 좋은 프로젝트입니다. 언제 프로젝트가 시작되나요?
            </div>

            <div className = "comment_time">
                2018-08-06 17:00
            </div>

        </div>
    )
    
}
export default CommentItem;
