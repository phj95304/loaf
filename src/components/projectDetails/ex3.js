import React, {Component}from 'react'
import './projectDetailDia.css';
import {Card, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import h from './h.jpg';

const ProjectDetail =props => {

  return (
    <div >
    <br/>
    <Card className="container1">
      <div className="header">
        <p className="index">
          Project Details <i class="fas fa-bookmark"></i>
        </p>
        <img src={h} className="project_img"/>
      </div>

      <div className="project_title">
        <p className = "title">project.title</p>
        <p className = "count">
        <i class="fas fa-user-circle"></i>&nbsp;3/5 명
          <span className = "apply_btn"> <Button className = "btn"> <i class="fas fa-angle-right"></i> 지원하기 </Button></span>
        </p>
      </div>

      <div className = "creator">
      <div >
        <img src = {h} className = "creator_img" />
        </div>
        <div className = "creator_profile">
        <p className = "creator_name"><span className = "name">김지수 </span> 님의 소개  </p>
        <p className = "creator_univ"> <i class="fas fa-graduation-cap"></i>&nbsp;한성대학교 </p>
        <div className = "creator_bio">안녕하세요 저는 지구를 지키는 아스가르드 왕자예욘 일찍히 아버지와 어머니를 여의고 남동생과 살고있슨다. 남동생 개새끼예욘</div>
        </div>
      </div>

      <div className = "project_body">
        <p className = "intro1">프로젝트 개요</p>
        <div className = "project_caption"> 안녕하세요</div>
      </div>

      <div className = "member">
        <p className = "intro2"> 참가자</p>
        <img 
        className = "member_photo"
        src = {h}
        />
      </div>
      <div className = "interest">
        <p className = "intro3"> <i class="fas fa-tags"></i>프로젝트 태그 
        <span className = "tags"> &nbsp;  project.projectId.tags</span></p>
        <br/>
      </div>
      <hr/>
      <br/><br/>
    </Card>
    <br/>
    </div>
  );
}


export default ProjectDetail;
