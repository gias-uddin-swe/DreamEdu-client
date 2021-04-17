import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./ServiceCards.css";

const ServiceCards = ({ university }) => {
  const [user, setUser] = useContext(UserContext);
  console.log(user);

  const handleApply = (price, name, image, location) => {
    const userInfo = { ...user };
    userInfo.price = price;
    userInfo.universityName = name;
    userInfo.image = image;
    userInfo.location = location;
    setUser(userInfo);
  };
  console.log(user);
  return (
    <div className="col-md-4 text-center container services-container d-flex justify-content-center align-items-center">
      <div className="service-cards">
        <div className="image mt-3">
          <img src={university.image} alt="" />
        </div>
        <h2 className="mt-3">{university.name}</h2>
        <p className="mt-2">
          Scholarship Type: <strong>{university.type}</strong>
        </p>
        <p className="mt-2">
          World Rank : <strong>{university.rank}</strong>
        </p>
        <p className="mt-2">
          Subjects: <mark>{university.subjects}</mark>{" "}
        </p>
        <p>
          Location: <small>{university.location}</small>{" "}
        </p>
        <div className="row text-center mt-3 w-75 m-auto">
          <div className="col-md-6 col-sm-12 col-lg-6 mt-3">
            <h3 className=" ">Charge: ${university.serviceCharge}</h3>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6 ">
            <Link to="/dashboard">
              <button
                onClick={() =>
                  handleApply(
                    university.serviceCharge,
                    university.name,
                    university.image,
                    university.location
                  )
                }
                className="btn btn-info mt-3"
              >
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
