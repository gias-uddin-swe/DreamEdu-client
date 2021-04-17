import React from "react";
import gallary from "../../../images/icons/galary.png";
import "./ImageGallary.css";
import university1 from "../../../images/university1.jpg";
import university2 from "../../../images/university2.jpg";
import university3 from "../../../images/university3.jpg";
import campus1 from "../../../images/icons/campus1.jpg";
import campus2 from "../../../images/icons/campus2.jpg";
import campus3 from "../../../images/icons/campus3.jpg";

const ImageGallary = () => {
  return (
      <div className="take-look mt-5 mb-5">
          <div className="text-center mt-5">
              <h1 className="mb-5">Take <span style={{fontSize:'200%',color:'#ec1354'}}>A</span> look </h1>
          </div>
      <div className="row">
        <div className="col-md-6 see-image">
          <img className="list-image" src={gallary} alt="" />
        </div>
        <div className="col-md-6">
          <div className="image-container  ">
            <img src={university1} alt="" />
            <img src={university2} alt="" />
            <img src={university3} alt="" />
            <img src={campus1} alt="" />
            <img src={campus2} alt="" />
            <img src={campus3} alt="" />
            <img src={university2} alt="" />
            <img src={university3} alt="" />
            <img src={campus1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallary;
