import React from 'react';
import {Link} from "react-router-dom";
import { Dialog,DialogContent, DialogContentText } from '@material-ui/core';

import '../App.css';

function UpdateModal(props: any) {

    return (
    <Dialog open={props.open}>
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
