import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import img1 from './HomePage.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//function Nav(){
 //return(
   //  <div className="Navigation">
     //   <nav >
       //   <h1 className="Heading">Mental Health Analyzer</h1>   
         // <ul className="Links">
           //<Link to="/Test"><ol>Take a Test</ol></Link>
           //<Link to="/About"><ol>About Us</ol></Link>
           //<Link to="/Contact"><ol>Contact Us</ol></Link>
           //<Link to="/Blog"><ol>Blog</ol></Link>
          //</ul>
        //</nav>
     //</div>
 //)
//}
function Nav(){
  return(
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
     <h1 class="navbar-brand" style={{fontSize:'xx-large',fontFamily:'serif'}}>Mental Health Anayalzer</h1> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/" style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}>HOMEPAGE</a>
        <a class="nav-link active" href="/Test" style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}>TAKE A TEST</a>
        <a class="nav-link active" href="/Contact" style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}>CONTACT US</a>
        <a class="nav-link active" href="/About" style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}>ABOUT US</a>
        <a class="nav-link active" href="/Blog" style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}>BLOG</a>
        <a class="nav-link active" href="/Feedback" style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}>FEEDBACK</a>
      </div>
    </div>
  </div>
</nav>     
    </div>
         
  )  
}


export default Nav;