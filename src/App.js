import './App.css';
import { Box, Stack, TextField, MenuItem, FormControl, InputLabel, Select,  } from '@mui/material';
import React, { useState } from 'react';




function App() {
  const [input, setInput] = useState("");
  const [value, setValue] = React.useState(" ")

  const handleChange = (event) => {
    setValue(event.target.value)

  }
 

  
  return (
    <Stack spacing={4} className="App">
      <Stack direction="row" spacing={2}>
      <TextField id="outlined-basic" label="Pc/Laptop" variant="filled"  value={input} onInput={(e) =>  setInput(e.target.value)} />
     
      </Stack>
      <span>{input.toLocaleUpperCase()}</span>

      <Stack direction="row" spacing={2}>
      CPU
      <FormControl size="medium">
  <InputLabel id="demo-simple-select-label">CPU wählen:</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={value}
    label="Hersteller"
    onChange={handleChange}
    
  >
    <MenuItem value={10}>Intel</MenuItem>
    <MenuItem value={20}>AMD</MenuItem>
  </Select>
</FormControl >
      </Stack>

      <Stack direction="row" spacing={2}>
      GPU
      </Stack>

      <Stack direction="row" spacing={2}>
      RAM
      </Stack>

      <Stack direction="row" spacing={2}>
      Disk
      </Stack>

    </Stack>
   
  );
}


export default App;
