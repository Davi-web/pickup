import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
 
const Events = () => {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
 
  const handleChange = (newValue:any) => {
    setValue(newValue);
  };
 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DateTimePicker
        renderInput={(props:any) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue:any) => {
        setValue(newValue);
        }}/>
    </LocalizationProvider>
  );
}

export default Events;