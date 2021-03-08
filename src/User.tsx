import React, {useState} from 'react';
import { Input, Grid, InputLabel, InputAdornment } from '@material-ui/core';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';


import './App.css';


function User(props:any) {

  const [disabled, setDisabled] = useState(true);
  const [id, setId] = useState(0);
  const [value, setValue] = useState("");
  
  const handleDisabled = (e: any) => {
    setDisabled(false);
  }
  
  const handleChange = (e: any) => {
    setId(e.target.id);
    setValue(e.target.value);
  } 

  const handleSubmit = async(e: any) => {
    await axios.patch("http://localhost:5000/users/" + id,
        {[e]: value}
    );
  } 


  return(
  <div className="App">
  <Grid container spacing={3}>
    {Object.entries(props.selectedUser).map((element: any)=>{
    return(
      <>
        <Grid item xs={12}>
        <InputLabel shrink>{element[0]}</InputLabel>
          <Input
            id={props.selectedUserID}
            defaultValue={element[1]}
            name={element[0]}
            type="text"
            fullWidth
            disabled={disabled}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="start">
                <EditIcon onClick={handleDisabled}/>
                <DoneIcon onClick={()=>handleSubmit(element[0])}/>
              </InputAdornment>
            }
          />
          </Grid>
      </>)}
      )}
      </Grid>
    </div>);
}

export default User;