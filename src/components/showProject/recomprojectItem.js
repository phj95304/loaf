import React from 'react';
import './recom_style.css';
import { Card, CardImg,  CardBody, CardSubtitle,
  CardTitle,  Button } from 'reactstrap';
  import { Link } from 'react-router-dom';

  
 

const RecomProjects = (props) => {
  
  const {recommand_project} = this.props;
  
  return (
   
    <div className="container">
    <br/>
                <h1> &nbsp; #추천 프로젝트 </h1>
                <br></br>
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
            <Card className="card h-100">
            <CardImg top width="100%" src={recommand_project.project_image} alt="Project image cap" />
            <CardBody className="card-body">
            <CardTitle className="card-title">{recommand_project.title}</CardTitle>
            <CardSubtitle>{recommand_project.tags}</CardSubtitle>
            <CardSubtitle>{recommand_project.max_number}</CardSubtitle>
            <Link to="/projects/recomprojectDetail">
                <Button> Details </Button>
                </Link>
            </CardBody>
            </Card>
        </div>
    </div>
    <hr/>
</div>
  );
}

RecomProjects.propTypes = {
  project_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  max_number: PropTypes.int.isRequired
};


export default RecomProjects;