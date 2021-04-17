import React, { useState } from "react";
import "./AddServices.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import upload from "../../../../images/cloud-computing.png";

const AddServices = () => {
  const [imageURL, setImageURL] = useState(null);
  console.log(imageURL);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const serviceInfo = data;
    serviceInfo.image = imageURL;
    fetch("https://gentle-chamber-46179.herokuapp.com/addService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  const handleFIleChange = (event) => {
    console.log(event.target.files[0]);

    const imageData = new FormData();
    imageData.set("key", "6f6183563adac5d3d174c6a92660308a");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="text-center">
      <div className="add-service-sub-div">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="add-service-field"
            placeholder="University Name"
            {...register("name")}
          />

          <input
            className="add-service-field"
            placeholder="Location"
            {...register("location", { required: true })}
          />
          <br />
          <input
            className="add-service-field"
            placeholder="Subjects"
            {...register("subjects", { required: true })}
          />
          <input
            className="add-service-field"
            type="number"
            placeholder="Service Charge"
            {...register("serviceCharge", { required: true })}
          />
          <br />
          <select className="add-service-scholarship" {...register("type")}>
            <option value="full free">Full Free</option>
            <option value="partial">Partial</option>
            <option value="conditional">Conditional</option>
          </select>
          <input
            className="add-service-price"
            type="number"
            placeholder="World Rank"
            {...register("rank", { required: true })}
          />
          <br />
          <div>
            <label className="service-pic" htmlFor="service-pic">
              <img style={{ width: "30px" }} src={upload} alt="" /> Select Image
            </label>
            <input
              onChange={handleFIleChange}
              id="service-pic"
              name="file"
              type="file"
            />
          </div>
          <br />
          <input
            className="add-service-btn"
            type="submit"
            value="Add Service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddServices;
