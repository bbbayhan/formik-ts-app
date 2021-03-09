import React, {useState} from 'react';
import { Input, Grid, InputLabel, InputAdornment,Button } from '@material-ui/core';
import {Link} from "react-router-dom";
import axios from 'axios';
import DoneIcon from '@material-ui/icons/Done';

import './App.css';


function User(props:any) {

  const [id, setId] = useState(0);
  const [value, setValue] = useState("");
  
  const handleChange = (e: any) => {
    setId(e.target.id);
    setValue(e.target.value);
  } 

  const handleSubmit = async(e: any) => {
    await axios.patch("http://localhost:5000/users/" + id,
        {[e]: value}, {
          headers: {
            "Test-Header": "test"
          }
        }
    );
  } 


  return(
  <div className="App">
  <Grid container spacing={3} justify="center">
    {Object.entries(props.selectedUser).map((element: any)=>{
    return(
      <>
        <Grid item xs={8}>
        <InputLabel shrink>{element[0]}</InputLabel>
          <Input
            id={props.selectedUserID}
            defaultValue={element[1]}
            name={element[0]}
            type="text"
            fullWidth
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="start">
                <DoneIcon onClick={()=>handleSubmit(element[0])}/>
              </InputAdornment>
            }
          />
          </Grid>
      </>)}
      )}
      <Grid item xs={8}>
        <Link to='/'>
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
      </Grid>
    </Grid>
  </div>);
}

export default User;