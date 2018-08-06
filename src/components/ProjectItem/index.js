import React from 'react';
import './proj_style.css';
import PropTypes from 'prop-types';
import {Card} from 'reactstrap';
import {Link} from 'react-router-dom';
import a from './a.jpg';
import as from './as.jpg';

const ProjectsItem = (props) => {

  return (

    <div className="projectItem_container">
      <br/>
      <h1>
        &nbsp; #프로젝트
      </h1>
      <br></br>
      <Card className = "project_card">
        <div className = "header">
          <p className = "projectItem_intro1">Project</p>
        </div>
        <Link to = "/projects/projectDetail">
        <div>
        <img 
            className = "projectItem_img"
            src= {a} 
            alt = "hi"
          />
        </div>
        </Link>
        <div className = "project_summary">
          <div>
            <img
            className = "projectItem_creator_img"
            src = {as} 
            alt = "hiii"
            />
          </div>
          <div className = "project_title">
            <p className = "projectItem_title"> 색연필로 나만의 작품 만들기 </p>
          </div>

          <div className = "projectItem_project_prop">
            <p className = "max_member"> 3/10명 
              <span className = "region"> 서울 </span> 
            </p>
          </div>

        </div>
      </Card>

      <br/>
    </div>
  );
}

ProjectsItem.propsTypes = {
  file:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  max_member : PropTypes.number.isRequired,
  schedule: PropTypes.string.isRequired,
  tags:PropTypes.array.isRequired,
}


export default ProjectsItem;
