import React, {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import UserCategories from "./UserCategories";
import { Link} from "react-router-dom";
import {TableCell, TableRow, IconButton,  Collapse, Box  } from '@material-ui/core';
import { useMutation, useQueryClient} from 'react-query';

import { deleteUser } from "../api";

interface UserRowProps {
    user: {
        firstName: string,
        lastName: string,
        email:string,
        age: number, 
        birthday: string, 
        companyName: string,
        companyYear: string,
        id: string
    }
}

function UserRow ({ user: {firstName, lastName, email, age, birthday, companyName, companyYear, id}}: UserRowProps){
    const [open, setOpen] =useState(false);
    const queryClient = useQueryClient();
    const { mutateAsync } = useMutation(deleteUser);

    const remove = async (id: string) => {
      await mutateAsync(id);
      queryClient.invalidateQueries("fetchUsers");
    }

    return(
        <>
        <TableRow>
            <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
                {firstName}
            </TableCell>
            <TableCell align="right">{lastName}</TableCell>
            <TableCell align="right">{email}</TableCell>
            <TableCell align="right">{age}</TableCell>
            <TableCell align="right">{birthday}</TableCell>
            <TableCell align="right">{companyName}</TableCell>
            <TableCell align="right">{companyYear}</TableCell>
            <DeleteIcon onClick={()=>remove(id)}/>
            <Link to={"/users/"+ id}>
            <EditIcon/>
            </Link>  
        </TableRow>
        <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>                  
                <UserCategories id={id}/>
            </Box>
            </Collapse>
        </TableCell>
        </TableRow>
        </>
    );
}

export default UserRow;