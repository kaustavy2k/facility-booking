import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  console.log(date)

  return (
    <div className="asf">
      <DateTimePicker onChange={onChange} value={date} />
    </div>
  );
};
export default ReactCalendar;
