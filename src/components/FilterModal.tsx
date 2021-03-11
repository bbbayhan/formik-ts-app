import React, {useState} from 'react';
import { Input, InputLabel, Button, Dialog,DialogContent } from '@material-ui/core';

import '../App.css';

function FilterModal(props: any) {

    const [param, setParam] =useState("");

    const handleChange = (e: any) => {
        setParam(e.target.value);
    } 

    const handleOnclick = (e: any) =>{
        e.preventDefault();
        props.onSubmit(param);
    }

    return (
    <Dialog open={props.open}>
        <DialogContent>
        <InputLabel shrink>First Name</InputLabel>
        <Input
        id="firstName"
        name="firstName"
        type="text"
        fullWidth
        onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleOnclick}>
            Apply Filter
        </Button>
        </DialogContent>
    </Dialog>
    );
}
       
export default FilterModal;
