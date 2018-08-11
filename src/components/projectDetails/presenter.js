import React, {Component}from 'react'
import './projectDetailDia.css';
import {Card, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import h from './h.jpg';

const ProjectDetail =props => {
  const  {feed, projectId} = props;

  return (
    <div >
    <br/>
    <Card className="container1">
      <div className="header">
        <p className="index">
          Project Details
        </p>
        <img src={h} className="project_img"/>
      </div>

      <div className="project_title">
        <p className = "title">feed.projectId.title</p>
        <p className = "count">
          feed.projectId.member_count/feed.projectId.max_member 명
          <span className = "apply_btn"> <Button className = "btn"> <i class="fas fa-angle-right"></i> 지원하기 </Button></span>
        </p>
      </div>

      <div className = "creator">
      <div >
        <img src = {h} className = "creator_img" />
        </div>
        <div className = "creator_profile">
        <p className = "creator_name"><span className = "name">feed.projectId.creator.username </span> 님의 소개  </p>
        <p className = "creator_univ"> {projectId.creator.school} </p>
        <p className = "creator_bio"> feed.projectId.creator.bio </p>
        </div>
      </div>

      <div className = "project_body">
        <p className = "intro1">프로젝트 개요</p>
        <p className = "project_caption"> feed.projectId.caption</p>
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
        <span className = "tags"> &nbsp;  feed.projectId.tags</span></p>
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
