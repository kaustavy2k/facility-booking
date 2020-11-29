import React from "react";
import swim from "../../images/sm.jpg";
import lib from "../../images/lib.jpeg";
import ban from "../../images/ban.jpg";
import rest from "../../images/rest.jpg";
import club from "../../images/club.jpeg";
import gym from "../../images/gym.jpg";
import basket from "../../images/basket.jpeg";
import tennis from "../../images/tennis.jpeg";
import Facility from "./Facility/Facility";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Facilities.css";
const facilities = (props) => {
  
  let title = [
    "Swimming",
    "Library",
    "Banquet",
    "Restaurent",
    "Club",
    "GYM",
    "Tennis-Court",
    "Basketball-Court",
  ];
  let text = [
    "Show off your swimming skills",
    "Pen is mightier than a sword",
    "Got a wedding? No problem",
    "Taste the best delicacies",
    "Show off some dance moves",
    "Build your body",
    "Practise some tennis moves",
    "Challenge your friends here",
  ];
  return (
    <div className="Facilities">
      <div className=" row justify-content-center">
        <Facility title={title[0]} text={text[0]} img={swim} />
        <Facility title={title[1]} text={text[1]} img={lib} />
        <Facility title={title[2]} text={text[2]} img={ban} />
        <Facility title={title[3]} text={text[3]} img={rest} />
      </div>
      <div className=" row">
        <Facility title={title[4]} text={text[4]} img={club} />
        <Facility title={title[5]} text={text[5]} img={gym} />
        <Facility title={title[6]} text={text[6]} img={tennis} />
        <Facility title={title[7]} text={text[7]} img={basket} />
      </div>
    </div>
  );
};
export default facilities;
