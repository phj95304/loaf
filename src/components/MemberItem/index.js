import React from 'react';
import './style.css';
import img from './as.jpg'; 
import { Card} from 'reactstrap';

const RecomProjects = (props) => {
  
  return (
   
    <div className="container">
    <br/>
    <div className = "intro1"> &nbsp; #추천 프로젝트 </div>
    <br></br>
    <Card className="recommend_project_card">
      <div className = "member_img_history">
        <img 
          className = "member_img"
          src = {img}
          alt = "hi"
        />
        <p className = "on_project"><i class="far fa-lightbulb"></i> :1 <span className = "last_project"><i class="fas fa-lightbulb"></i> :4 </span></p> 
      </div>

      <div className = "member_prop"> 
        <p className = "member_name"> 박혜진 </p>
        <p className = "member_univ">한성대학교 </p>
        <p className = "member_residence"> 서울특별시 </p> 
        <button className = "go_to_profile"><i class="fas fa-caret-right"></i> 프로필</button>
      </div>

      <div className = "tag_prop">
        <div>
        <p className = "intro2"> 관심사 </p>
        </div>
        <div className = "tags">
          <p className = "tag1">#프로그래밍 </p>
          <p className = "tag2">#천문학 </p>
          <p className = "tag3">#배드민턴 </p>
        </div>
      </div>
    </Card>
    <hr/>
</div>
  );
}

export default RecomProjects;