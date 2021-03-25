import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function DateTimepicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div className="dt">
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div style={{marginLeft: "250px",paddingTop:"20px"}}>
      <DatePicker 
          value={selectedDate} 
          onChange={handleDateChange} 
          variant="static" 
       />
       </div>
       <div style={{marginLeft:"300px",paddingTop:"20px"}}>
      <TimePicker 
          value={selectedDate}
          onChange={handleDateChange} 
          variant="static" 
      />
      </div>
    </MuiPickersUtilsProvider>
    </div>
  );
}

export default DateTimepicker;