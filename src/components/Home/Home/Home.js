import React from "react";
import Footer from "../../Sheared/Footer/Footer";
import SubscribeForm from "../../Sheared/SubscribeForm/SubscribeForm";
import HeaderMain from "../HeaderMain/HeaderMain";
import ImageGallary from "../ImageGallary/ImageGallary";
import Instructer from "../Instructer/Instructer";
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
      <ImageGallary></ImageGallary>
      <Carousels></Carousels>
      <Testimonial></Testimonial>
      <Instructer></Instructer>
      <SubscribeForm></SubscribeForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
