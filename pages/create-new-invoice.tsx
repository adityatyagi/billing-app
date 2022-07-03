import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';

const CreateNewBill = () => (
  <Container>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 2
      }}
    >
      <h2>Create New Bill</h2>
    </Box>
    <form>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="location-label">Location</InputLabel>
            <Select labelId="location-label" id="location" label="Age">
              <MenuItem value={10}>Rai</MenuItem>
              <MenuItem value={20}>Bawana</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="type-label">Type</InputLabel>
            <Select labelId="type-label" id="type" label="Age">
              <MenuItem value={10}>Original</MenuItem>
              <MenuItem value={20}>Consignee</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <label htmlFor="date">
            <Typography>Date</Typography>
          </label>
          <input id="date" type="date" />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="type-label">Type</InputLabel>
            <Select labelId="type-label" id="type" label="Age">
              <MenuItem value={10}>Original</MenuItem>
              <MenuItem value={20}>Consignee</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  </Container>
);

export default CreateNewBill;
