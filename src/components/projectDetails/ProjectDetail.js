import React from 'react'
import img from './download.jpg';
import './projectDetailDia.css';
import {Card, Button} from 'reactstrap';


const ProjectDetail = (props) => {

  return (
    <div >
    <br/>
    <Card className="container1">
      <div className="header">
        <p className="index">
          Project Details
        </p>
        <img src={img} className="project_img"/>
      </div>

      <div className="project_title">
        <p className = "title">Project Title</p>
        <p className = "count">
          3/10 명
          <span className = "apply_btn"> <Button className = "btn"> <i class="fas fa-angle-right"></i> 지원하기 </Button></span>
        </p>
      </div>

      <div className = "creator">
      <div >
        <img src = {img} className = "creator_img" />
        </div>
        <div className = "creator_profile">
        <p className = "creator_name"><span className = "name">김지수 </span> 님의 소개  </p>
        <p className = "creator_univ"> 학교 </p>
        <p className = "creator_bio"> 안뇽kdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdk </p>
        </div>
      </div>

      <div className = "project_body">
        <p className = "intro1">프로젝트 개요</p>
        <p className = "project_caption"> 아아ㅏ아ㅏ아ㅏㅏ아아아아아앙</p>
      </div>

      <div className = "member">
        <p className = "intro2"> 참가자</p>
        <img 
        className = "member_photo"
        src = {img}
        />
        <img 
        className = "member_photo"
        src = {img}
        />
      </div>
      <div className = "interest">
        <p className = "intro3"> <i class="fas fa-tags"></i>프로젝트 태그 
        <span className = "tags"> &nbsp;  #dk #kf </span></p>
        <br/>
      </div>
      <hr/>
      <div>
         
          
      </div>
      <br/><br/>
    </Card>
    <br/>
    </div>
  )
}

export default ProjectDetail;
