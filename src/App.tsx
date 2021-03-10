import React,{useState} from 'react';
import { QueryClient, QueryClientProvider} from "react-query";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ReactQueryDevtools,  } from 'react-query-devtools'
import './App.css';
import User from "./components/User";
import UserTable from './components/UserTable';
import UserForm from './forms/UserForm';


const queryClient = new QueryClient();

function App() { 
  const [selectedUser, setSelectedUser] = useState([]);
  const [selectedUserID, setSelectedUserID] = useState(0);

  const openUser = (user:any) =>{
    setSelectedUser(user);
    setSelectedUserID(user.id);
  }

  return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render={()=> (<UserTable onClickHandler={openUser}/>)}/>
            <Route path={"/user-profile/:id"} render={() => (<User selectedUser={selectedUser} selectedUserID={selectedUserID} />)}/>
            <Route path="/user-form" component={UserForm}/>
          </Switch>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    );
}

export default App;
