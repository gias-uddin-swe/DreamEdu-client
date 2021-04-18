import React from "react";
import "./HeaderMain.css";
import banner from "../../../images/top2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faPhoneVolume,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
const HeaderMain = () => {
  return (
    <div className="header-main-container container">
      <div className="row text-center  justify-content-center align-items-center ">
        <div className="col-md-6 col-lg-6 col-sm-4  left-box">
          <h1 className="title">Welcome To DreamEdu</h1>
          <h5 className="mt-2 sub-title">
            It is our responsibility to fulfill your dream
          </h5>
          <div className="mt-4 address-info">
            <h2 className="contact">Contact Us</h2>

            <p className="phone-email">
              <FontAwesomeIcon icon={faPhoneVolume} />: +8801315770478
            </p>
            <p className="phone-email">
              <FontAwesomeIcon icon={faEnvelopeSquare} />: dreamedu@gmail.com
            </p>
            <address>
              <p className="phone-email">
                <FontAwesomeIcon icon={faAddressCard} /> : House # 21/Ka (1st
                Floor), Road # 2/A(New), Zigatola Bus Stand, Dhanmondi,
                Dhaka-1209.
              </p>
            </address>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-4 text-left right-image">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
