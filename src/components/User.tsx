import {useState} from 'react';
import {useQuery, useQueryClient } from 'react-query';
import { Input, Grid, InputLabel,Button } from '@material-ui/core';
import {Link, useParams, Redirect} from "react-router-dom";
import {fetchUsersById, updateUser} from "../api";
import { Data } from "../constants";
import '../App.css';
interface ParamTypes {
  id: string;
}

function User() {
  const queryClient = useQueryClient();
  const {id} = useParams<ParamTypes>();

  const [open, setOpen] = useState(false);
  const { data=[] } = useQuery(["fetchUsers", id], ()=>fetchUsersById(id), { 
    initialData: () => {
      return queryClient.getQueryData<any>('fetchUsers')?.find((d: any) => d.id === parseInt(id));
    },
  });
  const [newArray, setNewArray]= useState(data);
  
  const handleChange = (e: any) => {
    const key = e.target.id;
    setNewArray({...data, [key]: e.target.value});
  } 

  const handleSubmit = async() => {
    await updateUser(id, newArray);
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
      {open? <Redirect to="/"/> : 
        <> 
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
        </>
      }
    </Grid>
  </div>);
}

export default User;