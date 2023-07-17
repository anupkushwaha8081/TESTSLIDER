import React from "react";

import { FaQuoteLeft,FaQuoteRight} from "react-icons/fa";


import "./Card.css"

 const Card =(props)=>{
    let review = props.review;
    return( 
    <div className="card">
        <div className="imgcard" >
            <img className="cardimg" src={review.image} />
           <div className="bground"></div>
        </div>
        <div className="cardname">
            <h1>{review.name}</h1>
            <h3 className="jobcard">{review.job}</h3>
        </div>
       
        <div className="quote" >
        <FaQuoteLeft/>
        </div>
        <div className="cardtext">
            <p> {review.text} </p>
        </div>
        <div  className="lowerquote">
            <FaQuoteRight/>
            
        </div>
       
    </div>
 )};
   
 export default Card;