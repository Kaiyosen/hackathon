import React from 'react';
import { NavLink } from 'react-router-dom';
const Card =(props) => {
    return ( 
        <>
                <div className='col-md-4 col-10 mx-auto'>
                <div className="card">
  <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc}/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <NavLink to={props.destination} className="btn btn-primary">{props.login}</NavLink>
  </div>
</div>
</div>
</>
);
};

export default Card;