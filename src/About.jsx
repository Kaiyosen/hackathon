import React from "react";
import web from "../src/images/about.jpg";
import Common from "./Common";
const About =() => {
    return ( 
    <>
        <Common name="We Are " 
        imgsrc={web} 
        visit="/contact" 
        btname="Contact Now"
        Common sub="This project aims to bridge the gap between freelance editors and YouTubers by providing a platform to save their time and as well as privacy."/>
    </>);
};

export default About;