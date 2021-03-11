import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import wall5 from './wall5.jpg';

function About(){
  return(
    <div style={{backgroundImage:`url(${wall5})`}}>
      <div>
      <Alert variant="primary">
  <Alert.Heading style={{fontFamily:'serif',fontSize:'xx-large'}}>Welcome to About Us Section of Our Page</Alert.Heading>
  <p style={{fontFamily:'serif',fontSize:'x-large'}}>
    We are more than willing to share our motives and the purpose of our site with our users 
    Do give it a full read !!!!!
  </p>
</Alert> 
      </div>
     <Jumbotron fluid>
  <Container>
    <h1>Our Aim</h1>
    <p style={{fontSize:'x-large',fontFamily:'serif',fontWeight:'bold'}}>
       The aim of our website is to help people realise or know about their mental health through a series of questions which will be provided to them through a form present in take a test section . The purpose of the questions asked  will not be to judge but strictly for anaylsis.The anaylsis will help people know the problems they have and hence will help them act accordingly to improve his/her situation 
    </p>
    <hr/>
    <h1>How our site works?</h1>
    <p style={{fontSize:'x-large',fontFamily:'serif,',fontWeight:'bold'}}>
    The questions will be based on overall lifestyle,personality,reaction to a particluar situation,overall mood changes when in tough situation and many more.Based on the anaylsis a report will be generated which will be given to the user stating his/her mental health status . The blog section is all you need to know about mental health these days , types of mental disorders , treatment available and many more. Feedback section will allow you to interact with us and give your honest review about our website and enable us to improve it . Contact Us section is all about our team and our respective domains and the way you can contact us for any issues .  
    </p>
    <hr/>
    <h1>Benefits</h1>
    <p style={{fontSize:'x-large',fontFamily:'serif',fontWeight:'bold'}}>
     <br/> Analysis will be free of cost
     <br/> Proper set of questions will be used for analysis 
     <br/> Proper analysis result will be provided in form of report
     <br/> Suggestions and treatment options are available in blog section 
    </p>
  </Container>
</Jumbotron>
    </div>
  )
}
export default About;