import React from 'react';
import { Link} from "react-router-dom";
import {useQuery} from 'react-query';
import { TableHead, TableCell, TableRow, Paper, TableBody, TableContainer, Button, Table  } from '@material-ui/core';

import UserRow from "./UserRow";

import './App.css';
import { fetchUsers } from "./api";

function UserList(props: any) {

  const { data=[] } = useQuery("fetchUsers", fetchUsers, { cacheTime: Infinity });

 
  return (
    <div>
    <TableContainer component={Paper}>
    <Table aria-label="collapsible table">
      <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Birthday</TableCell>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">Company Year</TableCell>
            <TableCell align="right">
              <Link to='/user-form'>
                <Button variant="contained" color="primary">
                  New User
                </Button>
              </Link>
            </TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
      {data.map((user: any) =>(
        <UserRow key={user.id} user={user}/>
      ))}
      </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default UserList;
