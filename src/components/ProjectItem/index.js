import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'reactstrap';
import './styles.css';
import {Link} from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';

const ProjectsItem = (props) => {
    return (
        <div className="projectItem_container">
        
        <Card className = "project_card">
            <div className = "header">
            <p className = "projectItem_intro1">Project&nbsp; <i class="fas fa-bookmark"></i></p>
            </div>
            <div className = "project_summary">
                <div>
                    <img
                    className = "projectItem_creator_img"
                    src= {props.creator.profile_image}
                    alt = {props.creator.username}
                    />
                </div>
                <div className = "project_title">
                    <p className = "projectItem_title"> <i class="fas fa-caret-right"></i>&nbsp;{props.title} </p>
                </div>

                <div className = "projectItem_project_prop">
                    <p className = "max_member"> <i class="fas fa-user-circle"></i>&nbsp;{props.member_count}/{props.max_member}명
                    <span className = "region"><i class="fas fa-map-marker-alt"></i> {props.creator.address} </span> 
                    </p>
                </div>

            </div>

            <Link to = {`/projects/${props.id}`}>
            <div>
            <img 
                className = "projectItem_img"
                src= {props.file}
                alt = {props.title}
            />
            </div>
            </Link>

            <div className = "projectItem_caption">    
            <LinesEllipsis
                text={props.caption}
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

ProjectsItem.propsTypes = {
  file:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  max_member : PropTypes.number.isRequired,
  schedule: PropTypes.string.isRequired,
  tags:PropTypes.array.isRequired,
}


export default ProjectsItem;