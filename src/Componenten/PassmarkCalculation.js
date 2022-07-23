import{Grid, TextField, FormControl, InputLabel,Select, MenuItem} from "@mui/material"
import { Fragment, useState} from 'react'


function PassmarkCalculation(props) {
  
    const [value, setValue] = useState("");
    const [cpuPassmark, setCpuPassmark] = useState(0);
    const [cpuPassmarkInputError, setCpuPassmarkInputError] = useState(false);

    const {menuEntries} = props;

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
     
    let selectEntires = [];
    if (Array.isArray(menuEntries)) {
        selectEntires = menuEntries.map((entry) => <MenuItem value={entry.value}>{entry.label}</MenuItem>)
    }

    const labelId = props.label.toLowerCase() + 'labelId';

    return ( 
        <Fragment>
            <Grid item xs={6}> 
            <FormControl fullWidth>
                <InputLabel id={labelId}>{props.label}</InputLabel>
                <Select
                labelId={labelId}
                value={value}
                onChange={handleChange}
                >
                    {selectEntires}
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
        </Fragment>
    );
}

export default PassmarkCalculation;