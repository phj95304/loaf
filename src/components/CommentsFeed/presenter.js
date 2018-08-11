import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentItem from '../CommentItem';
import CommentEmpty from '../CommentEmpty';


            const CommentsFeed = props => {
                if(props.loading) {
                    return <isCommentEmpty />
                } else if(props.feed){
                    return <RenderComment {...props} />
                }
            }

        const isCommentEmpty = props => (
            <div>
                <CommentEmpty />
            </div>
        );

        const RenderComment = props => (
            <div>
                <br/>
            <h1>
                &nbsp; #프로젝트
            </h1>
            <br></br>
                {
                    props.comment.map(comments => 
                        <CommentItem 
                            { ...comments} 
                            key={comments.id} 
                        />
                    )
                } 
            </div>
        )

        CommentsFeed.propTypes = {//댓글 있는지 없는지
            loading: PropTypes.bool.isRequired
        };

        

export default CommentsFeed;