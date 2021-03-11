import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import back1 from './back1.jpg';
const Feed = ()=>{
 return(
    <div style={{backgroundColor:'black'}}>
        <div>
        <Alert variant="success">
  <Alert.Heading style={{fontFamily:'serif',fontSize:'xx-large'}}>Hey, nice to see you !!</Alert.Heading>
  <p style={{fontSize:'x-large',fontFamily:'serif'}}>
    We hope you are doing good in this tough times . Welcome to Feedback Section !! 
    This Section is for helping us improve our service and also to know the users side
  </p>
  <hr />
  <p className="mb-0" style={{fontFamily:'serif',fontSize:'large'}}>
    Feel Free to give your honest opinion!
  </p>
</Alert>
        </div>
          <div style={{backgroundImage:`url(${back1})`}}>
        <Form style={{marginLeft:'320px',marginRight:'320px',marginTop:'30px'}}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label style={{fontSize:'x-large',fontFamily:'serif',color:'white'}}>EMAIL ADDRESS</Form.Label>
    <Form.Control type="email" placeholder="" />
  </Form.Group>
  <Form.Group controlId="formGridAddress2">
    <Form.Label style={{fontSize:'x-large',fontFamily:'serif',marginTop:'10px',color:'white'}}>NAME</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>
  <Form.Group controlId="formGridAddress2">
    <Form.Label style={{fontSize:'x-large',fontFamily:'serif',marginTop:'10px',color:'white'}}>PHONE</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group> 
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label style={{fontSize:'x-large',fontFamily:'serif',marginTop:'10px',color:'white'}}>FEEDBACK</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="success" size="lg" type="submit" style={{marginTop:'12px',fontSize:'large',fontFamily:'serif'}}>
    Submit
  </Button>
</Form>
     </div>
    </div>
 )
}
export default Feed;