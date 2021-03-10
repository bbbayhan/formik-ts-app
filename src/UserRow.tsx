import React, {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import UserCategories from "./UserCategories";
import { Link} from "react-router-dom";
import {useQueryClient} from 'react-query';
import {TableCell, TableRow, IconButton,  Collapse, Box  } from '@material-ui/core';
import { useMutation} from 'react-query';

import { deleteUser } from "./api";

function UserRow (props: any){
    const [open, setOpen] =useState(false);
    const queryClient = useQueryClient();
    const { mutateAsync } = useMutation(deleteUser);

    const remove = async (id: any) => {
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
                {props.user.firstName}
            </TableCell>
            <TableCell align="right">{props.user.lastName}</TableCell>
            <TableCell align="right">{props.user.email}</TableCell>
            <TableCell align="right">{props.user.age}</TableCell>
            <TableCell align="right">{props.user.birthday}</TableCell>
            <TableCell align="right">{props.user.companyName}</TableCell>
            <TableCell align="right">{props.user.companyYear}</TableCell>
            <DeleteIcon onClick={()=>remove(props.user.id)}/>
            <Link to={"/user-profile/:"+ props.user.id}>
            <EditIcon onClick={()=>props.onClickHandler(props.user)}/>
            </Link>  
        </TableRow>
        <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>                  
                <UserCategories id={props.user.id}/>
            </Box>
            </Collapse>
        </TableCell>
        </TableRow>
        </>
    );
}

export default UserRow;