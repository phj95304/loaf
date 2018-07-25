import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText} from 'reactstrap';
import './Landing.css'
import cardbackground from '../Landing/cardbackground.jpg'
import background from '../Landing/background.jpg'

const Landing = (props) => {
    return(
      <div>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>

      <Card>
        <CardHeader tag="h3">Featured</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
    </div>
    );
    
} 
export default Landing;