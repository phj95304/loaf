import React from 'react';
import './recom_style.css';
import { Card } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import img from './a.jpg';
  import LinesEllipsis from 'react-lines-ellipsis';


const RecomProjects = (props) => {

  
  return (
      
    <div className="projectItem_container">
        
        <Card className = "project_card">
            <div className = "header">
            <p className = "projectItem_intro1">Project</p>
            </div>
            <div className = "project_summary">
                <div>
                    <img
                    className = "projectItem_creator_img"
                    src= {img}
                    alt = "hi"
                    />
                </div>
                <div className = "project_title">
                    <p className = "projectItem_title"> props.title </p>
                </div>

                <div className = "projectItem_project_prop">
                    <p className = "max_member"> props.member_count/props.max_member명
                    <span className = "region"> props.creator.address </span> 
                    </p>
                </div>

            </div>

            <Link to = "/projects/projectDetail">
            <div>
            <img 
                className = "projectItem_img"
                src= {img}
                alt = "props.title"
            />
            </div>
            </Link>

            <div className = "projectItem_caption">    
            <LinesEllipsis
                text="props.caption"
                maxLine='2'
                ellipsis='...'
                trimRight
                basedOn='letters'
            />
            </div>

        </Card>

        <br/>
        </div>
    
  );
}



export default RecomProjects;