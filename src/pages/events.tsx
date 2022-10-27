import {useState} from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { trpc } from '../utils/trpc';
import moment from 'moment-timezone'
 
export default function Events() {

  const [value, setValue] = useState(Date.now());
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const events = trpc.useMutation(["events.post-events"], {
    onSuccess: () => {
      console.log('success');
    }
  })
 
  const handleChange = (newValue:any) => {
    console.log(Date.parse(newValue));
    setValue(Date.parse(newValue));
  };

  const onSubmit = () => {
    events.mutate({
        name: eventName,
        description: description,
        postedDate: new Date(Date.now()),
        eventDate: new Date(value),
        postedBy: "5",
        eventLocation: location,
    })
  }

  return (
    <div className='flex flex-col'>
      <div className='flex justify-center pb-3'></div>

      <form className='register'>
        <label htmlFor="Event Name"></label>
        <input type="text" name="eventName" placeholder="Enter event name" id="eventName" value={eventName} onChange={e=>setEventName(e.target.value)} required/>

        <label htmlFor="Event Description"></label>
        <input type="text" name="eventDescription" placeholder="Enter event description" id="description" value={description} onChange={e=>setDescription(e.target.value)}/>

        <label htmlFor="Event Location"></label>
        <input type="text" name="eventLocation" placeholder="Enter event location" id="location" value={location} onChange={e=>setLocation(e.target.value)}/>

      </form>

      <div className='flex justify-center'>
        <LocalizationProvider dateAdapter={AdapterDayjs} className=" flex justify-center">
          <Stack spacing={3} >
              <MobileDatePicker
              label="Date mobile"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
              />

              <TimePicker
              label="Time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
              />
          </Stack>
        </LocalizationProvider>
      </div>
      <div className="flex justify-center pt-2">
     <button onClick={onSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    </div>
    </div>
  );
}