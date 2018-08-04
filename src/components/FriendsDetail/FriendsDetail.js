import React from 'react';
import { Card, CardImg, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import './FriendsDetail.css'

const FriendsDetail = (props) => {
  return (
    <div className="container2">
      <h2 className="projectTitle"> 진행중인 프로젝트 </h2>
      <div className="row">
        <div className="col-lg-6 portfolio-item">
          <Card className="card h-100">
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardTitle className="card-title">Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          </Card>
        </div>
        <div className="col-lg-6 portfolio-item">
          <Card className="card h-100">
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardTitle className="card-title">Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          </Card>
        </div>
        <div className="col-lg-6 portfolio-item">
          <Card className="card h-100">
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardTitle className="card-title">Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          </Card>
        </div>
      </div>
      <h2 className="projectTitle"> 완료된 프로젝트 </h2>
      <div className="complete">
      <div className="row">
        <div className="col-md-7 ">
            <img className="img-fluid rounded mb-3 mb-md-0 project" src="http://placehold.it/700x300" alt=""/>
        </div>
        <div className="col-md-5">
          <div>
            <div className="projectFont">Project One</div>
            <br/>
            <div>#자바 # 행맨게임</div>
            <br/>
            <div className="star">별 4개</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FriendsDetail;