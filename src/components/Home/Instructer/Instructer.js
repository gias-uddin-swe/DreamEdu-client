import React from "react";
import male1 from "../../../images/guider/male1.jpg";
import male3 from "../../../images/guider/male3.jpg";
import female3 from "../../../images/guider/female3.jpg";
import female4 from "../../../images/guider/female4.jpg";
import "./instructer.css";

const Instructer = () => {
  const instructor = [
    {
      image: male1,
      name: "Robin Jonson",
      phone: +124786564,
    },
    {
      image: female3,
      name: "Robin Jonson",
      phone: +124786564,
    },
    {
      image: female4,
      name: "Rose Sweety",
      phone: +124786564,
    },
    {
      image: male3,
      name: "Robin Jonson",
      phone: +124786564,
    },
    
  ];
  return (
    <div>
      <div className="text-center">
        <div className="text-center mt-5">
          <h1><span style={{fontSize:'200%',color:'#ec1354'}}>O</span> ur Instructor</h1>
        </div>
        <div className="text-center row d-flex justify-content-center align-items-center instructor-container">
          {instructor.map((pd) => (
            <div className="col-md-6 col-lg-3 col-sm-12 text-center m-auto instructor-div">
              <div className="text-center">
                <img
                  style={{ width: "240px", height: "350px" }}
                  src={pd.image}
                  alt=""
                />
                <h5 className="text-center ">{pd.name}</h5>
                <p className="text-center">{pd.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructer;
