import React, {useState} from 'react';
import './App.css';
import {useQuery} from 'react-query';
import DeleteIcon from '@material-ui/icons/Delete';
import UserForm from './UserForm';
import axios from 'axios';


function UserList(props: any) {
    const [isOpen, setIsOpen] = useState(false);

    const { data=[] } = useQuery("fetchUsers", async () => {
        const { data } =  await axios.get("http://localhost:5000/users/")
        return data
      }, { cacheTime: Infinity });

  const handleOnClick = () =>{
    setIsOpen(true); 
  }

  const deleteUser = async (id: any) =>{
    await axios.delete("http://localhost:5000/users/" + id);
  }

  return (
    <div className="App">
    {isOpen? 
        <UserForm/> : (
        <div>
        <button type="button" onClick={handleOnClick}>New User</button>
        <ul>
            {data.map((user: any) => {
              return(
                <div>
                  <li key={user.id} onClick={()=>props.onClickHandler(user)}>
                    {user.firstName} 
                  </li>
                  <DeleteIcon onClick={()=>deleteUser(user.id)}/>
                </div>
              )})
            }
        </ul>
        </div>
        )
      }
      </div>
  );
}

export default UserList;
