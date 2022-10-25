import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import React from 'react';

const Register = () => {
    // const router = useRouter();
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");
    // const [pswRepeat, setPswRepeat] = useState("");

    // return (
    // <div className="register">
    // <h1>Create an event to play with your friends!</h1>
    // <form action="/api/signup" method="post" onSubmit={e => e.preventDefault()}>
    //     <label htmlFor="email"></label>
    //     <input type="email" name="email" placeholder="Enter Email" id="email" value={email} onChange={e=>setEmail(e.target.value)} required/>

    //     <label htmlFor="username"></label>
    //     <input type="text" name="username" placeholder="Enter Username" id="username" value={username} onChange={e=>setUsername(e.target.value)} required/>

    //     <label htmlFor="password"></label>
    //     <input type="password" name="password" placeholder="Enter Password" id="password" value={password} onChange={e=>setPassword(e.target.value)} required/>

    //     <label htmlFor="psw-repeat"></label>
    //     <input type="password" name="psw-repeat" placeholder="Repeat Password" id="psw-repeat" value={pswRepeat} onChange={e=>setPswRepeat(e.target.value)} required/>
    //     <input type="submit" value="Submit"/>
    // </form>
    // <div id="errorMsg" className=" text-red-600 text-lg"/>
    // </div>
    // )
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
 
    const handleChange = (newValue:any) => {
        setValue(newValue);
    };

    return (
        <div style={{margin: "5% 40%"}}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params:any) => <TextField {...params} />}
              />
              <MobileDatePicker
                label="Date mobile"
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params:any) => <TextField {...params} />}
              />
              <TimePicker
                label="Time"
                value={value}
                onChange={handleChange}
                renderInput={(params:any) => <TextField {...params} />}
              />
              <DateTimePicker
                label="Date&Time picker"
                value={value}
                onChange={handleChange}
                renderInput={(params:any) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </div>
      );
    }

export default Register;