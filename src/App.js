import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import {Switch,BrowserRouter,Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './Nav.css';
import img from './wallpaper.jpg';
import TakeATest from './TakeATest';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import HomePage from './HomePage';
import Feedback from 'react-bootstrap/esm/Feedback';
import FormPage from './Feed';


function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Nav/>
       <Switch>
       <Route path="/" exact component={HomePage}></Route>  
       <Route path="/Test" exact component = {TakeATest}/>
       <Route path="/About" exact component = {About}/> 
       <Route path="/Contact" exact component = {Contact}/>
       <Route path="/Blog" exact component = {Blog}/>
       <Route path="/Feedback" exact component={FormPage}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
