import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Axios from "axios";
import Spinner from "../../Spinner/spinner";
const ReactCalendar = (props) => {
  const [date, setDate] = useState(new Date());
  const [currLoader, setLoader] = useState({ loader: false });
  const onChange = (date) => {
    setDate(date);
  };
  const booknow = () => {
    setLoader({ loader: true });
    let e = String(date);
    let l = e.split(" ");
    let finaltime = l[1] + "-" + l[2] + "-" + l[3] + "-" + l[0] + "-" + l[4];
    let data = {
      time: finaltime,
      type: props.className,
    };

    Axios.post("http://localhost:2020/book", data, {
      withCredentials: true,
    })
      .then((res) => {
        setLoader({ loader: false });
        alert("Booking Successful! Please check mail");
      })
      .catch((res) => {
        setLoader({ loader: false });
        alert("Booking Failed! Try again later");
      });
  };

  return (
    <div className="CalDatTim">
      {currLoader.loader ? <Spinner /> : ""}
      <DateTimePicker onChange={onChange} value={date} />
      <button className="modalbtn btn btn-dark" onClick={booknow}>
        BOOK NOW!
      </button>
    </div>
  );
};
export default ReactCalendar;
