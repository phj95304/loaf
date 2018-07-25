import React from 'react'
import { Card, CardImg, CardText, CardBody, CardSubtitle,
    CardTitle,  Button } from 'reactstrap';
    import image from '../projectDetails/download.jpg';

const ProjectDetail = (props)=> {
 
    return (
        <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
                <Card className="card h-100">
                <CardImg top width="100%" src={image} />
                <CardBody className="card-body">
                <CardTitle className="card-title">Card title</CardTitle>
                <CardSubtitle>프로젝트</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                
                    <Button> details </Button>
                    
                </CardBody>
                </Card>
            </div>
        </div>
    </div>
    )
  }

export default ProjectDetail;
