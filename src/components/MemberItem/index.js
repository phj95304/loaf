import React from 'react';
import './styles.css';
import img from './as.jpg'; 
import PropTypes from 'prop-types';
import { Card} from 'reactstrap';

const MemberItem = (props) => {
  
  return (
   
    <div className="container">
    <Card className="recommend_project_card">
      <div className = "member_img_history">
        <img 
          className = "member_img"
          src = {props.profile_image}
          alt = "hi"
        />
        <p className = "on_project"><i class="far fa-lightbulb"></i> :1 <span className = "last_project"><i class="fas fa-lightbulb"></i> :4 </span></p> 
      </div>

      <div className = "member_prop"> 
        <p className = "member_name"> {props.username} </p>
        <p className = "member_univ">{props.school} </p>
        <p className = "member_residence"> {props.address} </p> 
        <button className = "go_to_profile"><i class="fas fa-caret-right"></i> 프로필</button>
      </div>

      <div className = "tag_prop">
        <div>
        <p className = "intro2"> 관심사 </p>
        </div>
        <div className = "tags">
        {/*{props.tags.map(tag => <p className = "tag" {...tag} key = {})}*/}
        <p className = "tag"/>
        </div>
      </div>
    </Card>
    <br/>
</div>
  );
}
MemberItem.propsTypes = {
  profile_image:PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  tags:PropTypes.array.isRequired,
}
export default MemberItem;