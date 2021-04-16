import React from "react";
import "./SubscribeForm.css";
import { useForm } from "react-hook-form";
import subscribe from "../../../images/subscribe.png";

const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="subscribe-form-container row d-flex justify-content-center align-items-center m-auto">
      <div className="col-md-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            className="input-field"
            placeholder="Name"
            {...register("example", { required: true })}
          />
          <br />
          <input
            name="email"
            placeholder="Email"
            type="email"
            className="input-field"
            {...register("exampleRequired", { required: true })}
          />
          <br />
          <input
            name="phone"
            placeholder="Phone"
            type="email"
            className="input-field"
            {...register("exampleRequired", { required: true })}
          />
          <br />
          <input
            id="text-field"
            name="message"
            placeholder="Type your Message"
            type="email"
            className="input-field"
            {...register("exampleRequired", { required: true })}
          />
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input className="subscribe-btn" type="submit" />
        </form>
      </div>
      <div className="subscribe-image col-md-7">
        <img src={subscribe} alt="" />
      </div>
    </div>
  );
};

export default SubscribeForm;
