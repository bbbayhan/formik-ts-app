import React from 'react';
import { Link} from "react-router-dom";
import './App.css';
import {useQuery, useMutation, useQueryClient} from 'react-query';
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
    <div className="App">
        <div>
        <Link to='/user-form'>
          New User
        </Link>
        <ul>
            {data.map((user: any) => {
              return(
                <div>
                  <li key={user.id} onClick={()=>props.onClickHandler(user)}>
                    {user.firstName} 
                  </li>
                  <DeleteIcon onClick={()=>remove(user.id)}/>
                </div>
              )})
            }
        </ul>
        </div>
      </div>
  );
}

export default UserList;
