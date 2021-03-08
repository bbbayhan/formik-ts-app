import React from 'react';
import { Link} from "react-router-dom";
import './App.css';
import {useQuery, useMutation, useQueryClient} from 'react-query';
import { Button, Grid, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';


function UserList(props: any) {
  const queryClient = useQueryClient();

  const { data=[] } = useQuery("fetchUsers", async () => {
      const { data } =  await axios.get("http://localhost:5000/users/")
      return data
    }, { cacheTime: Infinity });

  const deleteUser = async (id: any) =>{
    return await axios.delete("http://localhost:5000/users/" + id);
  }

  const { mutateAsync } = useMutation(deleteUser);

  const remove = async (id: any) => {
    await mutateAsync(id);
    queryClient.invalidateQueries("fetchUsers");
  }

  return (
    <Grid container direction="row-reverse" >
      <Grid item xs={6}>
        <Link to='/user-form'>
            <Button variant="contained" color="primary">
              New User
            </Button>
        </Link>
      </Grid>
      <Grid item xs={6}>
      {data.map((user: any) => {
        return(
          <Grid container justify="center" alignItems="center">
              <Grid item xs={2}> 
                <Link to={"/user-profile/:"+ user.id}>
                  <ListItemText key={user.id} onClick={()=>props.onClickHandler(user)}>
                    {user.firstName + " " + user.lastName} 
                  </ListItemText>
                </Link>
              </Grid>
              <Grid item xs={2}>
                <DeleteIcon onClick={()=>remove(user.id)}/>
              </Grid>
          </Grid>
        )})
      }
      </Grid>
    </Grid>
  );
}

export default UserList;
