import {useRef, useState} from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { trpc } from '../../utils/trpc';
// import moment from 'moment-timezone';
 
export default function EventCreation() {

  const [value, setValue] = useState(Date.now());
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [sportsType, setSportsType] = useState("");
  const createdRef = useRef<HTMLDivElement>(null);

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
        sportsType: sportsType
    });
    if (createdRef.current) {
      createdRef.current.innerHTML = "Event Created!";
    }

  }

  return (
    <div className='flex flex-col'>
      <div className='flex justify-center pb-3'>
        <h1 className='text-3xl font-bold'>Create an event to play with your friends!</h1>
      </div>
      <div id="createdRef" ref={createdRef} className="flex justify-center"/>

      <form className='register'>
        <label htmlFor="Event Name"></label>
        <input type="text" name="eventName" placeholder="Enter event name" id="eventName" value={eventName} onChange={e=>setEventName(e.target.value)} required/>

        <label htmlFor="Event Description"></label>
        <input type="text" name="eventDescription" placeholder="Enter event description" id="description" value={description} onChange={e=>setDescription(e.target.value)}/>

        <label htmlFor="Event Location"></label>
        <input type="text" name="eventLocation" placeholder="Enter event location" id="location" value={location} onChange={e=>setLocation(e.target.value)}/>

        <label htmlFor="sportsType" className="block mb-2 text-sm font-medium text-gray-900">Select sport type</label>
          <select id="sportsType" onChange={e => setSportsType(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option value="">Choose a sport</option>
            <option value="Basketball">Basketball</option>
            <option value="Soccer">Soccer</option>
            <option value="Tennis">Tennis</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Spikeball">Spikeball</option>
            <option value="Frisbee">Frisbee</option>
            <option value="Golf">Golf</option>
            <option value="Other">Other</option>
          </select>

      </form>

      <div className='flex justify-center'>
        <LocalizationProvider dateAdapter={AdapterDayjs} className=" flex justify-center" >
          <Stack spacing={3} >
              <MobileDatePicker
              label="Event Time"
              className="date"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
              />

              <TimePicker
              label="Time"
              className="time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
              />
          </Stack>
        </LocalizationProvider>
      </div>
      <div className="flex justify-center pt-2">
     <button onClick={onSubmit} id="submitBtn" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    </div>
    </div>
  );
}