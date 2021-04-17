import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import "./MyApplyList.css";

const MyApplyList = () => {
  const [user, setUser] = useContext(UserContext);
  const [applyList, setApplyList] = useState([]);
  console.log(applyList);

  useEffect(() => {
    fetch(`https://gentle-chamber-46179.herokuapp.com/myApplyList?email=` + user.email)
      .then((res) => res.json())
      .then((data) => setApplyList(data));
  }, []);

  return (
    <div className="text-center">
      <div className="text-center row d-flex justify-content-center align-items-center text-center order-container">
        {applyList.map((pd) => (
          <div className="col-md-4 my-order">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="order-image m-auto">
                <img src={pd.image} alt="" />
              </div>
              <h2 className=" text-center text-danger  m-auto mt-5">{pd.process}</h2>

              <div className="text-center">
                <h5 className="text-center mt-3">{pd.universityName}</h5>
                <p className="text-center">{pd.location}</p>
                <p className="text-center">
                  {new Date(pd.date).toDateString("dd/MM/yyyy")}
                </p>
              </div>
            </div>
            <p>{pd.name}</p>
            <p>{pd.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplyList;
