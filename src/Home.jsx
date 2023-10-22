import React from "react";
import web from "../src/images/home.jpg";
import Common from "./Common";
const About =() => {
    return ( 
    <>
        <Common name="Grow Your Youtube With  " 
        imgsrc={web} 
        visit="/service" 
        btname="Get Started"
        Common sub="Editing and uploading YouTube videos made easy."/>
    </>);
};

export default About;