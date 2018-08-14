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
    <div className = "memberfeed_container">
        <div className = "memberfeed_projects">
            <br/>
            <p className = "memberfeed_intro1">
                &nbsp; # 친구 보기 
            </p>
            <br></br>
            <div className = "member_container">
            {props.feed.map(member => <MemberItem { ...member} key={member.id} />)}
            </div> 
        </div>

        <div className = "memberfeed_recommembers">
            <br/>
            <p className = "memberfeed_recommembers_title">
                &nbsp; # 추천 친구 
            </p>
            
        </div>
    </div>

    
)

MemberFeed.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default MemberFeed;