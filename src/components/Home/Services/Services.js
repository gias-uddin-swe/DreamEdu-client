import React, { useEffect, useState } from "react";
import yunnan from "../../../images/university1.jpg";
import yunnan2 from "../../../images/university2.jpg";
import yunnan3 from "../../../images/university3.jpg";
import ServiceCards from "../ServiceCards/ServiceCards";
import "../ServiceCards/ServiceCards.css";
import "../ServiceCards/ServiceCards.css";

const Services = () => {
  const [universityInfo, setUniversityInfo] = useState([]);
  console.log(universityInfo);
  useEffect(() => {
    fetch("https://gentle-chamber-46179.herokuapp.com/allScholarship")
      .then((res) => res.json())
      .then((data) => setUniversityInfo(data));
  }, []);

  return (
    <div className="service-main">
      <div className="text-center mt-5 service">
        <h2 className="mt-5">Choice one That can fit with you </h2>
        <h3 style={{ color: "green" }} className="mt-5">
          Services
        </h3>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore
          provident aperiam culpa deserunt aut adipisci illum repellat in.
          Cupiditate.
        </p>
      </div>
      <div className="row service-row">
        {universityInfo.map((university) => (
          <ServiceCards
            university={university}
            key={university._id}
          ></ServiceCards>
        ))}
      </div>
    </div>
  );
};

export default Services;
