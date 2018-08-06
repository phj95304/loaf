import React from 'react';
import Loading from '../Loading/Spinner';
import './styles.css';
import PropTypes from  'prop-types';
import ProjectItem from '../ProjectItem';

const ProjectFeed = (props)  => {
        const { feed, loading } = this.props; //배열임
        let postContent;

        if(feed === null || loading || Object.keys(feed).length === 0){
            postContent = <Loading />
          } else {
            postContent = feed.map(project => (
                <ProjectItem key={project.id} project={project}  />
            ));
    }
}

ProjectFeed.propTypes = {
    getFeed : PropTypes.func.isRequired,
    feed : PropTypes.array.isRequired
}

export default ProjectFeed;