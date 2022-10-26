import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
 
export default function Events() {
  const [value, setValue] = useState<AdapterDayjs | null>(new AdapterDayjs);

  const handleChange = (newValue: AdapterDayjs | null) => {
    setValue(newValue);
  };

  const [description, setDescription] = useState("");
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="register">
    <h1>Create an event to play with your friends!</h1>
    <form action="/api/events" method="post" onSubmit={e => e.preventDefault()}>
        <label htmlFor="Event Name"></label>
        <input type="text" name="Event Name" placeholder="Enter event name" id="event-name" value={eventName} onChange={e=>setEventName(e.target.value)} required/>

        <label htmlFor="Event Description"></label>
        <input type="text" name="Event Description" placeholder="Enter description" id="event-description" value={description} onChange={e=>setDescription(e.target.value)}/>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Select a date and time..."
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} required/>}
            />
        </LocalizationProvider>

        <label htmlFor="Location"></label>
        <input type="text" name="Event Location" placeholder="Enter location" id="location" value={location} onChange={e=>setLocation(e.target.value)}/>

        <input type="submit" value="Submit"/>
    </form>
    <div id="errorMsg" className=" text-red-600 text-lg"/>
    </div>
    );
}