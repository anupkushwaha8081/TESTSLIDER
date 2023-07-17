import React,{useState}  from 'react';
import { FiChevronLeft, FiChevronRight} from "react-icons/fi";

// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from './Card';
import "./Card.css";


const Testimonials = (props)=>{
    let reviews=props.reviews; 
    const [index, setindex]=useState(0);
    function leftHandler(){
        if (index - 1 <0) {
            setindex(reviews.length-1);
            
        } else {

            setindex(index-1);
            
        }
    }
    function rightHandler(){
        if (index + 1>=reviews.length) {
            setindex(0);
            
        } else {

            setindex(index+1);
            
        }
    }
    function surpriseHandler(){
     let randomindex=   Math.floor (Math.random()*reviews.length);
     setindex(randomindex);
    }

    return(
        <div className="testimonials">
            <Card review={reviews[index]}></Card>
            <div className="button">
            <button 
            onClick={leftHandler}
             className="leftbtn">
            <FiChevronLeft/>

            </button>
            <button
            onClick={rightHandler}
            className="rightbtn">
            <FiChevronRight/>

            </button>
        </div>
        <div className="btnsurprise" >
            <button 
            onClick={surpriseHandler}
            
            className="surprisebtn"  >Surprise me</button>
        </div>

        </div>
    );
}
export default Testimonials;