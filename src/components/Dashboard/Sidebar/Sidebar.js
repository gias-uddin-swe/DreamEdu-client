import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ Book, BookingList }) => {
  return (
    <div>
      <div className="sidebar-container ">
        <ul className="text-center mt-5">
          <li>
            <Link onClick={Book} className="dashboard-menu">
              Book
            </Link>
          </li>
          <li>
            <Link className="dashboard-menu">Booking List</Link>
          </li>
          <li>
            <Link onClick={BookingList} className="dashboard-menu">
              {" "}
              My Apply List
            </Link>
          </li>
          <li>
            <Link className="dashboard-menu">Review</Link>
          </li>
          <li>
            <Link className="dashboard-menu">Add Services</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
