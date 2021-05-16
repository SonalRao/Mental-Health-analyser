import React from 'react';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './App.css';

function TakeATest(){

  function FormExample() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit} style={{marginLeft:'320px',marginRight:'320px',marginTop:'30px',borderLeft:"6px solid ",borderRight:"6px solid ",borderTop:"6px solid ",borderBottom:"6px solid ",backgroundColor:'white',borderRadius:"20px"}}>
        <h2>PERSONAL INFO</h2>
        <hr style={{border:"2px dashed black"}}/>
        <Form.Row>
          <Form.Group  md="4" controlId="validationCustom01" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
            <Form.Label>FIRST NAME</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group  md="4" controlId="validationCustom02" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
            <Form.Label>LAST NAME</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group  md="4" controlId="validationCustomUsername" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
            <Form.Label>EMAIL</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="email"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group  md="3" controlId="validationCustom05" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
            <Form.Label>CONTACT NUMBER</Form.Label>
            <Form.Control type="number" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Contact Number
            </Form.Control.Feedback>
          </Form.Group>
          <hr style={{border:"2px solid",borderColor:'black'}}/>
          <h2>QUESTIONS</h2>
          <hr style={{border:"2px solid black"}}/>
          <Form.Group controlId="exampleForm.SelectCustom1" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label> Q1) How many hours per day do you spend on social media? </Form.Label>
      <Form.Control as="select" custom>
        <option>less than 1</option>
        <option>less than 2</option>
        <option>less than 3</option>
        <option>less than 4</option>
        <option>more than 4</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom2" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label> Q2) How do you feel being the center of attention? (5 being the best and 1 being the worst) </Form.Label>
      <Form.Control as="select" custom style={{marginLeft:"20px"}}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom3" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label>Q3) How do you feel while being observed while working?(5 being the best and 1 being the worst)</Form.Label>
      <Form.Control as="select" custom>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom4" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label> Q4) How confident are you while talking to someone you don't know very well?(5 being the best and 1 being the worst)</Form.Label>
      <Form.Control as="select" custom>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom5" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label>Q5
        ) How well can you express disagreement or disapproval to someone you don't know very well?(5 being the best and 1 being the worst)</Form.Label>
      <Form.Control as="select" custom>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
        </Form.Row>
        <hr/>
        <Button type="submit" size="lg" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}} >Submit</Button>
      </Form>
    );
  }
   function AlertDismiss(){
    const [open,close] = useState(false); 
    return (
       <div>
         <Alert show={open} variant="success">
         <Alert.Heading style={{fontFamily:'sans-serif',fontSize:'xx-large',fontWeight:'bold'}}>Welcome to Take a Test section</Alert.Heading>  
         <p style={{fontFamily:'sans-serif',fontSize:'x-large'}}>
            Questions asked will be based on personality,daily lifestyle,mood changes 
            <br style={{fontFamily:'sans-serif',fontSize:'x-large'}}/>Five Options will be provided for each question 
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button style={{fontSize:'xx-large'}}onClick={() => close(false)} variant="outline-success" style={{marginLeft:"auto",marginRight:'auto'}}>
              Close
            </Button>
          </div>
        </Alert>
        {!open && <Button onClick={() => close(true)} style={{fontSize:'x-large'}}>About This Page</Button>} 
       </div>
    )
   }
    return(
      <div className="Test">
            <AlertDismiss/>
            <hr/>
            <FormExample/> 
      </div>
      
    )
  }
  
export default TakeATest;