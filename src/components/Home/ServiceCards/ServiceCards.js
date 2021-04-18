import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./ServiceCards.css";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";

const calc = (x, y) => [
  -(y - window.innerHeight / 5) / 2000,
  (x - window.innerWidth / 20) / 1000,
  1.0,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceCards = ({ university }) => {
  const [user, setUser] = useContext(UserContext);
  const [props, set] = useSpring(() => ({
    xys: [0, 5, 1],
    config: { mass: 0.5, tension: 5, friction: 0 },
  }));

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
    <animated.div
      className="col-md-4 text-center container services-container d-flex justify-content-center align-items-center"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [1, 1, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div className="service-cards">
        <animated.div className="image mt-3">
          <img src={university.image} alt="" />
        </animated.div>
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
        <div className="row text-center mt-3 w-95 m-auto">
          <div className="col-md-6 col-sm-12 col-lg-6 mt-3">
            <h5 className=" ">
              Service fees:{" "}
              <span style={{ color: "red" }}>${university.serviceCharge}</span>
            </h5>
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
    </animated.div>
  );
};

export default ServiceCards;
