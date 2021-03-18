import React from 'react';
import {Link} from "react-router-dom";
import { Dialog,DialogContent, DialogContentText } from '@material-ui/core';

import '../App.css';

interface UpdateModalProps {
    open: boolean
}

function UpdateModal({open}: UpdateModalProps) {

    return (
    <Dialog open={open}>
        <DialogContent>
            <DialogContentText>
                User Info is updated
            </DialogContentText>
            <Link to='/'> Return to User table</Link>
        </DialogContent>
    </Dialog>
    );
}
       
export default UpdateModal;
