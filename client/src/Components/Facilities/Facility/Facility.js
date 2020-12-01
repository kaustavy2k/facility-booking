import React from "react";
import Modal from "./Modal";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const facility = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const showModal = () => {
    setModalShow(true);
  };

  const hideModal = () => {
    setModalShow(false);
  };
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 ">
      <div className="boxDiv">
        <img src={props.img} className="imgCard" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a onClick={showModal} className="btn btn-primary">
            BOOK!
          </a>
          <Modal className={props.className} show={modalShow} handleClose={hideModal}></Modal>
        </div>
      </div>
    </div>
  );
};
export default facility;
