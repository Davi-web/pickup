import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
// import LocalizationProvider from '@mui/x-date-pickers-pro/LocalizationProvider';
// // or
import {StyledEngineProvider} from '@mui/material/styles';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useEffect, useState } from "react";

const Register = () => {

    const [value, setValue] = useState<Dayjs | null>(dayjs('2014-08-18T21:11:54'));
    
      const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
      };
   
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
      console.log(value)
    
      return (

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                    <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
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
                    <DateTimePicker
                    label="Date&Time picker"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>

      );
    }

export default Register;