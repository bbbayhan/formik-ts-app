import React,{useState} from 'react';
import { QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools,  } from 'react-query-devtools'
import './App.css';
import User from "./User";
import UserList from './UserList';

const queryClient = new QueryClient();

function App() { 
  const [isUserOpen, setUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const [selectedUserID, setSelectedUserID] = useState(0);

  const openUser = (user:any) =>{
    setSelectedUser(user);
    setSelectedUserID(user.id);
    setUserOpen(true);
  }

  return(
    <QueryClientProvider client={queryClient}>
      <div className="App">
      {isUserOpen? <User selectedUser={selectedUser} selectedUserID={selectedUserID}/> : <UserList onClickHandler={openUser}/>}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    );
}

export default App;
