import React from 'react';
import img from './wallpaper.jpg';
import img1 from './HomePage.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import wall1 from './wall1.jpg';
import wall2 from './wall2.jpg';
import wall3 from './wall3.jpg';
import Carousel from 'react-bootstrap/Carousel';
//import Form from 'react-bootstrap/Form';

const HomePage = () => {
     let array = [wall1,wall2,wall3];
     setInterval(randomise,0.00001);
     function  randomise(){
      for(let i= 2;i>=0;i--){
            let j = Math.floor(Math.random()*(i+1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
      }      
     }
      return (
            <div>
                  <Carousel>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={array[1]}
                                    alt="First slide"
                              />
                              
                        </Carousel.Item>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={array[0]}
                                    alt="Second slide"
                              />

                             
                        </Carousel.Item>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={array[2]}
                                    alt="Third slide"
                              />
                        </Carousel.Item>
                  </Carousel>
            </div>

      )
}
export default HomePage;