import React from 'react';
import './proj_style.css';
import { Card, CardImg,  CardBody, CardSubtitle,
  CardTitle,  Button } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import PropTypes from  'prop-types';
 

const ProjectsItem = (props) => {

    const { project } = this.props;

  return (
   
    <div className="container">
    <br/>
                <h1> &nbsp; #프로젝트 </h1>
                <br></br>
    <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
            <Card className="card h-100">
            <CardImg top width="100%" src={project.project_image} />
            <CardBody className="card-body">
            <CardTitle className="card-title">{project.title}</CardTitle>
            <CardSubtitle>{project.tags}</CardSubtitle>
            <CardSubtitle>{project.max_number}</CardSubtitle>
            <Link to="/projects/projectDetail">
                <Button> Details </Button>
                </Link>
            </CardBody>
            </Card>
        </div>
    </div>
</div>
  );
}

ProjectsItem.propTypes = {
    project_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    max_number: PropTypes.int.isRequired
  };

export default ProjectsItem;