import React from 'react';
import {useQuery } from 'react-query';
import { TableBody, TableCell, TableRow, TableHead, Table} from '@material-ui/core';

import './App.css';
import {fetchCategories} from "./api";

function UserCategories(props: {id: any}) {

  const { data=[] } = useQuery("fetchCategories", ()=>fetchCategories(props.id), { cacheTime: Infinity });

  return (
    <Table size="small" aria-label="purchases">
      <TableHead>
        <TableRow>
          <TableCell>Category Name</TableCell>
          <TableCell>Category Code</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableCell component="th" scope="row" size="medium">
          {data.name}
        </TableCell>
        <TableCell component="th" scope="row" size="medium">
          {data.id}
        </TableCell>
      </TableBody>
    </Table>
  );
}
       
export default UserCategories;
