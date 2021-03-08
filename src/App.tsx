import React,{useState} from 'react';
import { QueryClient, QueryClientProvider} from "react-query";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import { ReactQueryDevtools,  } from 'react-query-devtools'
import './App.css';
import User from "./User";
import UserList from './UserList';
import UserForm from './UserForm';


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
            <div className="App">
              <Route exact path="/" render={()=> (<UserList onClickHandler={openUser}/>)}/>
              <Route path={"/user-profile/:id"} render={() => (<User selectedUser={selectedUser} selectedUserID={selectedUserID} />)}/>
              <Route path="/user-form" component={UserForm}/>
            </div>
          </Switch>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    );
}

export default App;
