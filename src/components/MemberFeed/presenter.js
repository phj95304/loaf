import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading/Spinner';
import MemberItem from '../MemberItem';
import './styles.css';

const MemberFeed = props => {
    if(props.loading) {
        return <LoadingFeed />
    } else if(props.feed){
        return <RenderFeed {...props} />
    }
}

const LoadingFeed = props => (
    <div>
        <Loading />
    </div>
);


const RenderFeed = props => (
    <div className = "projectfeed_container">
        <div className = "projectfeed_projects">
            <br/>
            <h1>
                &nbsp; # 멤버들 
            </h1>
            <br></br>
            {props.feed.map(member => <MemberItem { ...member} key={member.id} />)} 
        </div>

        <div className = "projectfeed_recomprojects">
            <br/>
            <p className = "projectfeed_recomprojects_title">
                &nbsp; # 추천 멤버 
            </p>
            
        </div>
    </div>

    
)

MemberFeed.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default MemberFeed;