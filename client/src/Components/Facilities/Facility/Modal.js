import React from "react";
import ReactCalendar from "./Calender";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Modal = (props) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <span className="close" onClick={props.handleClose}>
          &times;
        </span>
        
          <div className="CalDatTim">
            <h3 className="modalh3">Select Date & Time</h3>
            <div className="Calender">
              <ReactCalendar className={props.className}/>
            </div>
          </div>
          
        
      </section>
    </div>
  );
};
export default Modal;
