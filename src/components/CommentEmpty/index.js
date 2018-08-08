import React, { Component } from 'react'
import './styles.css'

const CommentEmpty = prop => {
    return(
        <div className = "commentempty_prop">
            <div className = "icon"> <i class="fas fa-search"></i> </div>
            <div>
                <p  classsName = "commentempty_caption"> 등록된 댓글이 없습니다. </p>
            </div>
        </div>
    )

}
export default CommentEmpty;
