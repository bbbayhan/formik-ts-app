import React from 'react';
import {Link} from "react-router-dom";
import { Dialog,DialogContent, DialogContentText } from '@material-ui/core';

import '../App.css';

function UpdateModal(props: any) {

    const handleClose = (e: any) =>{
        e.preventDefault();
        <Link to='/'/>;
    }

    return (
    <Dialog open={props.open} onClose={handleClose}>
        <DialogContent>
            <DialogContentText>
                User Info is updated
            </DialogContentText>
        </DialogContent>
    </Dialog>
    );
}
       
export default UpdateModal;
