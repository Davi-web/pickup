import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
 
export default function Events() {
  const [value, setValue] = React.useState<AdapterDayjs | null>(new AdapterDayjs);

  const handleChange = (newValue: AdapterDayjs | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params:any) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
 
//   return (
//     <div>Hello
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//     <DateTimePicker
//         renderInput={(props:any) => <TextField {...props} />}
//         label="DateTimePicker"
//         value={value}
//         onChange={(newValue:any) => {
//         setValue(newValue);
//         }}/>
//     </LocalizationProvider>
//     </div>
//   );
}