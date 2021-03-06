import React, {useState} from 'react';
import { Link} from "react-router-dom";
import {useQuery} from 'react-query';
import { TableHead, TableCell, TableRow, Paper, TableBody, TableContainer, Button, Table  } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import {INPUTS} from "../constants";

import UserRow from "./UserRow";
import FilterModal from "./FilterModal";

import '../App.css';
import { fetchUsers, fetchUsersByFilter } from "../api";

function UserTable() {

  const { data=[] } = useQuery("fetchUsers", fetchUsers, { cacheTime: Infinity });
  const [open, setOpen] = useState(false);
  const [param, setParam] =useState("");
  const { data: filteredData } = useQuery(["fetchUsersByFilter", param], ()=>fetchUsersByFilter(param), {cacheTime: Infinity});

  const handleSubmit = async (param: any) => {
    if(param){
      setParam(param);
      setOpen(false);
    }
  }

  return (
    <div>
    <FilterModal open={open} onSubmit={handleSubmit}/>
    <TableContainer component={Paper}>
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell align="right">
            <Link to='/user-form'>
              <Button variant="contained" data-cy="new-user-button">
                New User
              </Button>
            </Link>
          </TableCell>
          {Object.values(INPUTS).map(INPUT =>
            <TableCell align="right">{INPUT.label}</TableCell>
          )}
          <TableCell align="right">
            <FilterListIcon onClick={()=>setOpen(true)}/>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {filteredData? 
        filteredData.map((user: any) =>(
          <UserRow key={user.id} user={user}/>
        ))
      :
      data.map((user: any) =>(
        <UserRow key={user.id} user={user}/>
      ))}
      </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default UserTable;
