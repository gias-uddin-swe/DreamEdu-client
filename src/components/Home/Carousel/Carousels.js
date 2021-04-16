import React from "react";
import { Carousel } from "react-bootstrap";
import female1 from "../../../images/female1.jpg";
import female3 from "../../../images/female3.jpg";
import female2 from "../../../images/female2.jpg";
import "./Carousel.css";

const Carousels = () => {
  return (
    <div className="carousel-container">
      <Carousel className="row">
        <Carousel.Item interval={1000}>
          <div className="row">
            <div className="col-md-5">
              <img className="d-block w-50" src={female1} alt="Third slide" />
            </div>
            <div className="col-md-7">
              <Carousel.Caption>
                <h3 className="carousel-title">
                  Welcome to Yunnan University{" "}
                </h3>
                <p className="carousel-description">
                  This is the best university in the world.
                </p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="row">
            <div className="col-md-5">
              <img className="d-block w-50" src={female3} alt="Third slide" />
            </div>
            <div className="col-md-7">
              <Carousel.Caption>
                <h3 className="carousel-title">
                  Welcome to Yunnan University{" "}
                </h3>
                <p className="carousel-description">
                  This is the best university in the world.
                </p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-5">
              <img className="d-block w-50" src={female2} alt="Third slide" />
            </div>
            <div className="col-md-7">
              <Carousel.Caption>
                <h3 className="carousel-title">
                  Welcome to Yunnan University{" "}
                </h3>
                <p className="carousel-description">
                  This is the best university in the world.
                </p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
