import React from 'react';
import { QueryClient, QueryClientProvider} from "react-query";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ReactQueryDevtools } from 'react-query-devtools'
import './App.css';
import User from "./components/User";
import UserTable from './components/UserTable';
import UserForm from './forms/UserForm';


const queryClient = new QueryClient();

function App() { 
  return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render={()=> (<UserTable/>)}/>
            <Route path="/users/:id" render={() => (<User/>)}/>
            <Route path="/user-form" component={UserForm}/>
          </Switch>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    );
}

export default App;
