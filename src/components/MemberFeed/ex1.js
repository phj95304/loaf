import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading/Spinner';
import MemberItem from '../MemberItem/ex2';
import RecomMemberItem from '../RecomMemberItem';
import './styles.css';

const MemberFeed = props => (
    
    <div className = "memberfeed_container">
        <div className = "memberfeed_projects">
            <br/>
            <p className = "memberfeed_intro1">
                &nbsp; # 친구 보기 
            </p>
            <br></br>
            <div className = "member_container">
            <MemberItem/>
            <MemberItem/>
            <MemberItem/>
            <MemberItem/>
            <MemberItem/>
            <MemberItem/>
            </div> 
        </div>

        <div className = "memberfeed_recommembers">
            <br/>
            <p className = "memberfeed_recommembers_title">
                &nbsp; # 추천 친구 
            </p>
            <br></br>
            <div className = "recom_member_container">
                <RecomMemberItem/>
                <RecomMemberItem/>
                <RecomMemberItem/>
            </div> 
        </div>
    </div>
    
    
)
export default MemberFeed;