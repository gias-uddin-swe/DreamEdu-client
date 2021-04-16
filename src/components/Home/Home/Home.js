import React from "react";
import Footer from "../../Sheared/Footer/Footer";
import SubscribeForm from "../../Sheared/SubscribeForm/SubscribeForm";
import HeaderMain from "../HeaderMain/HeaderMain";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import MenuBar from "./../../Sheared/Navbar/MenuBar";
import Carousels from "./../Carousel/Carousels";

const Home = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <HeaderMain></HeaderMain>
      <Services></Services>
      <Carousels></Carousels>
      <Testimonial></Testimonial>
      <SubscribeForm></SubscribeForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
