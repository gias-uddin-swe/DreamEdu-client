import React, { useState } from "react";
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

const Dashboard = () => {
  const [userControl, setUserControl] = useState({
    review: false,
    book: true,
    bookingList: false,
  });
  const Book = () => {
    const control = { ...userControl };
    control.review = false;
    control.book = true;
    control.bookingList = false;
    setUserControl(control);
  };
  const BookingList = () => {
    const control = { ...userControl };
    control.review = false;
    control.book = false;
    control.bookingList = true;
    setUserControl(control);
  };
  const review = () => {
    const control = { ...userControl };
    control.review = true;
    control.book = false;
    control.bookingList = false;
    setUserControl(control);
  };
  return (
    <div className="row">
      <div className="col-md-3 col-lg-3">
        {/* <Sidebar ></Sidebar> */}
        <div className="sidebar-container ">
          <ul className="text-center mt-5">
            <li>
              <Link onClick={Book} className="dashboard-menu">
                <img className=" mr-3" style={{ width: "25px" }} src={booking} alt="" /> Book
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
                <img className=" mr-3" style={{ width: "25px" }} src={reviews} alt="" />
                Review
              </Link>
            </li>
            <li>
              <Link className="dashboard-menu">Add Services</Link>
            </li>
            <li>
              <img
                className="mr-3"
                style={{ width: "25px" }}
                src={add}
                alt=""
              />
              <Link className="dashboard-menu">Add Admin</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-9 col-lg-9">
        {userControl.review && <Review></Review>}
        {userControl.book && <Booking></Booking>}
        {userControl.bookingList && <MyApplyList></MyApplyList>}
        {/* <AddServices></AddServices> */}
        {/* <AddAdmin></AddAdmin> */}
        {/* <ManageServices></ManageServices> */}
        <AllOrders></AllOrders>
      </div>
    </div>
  );
};

export default Dashboard;
