import React from "react";
import Carousel from "react-bootstrap/Carousel";
import court1 from "./court1.jpg";
import court2 from "./court2.jpg";
import court3 from "./court3.jpg";
import '../Styles/carosule.css';


export class Homecarousel extends React.Component{
    render(){
        return(
            <div className="carousel-img">

<Carousel >
  <Carousel.Item>
    <img
      className="home-img1"
      src={ court1 }
      alt="First slide"
    />
    <Carousel.Caption className="caption-img1">
     
      <p>"Ethics is knowing the difference between what you have a 
          right to do and what is right to do."

</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="home-img2"
      src={court3}
      alt="Second slide"
    />

    <Carousel.Caption className="caption-img2">
     
      <p>"The ones who are crazy enough to think they can change the world, are the ones that do."</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="home-img3"
      src={court2}
      alt="Third slide"
    />

    <Carousel.Caption className="caption-img3">
     
      <p>"The secret of genius is to carry the spirit of 
          the child into old age, which means never losing your enthusiasm."</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}