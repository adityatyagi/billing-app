import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button
} from '@mui/material';
import React from 'react';

const CreateNewBill = () => {
  const age = 10;
  const createNewInvoiceHandler = async () => {
    try {
      const response = await fetch('/api/create-new-invoice', {
        method: 'POST',
        body: JSON.stringify({
          location: 'Bawana'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = (await response.json()) as { message: string };
      console.log(data);
    } catch (error) {
      console.error('error', error);
    }
  };
  const locationChangeHandler = (event: SelectChangeEvent<number>) => {
    event.preventDefault();
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={locationChangeHandler}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button type="button" onClick={createNewInvoiceHandler}>
        Create new invoice
      </Button>
    </Box>
  );
};

export default CreateNewBill;
