import React from 'react'
import Hero from '../Components/Hero'
import Video from '../Components/Video'
import Programs from '../Components/Programs'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Price from '../Components/Price';
import Testimonial from '../Components/Testimonial';
import Gallery from '../Components/Gallery';
import Footer from '../Components/Footer';

const Home = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);
  
  return (
    <div>
      <Hero />
      <Video />      
      <Programs />
      <Price />
      <Gallery />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home
