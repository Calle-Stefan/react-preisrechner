import './App.css';
import { Typography, TextField, MenuItem, FormControl, InputLabel, Select, Grid, Switch, Button  } from '@mui/material';
import React, { useState } from 'react';
import { Container } from '@mui/system';



function App() {
  const [value, setValue] = useState("");
  const [cpuPassmark, setCpuPassmark, gpuPassmark, setGpuPassmark, ramSize, setRamSize, ] = useState(0);
  const [cpuPassmarkInputError, setCpuPassmarkInputError, gpuPassmarkInputError, setGpuPassmarkInputError, ramPassmarkInputError, setRamPassmarkInputError ] = useState(false);
  
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const handleChange = (event) => {
    setValue(event.target.value)

  }
 
  const handleInput = (event) => {
    const inputValue = event.target.value;
    
    const isString = typeof inputValue === 'string';
    if (!isString) {
      setCpuPassmarkInputError(true);
    }
    const isNumber = !isNaN(inputValue) && !isNaN(parseFloat(inputValue));
    setCpuPassmarkInputError(!isNumber);

    setCpuPassmark(inputValue);
  }
  
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h2'>Preisrechner</Typography>
        </Grid>

        <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="plsystem">System</InputLabel>
          <Select
            labelId="plsystem"
            id="plsystem"
            value={value}
            label="System"
            onChange={handleChange}
          >
            <MenuItem value={'pc'}>PC</MenuItem>
            <MenuItem value={'laptop'}>Laptop</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        
        <Grid item xs={6}> 
          <FormControl fullWidth>
            <InputLabel id="cpuchoose">CPU</InputLabel>
            <Select
              labelId="cpuchoose"
              id="cpu"
              value={value}
              label="CPU"
              onChange={handleChange}
            >
              <MenuItem value={'intel'}>Intel</MenuItem>
              <MenuItem value={'amd'}>AMD</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField 
            label="Passmark"
            variant="outlined"
            value={cpuPassmark}
            onInput={handleInput}
            error={cpuPassmarkInputError}
            ></TextField> 
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="gpuchoose">GPU</InputLabel>
            <Select
              labelId="gpuchoose"
              id="gpu"
              value={value}
              label="GPU"
              onChange={handleChange}
            >
              <MenuItem value={'intel'}>Intel</MenuItem>
              <MenuItem value={'amd'}>AMD</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField 
            label="Passmark"
            variant="outlined"
            value={gpuPassmark}
            onInput={handleInput}
            error={gpuPassmarkInputError}
            ></TextField> 
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="ramchoose">RAM</InputLabel>
            <Select
              labelId="ramchoose"
              id="ram"
              value={value}
              label="RAM"
              onChange={handleChange}
            >
              <MenuItem value={'ddr2'}>DDR2</MenuItem>
              <MenuItem value={'ddr3'}>DDR3</MenuItem>
              <MenuItem value={'ddr4'}>DDR4</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField 
            label="Passmark"
            variant="outlined"
            value={ramSize}
            onInput={handleInput}
            error={ramPassmarkInputError}
            ></TextField> 
        </Grid>

        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="diskchoose">Disk</InputLabel>
            <Select
              labelId="diskchoose"
              id="disk"
              value={value}
              label="Disk"
              onChange={handleChange}
            >
              <MenuItem value={'HDD'}>HDD</MenuItem>
              <MenuItem value={'SSD'}>SSD</MenuItem>
              <MenuItem value={'M2'}>M2</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="diskSizeHdd">HDD</InputLabel>
            <Select
              labelId="diskSizeHdd"
              id="diskSize"
              value={value}
              label="HDD"
              onChange={handleChange}
            >
              <MenuItem value={'hdd1'}>Standard 160GB</MenuItem>
              <MenuItem value={'hdd2'}>250GB</MenuItem>
              <MenuItem value={'hdd3'}>320GB</MenuItem>
              <MenuItem value={'hdd4'}>500GB</MenuItem>
              <MenuItem value={'hdd5'}>1TB</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="diskSizeSsd">SSD</InputLabel>
            <Select
              labelId="diskSizeSSD"
              id="diskSize"
              value={value}
              label="SSD"
              onChange={handleChange}
            >
              <MenuItem value={'ssd1'}>60-80GB</MenuItem>
              <MenuItem value={'ssd2'}>120-128GB</MenuItem>
              <MenuItem value={'ssd3'}>120-128GB Neu</MenuItem>
              <MenuItem value={'ssd4'}>120-128GB</MenuItem>
              <MenuItem value={'ssd5'}>120-128GB Neu</MenuItem>
              <MenuItem value={'ssd6'}>480-512GB</MenuItem>
              <MenuItem value={'ssd7'}>480-512GB Neu</MenuItem>
              <MenuItem value={'ssd8'}>1TB</MenuItem>
              <MenuItem value={'ssd8'}>1TB Neu</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="diskSizeM2">M2</InputLabel>
            <Select
              labelId="diskSizeM2"
              id="diskSize"
              value={value}
              label="M2"
              onChange={handleChange}
            >
              <MenuItem value={'m21'}>M2 250 GB gebraucht</MenuItem>
              <MenuItem value={'m22'}>M2 250 GB Neu</MenuItem>
              <MenuItem value={'m23'}>M2 500 GB gebraucht</MenuItem>
              <MenuItem value={'m24'}>M2 500 GB Neu</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
        <Switch {...label} defaultChecked />Pauschale
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained">Berechnen</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
