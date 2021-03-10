import React, {useState} from 'react';
import {useQuery } from 'react-query';
import { Input, Grid, InputLabel,Button } from '@material-ui/core';
import {Link} from "react-router-dom";
import {fetchUsersById} from "../api";
import axios from 'axios';

import '../App.css';


function User(props:any) {

  const { data=[] } = useQuery("fetchUsers", ()=>fetchUsersById(props.selectedUserID), { cacheTime: Infinity });
  const [newArray, setNewArray]= useState(data);
  
  const handleChange = (e: any) => {
    const key = e.target.id;
    setNewArray({...data, [key]: e.target.value});
    console.log("new",newArray);
  } 

  const handleSubmit = async() => {
    await axios.put("http://localhost:5000/users/" + props.selectedUserID,
        newArray, {
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
            id={element[0]}
            defaultValue={element[1]}
            name={element[0]}
            type="text"
            fullWidth
            onChange={handleChange}
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
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Grid>
  </div>);
}

export default User;