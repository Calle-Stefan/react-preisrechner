import './App.css';
import { Typography, TextField, MenuItem, FormControl, InputLabel, Select, Grid, Switch, Button  } from '@mui/material';
import React, { useState } from 'react';
import { Container } from '@mui/system';
import PassmarkCalculation from './Componenten/PassmarkCalculation'



function App() {
  const [value, setValue] = useState("");
 
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const handleChange = (event) => {
    
  };

  const cpuSelectValues = [
    {
      value: 'intel',
      label: 'Intel'
    },
    {
      value: 'amd',
      label: 'AMD',
    }
  ]

  const ramSelectValues = [
    {
      value: 'ddr3',
      label: 'DDR3'
    },
    {
      value: 'ddr4',
      label: 'DDR4'
    }
  ]
  
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant='h2' align='center'>Preisrechner</Typography>
        </Grid>
        
        <Grid item xs={6}>
          <img src="Images/Logo Werkstatt.PNG"  className="Logo" alt="" height={100} width={600}/>
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
        
        <PassmarkCalculation label="CPU" menuEntries={cpuSelectValues}></PassmarkCalculation>

        <PassmarkCalculation label="GPU" menuEntries={cpuSelectValues}></PassmarkCalculation>

        <PassmarkCalculation label="RAM" menuEntries={ramSelectValues}></PassmarkCalculation>

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
