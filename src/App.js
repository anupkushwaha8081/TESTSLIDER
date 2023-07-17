import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";
import "./App.css";
import "./components/Card.css";


const App = () => {
  return (<div className="container">
    <div className="containerhead">
      <h1 >Our Testimonials</h1>
    </div>
    <div className="line"></div>
    {/* <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div> */}

    <Testimonials reviews={reviews}></Testimonials>
  </div>);
};

export default App;
