import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './recommandFriends.css'
import  {Link} from 'react-router-dom';

const viewFriends = (props) => {
    return (
        <div className="view">
            <h1 className="title">View Crumbles</h1>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
                    <Card className="card h-100">
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody className="card-body">
                    <CardTitle className="card-title">최용여</CardTitle>
                    <CardSubtitle>경북대학교</CardSubtitle>
                    <br/>
                    <CardText>#Django #용여베이커리 #인문학</CardText>
                    <Link to="/Friends/FriendsDetail">
                        <Button>Button</Button>
                    </Link>
                    </CardBody>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
                    <Card className="card h-100">
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText></CardText>
                    <Link to="/Friends/FriendsDetail">
                        <Button>Button</Button>
                    </Link>
                    </CardBody>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
                    <Card className="card h-100">
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Link to="/Friends/FriendsDetail">
                        <Button>Button</Button>
                    </Link>
                    </CardBody>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
                    <Card className="card h-100">
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Link to="/Friends/FriendsDetail">
                        <Button>Button</Button>
                    </Link>
                    </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default viewFriends;