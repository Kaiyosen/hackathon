import React from "react";
import {NavLink} from "react-router-dom";
import web from "../src/images/logo.png";
const Navbar = () => {
    return(
    <>
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-0 mx-auto">

            

    
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src={web} width ={320} height={80}class="card-img-left"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-2 mb-lg-0">

        <li className="nav-item">
          <NavLink activeClassName="menu_active"
          className="nav-link active"  
          aria-current="page" 
          to="/">
            <strong>Home</strong></NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active"
          className="nav-link active" 
          aria-current="page" 
          to="/service">
            <strong>Services</strong></NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active"
          className="nav-link active" 
          aria-current="page" 
          to="/about">
            <strong>About</strong></NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active"
          className="nav-link active" 
          aria-current="page" 
          to="/contact">
            <strong>Contact</strong></NavLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
</div>
        </div>
    </div>
</>
    );
};

export default Navbar;