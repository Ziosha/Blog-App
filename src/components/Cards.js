import React from 'react';
import {Card} from 'react-bootstrap';
import img4 from '../assets/img/img_4.jpg';
import img5 from '../assets/img/img_5.jpg';
import img6 from '../assets/img/img_6.jpg';


export const Cards = ()=>(
 <>   
<div className="cards">
<Card style={{ width: '25rem'}}>
  <Card.Img variant="top" src={img4} height="200px"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
</div>
<div className="cards">

<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={img5} height="200px"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>

</div>
<div className="cards">
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={img6} height="200px" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      asdasdasd asd  asdasdasdsadas   
      asdasdsadjkasklaslkjdaljksaljdljk 
      asdjallasdjlsalasjjl 
      asldjjlkaljkd
    </Card.Text>
    
  </Card.Body>
</Card>
</div>
</>
);