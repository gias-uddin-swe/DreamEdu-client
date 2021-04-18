import React, { useContext, useState } from "react";
import "./Booking.css";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../App";
import ProcessPayment from "./../../../ProcessPayment/ProcessPayment";

const Booking = () => {
  const [success, setSuccess] = useState(false);
  console.log(success);
  const [user, setUser] = useContext(UserContext);
  console.log(user.universityName);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const pending = "pending";
    data.date = new Date();
    data.process = pending;
    data.image = user.image;
    data.location = user.location;
    data.price = user.price;
    data.cardNumber = user.cardNumber;
    fetch("https://gentle-chamber-46179.herokuapp.com/confirmStudent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };
  const handlePayment = (result) => {
    setSuccess(result);
    console.log("result", result);
  };

  return (
    <div>
      <div className="row text-center d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="apply-form-input"
            name="name"
            value={user.name}
            {...register("name")}
          />
          <br />
          <input
            className="apply-form-input"
            type="email"
            name="university name"
            value={user.email}
            {...register("email")}
          />

          <br />

          <input
            className="apply-form-input"
            name="name"
            value={user.universityName}
            {...register("universityName")}
          />
          <br />
          {user.paymentSuccess ? (
            <input className="confirm-apply-btn" type="submit" value="Submit" />
          ) : (
            <h6 className="mt-2" style={{ color: "red" }}>
              Please Payment first
            </h6>
          )}
          <br />
        </form>
        <div className="payment-side">
          <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
        </div>
      </div>
    </div>
  );
};

export default Booking;
