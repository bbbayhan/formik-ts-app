import React, {useState} from 'react';
import {useQuery } from 'react-query';
import { Input, Grid, InputLabel,Button } from '@material-ui/core';
import {Link, useLocation} from "react-router-dom";
import {fetchUsersById, updateUser} from "../api";

import UpdateModal from './UpdateModal';
import '../App.css';

interface Data {
  "firstName": string,
  "lastName": string,
  "email": string,
  "age": string,
  "birthday": string,
  "companyName": string,
  "companyYear": string,
  "id": number
}


function User(props:any) {
  const location = useLocation();
  const url = location.pathname;

  const [open, setOpen] = useState(false);
  const { data=[] } = useQuery(["fetchUsersById", url], ()=>fetchUsersById(url));
  const [newArray, setNewArray]= useState(data);
  
  const handleChange = (e: any) => {
    const key = e.target.id;
    setNewArray({...data, [key]: e.target.value});
  } 

  const handleSubmit = async() => {
    await updateUser(url, newArray);
    setOpen(true);
  } 


  return(
  <div className="App">
  <Grid container spacing={3} justify="center">
    {Object.entries(data as Data).map(([key,value])=>{
    return(
      <>
        <Grid item xs={8}>
        <InputLabel shrink>{key}</InputLabel>
          <Input
            id={key}
            defaultValue={value}
            name={key}
            type="text"
            fullWidth
            onChange={handleChange}
          />
          </Grid>
      </>)}
      )}
      <UpdateModal open={open}/>;
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