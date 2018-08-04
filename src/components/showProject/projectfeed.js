import ProjectItem from './recomprojectItem'
import React, {Component} from 'react';
import PropTypes from  'prop-types';

class ProjectFeed extends Component {
    render(){
        const {projects} = this.props;//배열임
        return projects.map(project => (
            <ProjectItem key={project.id} project={project}  />
          ));
    }
}

export default ProjectFeed;