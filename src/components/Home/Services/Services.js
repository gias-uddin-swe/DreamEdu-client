import React, { useEffect, useState } from "react";
import yunnan from "../../../images/university1.jpg";
import yunnan2 from "../../../images/university2.jpg";
import yunnan3 from "../../../images/university3.jpg";
import ServiceCards from "../ServiceCards/ServiceCards";
import "../ServiceCards/ServiceCards.css";

const Services = () => {
  // const universityInfo = [
  //   {
  //     name: "Yunnan University",
  //     type: "Full Free",
  //     image: yunnan,
  //     subjects: "all Subject are Available",
  //     fees: 500,
  //     location: "Kunming,Yunnan,China",
  //   },
  //   {
  //     name: "Yunnan University",
  //     type: "Full Free",
  //     image: yunnan2,
  //     subjects: "all Subject are Available",
  //     fees: 500,
  //     location: "Kunming,Yunnan,China",
  //   },
  //   {
  //     name: "Yunnan University",
  //     type: "Full Free",
  //     image: yunnan3,
  //     subjects: "all Subject are Available",
  //     fees: 500,
  //     location: "Kunming,Yunnan,China",
  //   },
  // ];
  const [universityInfo, setUniversityInfo] = useState([]);
  console.log(universityInfo);
  useEffect(() => {
    fetch("http://localhost:5000/allScholarship")
      .then((res) => res.json())
      .then((data) => setUniversityInfo(data));
  }, []);

  return (
    <div>
      <div className="text-center mt-5">
        <h2 className="mt-5">Choice one That can fit with you </h2>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore
          provident aperiam culpa deserunt aut adipisci illum repellat in.
          Cupiditate.
        </p>
      </div>
      <div className="row ">
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
