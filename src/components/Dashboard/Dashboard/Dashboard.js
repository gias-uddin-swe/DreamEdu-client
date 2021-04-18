import React, { useContext, useEffect, useState } from "react";
import AddServices from "../Admin/AddServices/AddServices";
import Sidebar from "../Sidebar/Sidebar";
import Booking from "../User/Booking/Booking";
import Review from "../User/Review/Review";
import { Link } from "react-router-dom";
import MyApplyList from "../User/MyApplyList/MyApplyList";
import AddAdmin from "../Admin/AddAdmin/AddAdmin";
import ManageServices from "../Admin/ManageServices/ManageServices";
import AllOrders from "../Admin/AllOrders/AllOrders";
import add from "../../../images/icons/add.png";
import setting from "../../../images/icons/settings.png";
import reviews from "../../../images/icons/customer-review.png";
import booking from "../../../images/icons/booking.png";
import listImage from "../../../images/icons/list.png";
import { UserContext } from "../../../App";
import home from "../../../images/icons/house.png";
import service from "../../../images/icons/technical-support.png";
import admin from "../../../images/icons/unauthorized-person.png";
import adds from "../../../images/icons/plus.png";
import all from "../../../images/icons/expand.png";

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch(
      "https://gentle-chamber-46179.herokuapp.com/checkAdmin?email=" +
        user.email
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setIsAdmin(true);
        }
      });
  }, []);

  const [userControl, setUserControl] = useState({
    review: false,
    book: true,
    bookingList: false,
    addService: false,
    addAdmin: false,
    manageService: false,
    allOrders: false,
  });
  const Book = () => {
    const control = { ...userControl };
    control.review = false;
    control.book = true;
    control.bookingList = false;
    control.addService = false;
    control.addAdmin = false;
    control.manageService = false;
    control.allOrders = false;

    setUserControl(control);
  };
  const BookingList = () => {
    const control = { ...userControl };
    control.review = false;
    control.book = false;
    control.bookingList = true;
    control.addService = false;
    control.addAdmin = false;
    control.manageService = false;
    control.allOrders = false;
    setUserControl(control);
  };
  const review = () => {
    const control = { ...userControl };
    control.review = true;
    control.book = false;
    control.bookingList = false;
    control.addService = false;
    control.addAdmin = false;
    control.manageService = false;
    control.allOrders = false;
    setUserControl(control);
  };
  const addService = () => {
    const control = { ...userControl };
    control.review = false;
    control.book = false;
    control.bookingList = false;
    control.addService = true;
    control.addAdmin = false;
    control.manageService = false;
    control.allOrders = false;
    setUserControl(control);
  };
  const addAdmin = () => {
    const control = { ...userControl };
    control.review = false;
    control.book = false;
    control.bookingList = false;
    control.addService = false;
    control.addAdmin = true;
    control.manageService = false;
    control.allOrders = false;
    setUserControl(control);
  };
  const manageService = () => {
    const control = { ...userControl };
    control.review = false;
    control.book = false;
    control.bookingList = false;
    control.addService = false;
    control.addAdmin = false;
    control.manageService = true;
    control.allOrders = false;
    setUserControl(control);
  };
  const allOrders = () => {
    const control = { ...userControl };
    control.review = false;
    control.book = false;
    control.bookingList = false;
    control.addService = false;
    control.addAdmin = false;
    control.manageService = false;
    control.allOrders = true;
    setUserControl(control);
  };

  return (
    <div className="row">
      <div className="col-md-3 col-lg-3">
        <div className="sidebar-container ">
          <ul className="text-center mt-5 ">
            <li>
              <Link to="/home" className="dashboard-menu">
                <img
                  className="bg-white mr-3"
                  style={{ width: "25px" }}
                  src={home}
                  alt=""
                />
                Home
              </Link>
            </li>
            <li>
              <Link onClick={Book} className="dashboard-menu">
                <img
                  className=" mr-3"
                  style={{ width: "25px" }}
                  src={booking}
                  alt=""
                />
                Book
              </Link>
            </li>

            <li>
              <Link onClick={BookingList} className="dashboard-menu ">
                <img
                  className="bg-white mr-3"
                  style={{ width: "25px" }}
                  src={listImage}
                  alt=""
                />
                My Apply List
              </Link>
            </li>
            <li>
              <Link onClick={review} className="dashboard-menu">
                <img
                  className=" mr-3"
                  style={{ width: "25px" }}
                  src={reviews}
                  alt=""
                />
                Review
              </Link>
            </li>

            {isAdmin && (
              <div>
                <li>
                  <Link onClick={addService} className="dashboard-menu">
                    <img
                      className=" mr-3"
                      style={{ width: "25px" }}
                      src={adds}
                      alt=""
                    />
                    Add Services
                  </Link>
                </li>
                <li>
                  <Link onClick={manageService} className="dashboard-menu">
                    <img
                      className="bg-white mr-3"
                      style={{ width: "25px" }}
                      src={service}
                      alt=""
                    />
                    Manage Services
                  </Link>
                </li>
                <li>
                  <img
                    className="mr-3"
                    style={{ width: "25px" }}
                    src={add}
                    alt=""
                  />
                  <Link onClick={addAdmin} className="dashboard-menu">
                    <img
                      className="bg-white mr-3"
                      style={{ width: "25px" }}
                      src={admin}
                      alt=""
                    />
                    Make Admin
                  </Link>
                </li>
                <li>
                  <img
                    className="mr-3"
                    style={{ width: "25px" }}
                    src={add}
                    alt=""
                  />
                  <Link onClick={allOrders} className="dashboard-menu">
                    <img
                      className=" mr-3"
                      style={{ width: "25px" }}
                      src={all}
                      alt=""
                    />
                    Orders
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
      <div className="col-md-9 col-lg-9">
        {userControl.review && <Review></Review>}
        {userControl.book && <Booking></Booking>}
        {userControl.bookingList && <MyApplyList></MyApplyList>}

        {userControl.addService && <AddServices></AddServices>}
        {userControl.addAdmin && <AddAdmin></AddAdmin>}
        {userControl.manageService && <ManageServices></ManageServices>}
        {userControl.allOrders && <AllOrders></AllOrders>}
      </div>
    </div>
  );
};

export default Dashboard;
