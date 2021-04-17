import React, { useEffect, useState } from "react";
import TestimonialCards from "../TestimonialCards/TestimonialCards";
import "./Testimonial.css";
import image from "../../../images/male1.jpg";
import { set } from "react-hook-form";

const Testimonial = () => {
  // const ClientReview = [
  //   {
  //     name: "jack Ma",
  //     comments:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vitae nesciunt enim suscipit nulla quae consectetur autem tempora atque fugit! ",
  //     image: image,
  //     rating: "*****",
  //   },
  //   {
  //     name: "jack Ma",
  //     comments:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vitae nesciunt enim suscipit nulla quae consectetur autem tempora atque fugit! ",
  //     image: image,
  //     rating: "*****",
  //   },
  //   {
  //     name: "jack Ma",
  //     comments:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vitae nesciunt enim suscipit nulla quae consectetur autem tempora atque fugit! ",
  //     image: image,
  //     rating: "*****",
  //   },
  // ];

  const [ClientReview, setClientReview] = useState([]);
  console.log(ClientReview);

  useEffect(() => {
    fetch("https://gentle-chamber-46179.herokuapp.com/ClientReview")
      .then((res) => res.json())
      .then((data) => setClientReview(data));
  }, []);

  return (
    <div className="review-container text-center">
      <h1>Testimonial</h1>
      <div className="row text-center d-flex justify-content-center align-items-center client-review w-75 m-auto">
        {ClientReview.map((client) => (
          <TestimonialCards client={client} key={client._id}></TestimonialCards>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
