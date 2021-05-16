import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import './Nav.css';
import {useState} from 'react';
import './App.css';

function Contact(){
   const [color,changeCol] = useState('red');
   const [color1,changeCol1] = useState('yellow');
   const [color2,changeCol2] = useState('springgreen');
   const [color3,changeCol3] = useState('turquoise');
   const [color4,changeCol4] = useState('violet');
  return(
    <div className="Cont">
      <div>
    <div>
     <Card onMouseEnter={()=>changeCol('white')} onMouseLeave={()=>changeCol('red')}style={{ width: '18rem',marginLeft:'auto',marginRight:'auto',flexDirection:'column',backgroundColor:color}}>
  <Card.Body>
    <Card.Title  style={{fontFamily:'serif',fontWeight:'bold'}}>SONAL RAO</Card.Title>
    <Card.Text>
      Designation - Team Leader
      <br/>
      Domains - 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem onMouseEnter={()=>changeCol('white')} onMouseLeave={()=>changeCol('red')} style={{backgroundColor:color}}>Web Development</ListGroupItem>
    <ListGroupItem onMouseEnter={()=>changeCol('white')} onMouseLeave={()=>changeCol('red')} style={{backgroundColor:color}}>Machine Learning</ListGroupItem>
    <ListGroupItem onMouseEnter={()=>changeCol('white')} onMouseLeave={()=>changeCol('red')} style={{backgroundColor:color}}>Email Id - sonalmrao@gmail.com</ListGroupItem>
  </ListGroup>
</Card>
    </div>
    <div className="container">
      <div className="row">
      <Card onMouseEnter={()=>changeCol1('white')} onMouseLeave={()=>changeCol1('yellow')} style={{ width: '18rem',marginLeft:'auto',marginRight:'auto',flexDirection:'column',backgroundColor:color1}}>
  <Card.Body>
    <Card.Title style={{fontFamily:'serif',fontWeight:'bold'}}>SHAKTI TRIPATHI</Card.Title>
    <Card.Text>
      Designation - Web Developer
      Domains -
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem onMouseEnter={()=>changeCol1('white')} onMouseLeave={()=>changeCol1('yellow')}style={{backgroundColor:color1}}>Web Development</ListGroupItem>
    <ListGroupItem  onMouseEnter={()=>changeCol1('white')} onMouseLeave={()=>changeCol1('yellow')}  style={{backgroundColor:color1}}>Competitive Programming</ListGroupItem>
    <ListGroupItem  onMouseEnter={()=>changeCol1('white')} onMouseLeave={()=>changeCol1('yellow')}style={{backgroundColor:color1}}>Email Id - shaktitripathi02@gmail.com</ListGroupItem>
  </ListGroup>
</Card>
<Card  onMouseEnter={()=>changeCol2('white')} onMouseLeave={()=>changeCol2('springgreen')}style={{ width: '18rem',marginLeft:'auto',marginRight:'auto',flexDirection:'column',backgroundColor:color2}}>
  <Card.Body>
    <Card.Title  style={{fontFamily:'serif',fontWeight:'bold'}}>ARVIND SHETE</Card.Title>
    <Card.Text>
      Designation - Web Developer
      <br/>
      Domains - 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem  onMouseEnter={()=>changeCol2('white')} onMouseLeave={()=>changeCol2('springgreen')}style={{backgroundColor:color2}}>Web Development</ListGroupItem>
    <ListGroupItem  onMouseEnter={()=>changeCol2('white')} onMouseLeave={()=>changeCol2('springgreen')}style={{backgroundColor:color2}}>Machine Learning</ListGroupItem>
    <ListGroupItem  onMouseEnter={()=>changeCol2('white')} onMouseLeave={()=>changeCol2('springgreen')}style={{backgroundColor:color2}}>Email Id - avshete100@gmail.com</ListGroupItem>
  </ListGroup>
</Card>
      </div>
    </div>
    <div className="container">
      <div className="row">
      <Card onMouseEnter={()=>changeCol3('white')} onMouseLeave={()=>changeCol3('turquoise')} style={{ width: '18rem',marginLeft:'auto',marginRight:'auto',flexDirection:'column',backgroundColor:color3}}>
  <Card.Body>
    <Card.Title  style={{fontFamily:'serif',fontWeight:'bold'}}>RUTVIJ WAMANSE</Card.Title>
    <Card.Text>
      Designation - Machine Learning Team 
      <br/>
      Domains - 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem  onMouseEnter={()=>changeCol3('white')} onMouseLeave={()=>changeCol3('turquoise')}style={{backgroundColor:color3}}>Machine Learning</ListGroupItem>
    <ListGroupItem  onMouseEnter={()=>changeCol3('white')} onMouseLeave={()=>changeCol3('turquoise')}style={{backgroundColor:color3}}>Deep Learning</ListGroupItem>
    <ListGroupItem  onMouseEnter={()=>changeCol3('white')} onMouseLeave={()=>changeCol3('turquoise')}style={{backgroundColor:color3}}>Email Id - wamanserutvij25@gmail.com</ListGroupItem>
  </ListGroup>
</Card>
<Card onMouseEnter={()=>changeCol4('white')} onMouseLeave={()=>changeCol4('violet')}style={{width: '18rem',marginLeft:'auto',marginRight:'auto',flexDirection:'column',backgroundColor:color4}}>
  <Card.Body>
    <Card.Title  style={{fontFamily:'serif',fontWeight:'bold'}}>SANSKAR ZANWAR</Card.Title>
    <Card.Text>
      Designation - Machine Learning Team
      <br/>
      Domains - 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem onMouseEnter={()=>changeCol4('white')} onMouseLeave={()=>changeCol4('purple')}style={{backgroundColor:color4}}>Marketing</ListGroupItem>
    <ListGroupItem onMouseEnter={()=>changeCol4('white')} onMouseLeave={()=>changeCol4('purple')}style={{backgroundColor:color4}}>Machine Learning</ListGroupItem>
    <ListGroupItem onMouseEnter={()=>changeCol4
      ('white')} onMouseLeave={()=>changeCol4('purple')}style={{backgroundColor:color4}}>Email Id - sanskar982265@gmail.com</ListGroupItem>
  </ListGroup>
</Card>
      </div>
    </div>
    </div>
    </div>
  );
}
export default Contact;