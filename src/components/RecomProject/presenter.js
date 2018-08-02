import React from 'react';
import './style.css';
import { Card, CardImg, CardText, CardBody, CardSubtitle,
  CardTitle,  Button } from 'reactstrap';
  import image from '../showProject/download.jpg';
  
 

const RecomProjects = (props) => {
  return (
   
    <div className="container">
    <br/>
                <h1> &nbsp; #추천 프로젝트 </h1>
                <br></br>
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
            <Card className="card h-100">
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody className="card-body">
            <CardTitle className="card-title">색연필로 그림을 그려보자</CardTitle>
            <CardSubtitle>상시모집</CardSubtitle>
            <CardText>샌연필로 간단한 그림을 그려보자. 초보자 환영합니다.</CardText>
            <Button>Button</Button>
            </CardBody>
            </Card>
        </div>
    </div>
    <hr/>
</div>
  );
}


export default RecomProjects;