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
    data.date = new Date();
    data.process = "pending";
    fetch("http://localhost:5000/confirmStudent", {
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
      <div className="row text-center">
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
          {success ? (
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
