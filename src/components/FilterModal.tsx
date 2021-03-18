import React, {useState} from 'react';
import { Input, InputLabel, Button, Dialog,DialogContent } from '@material-ui/core';

import '../App.css';

interface FilterType {
    open : boolean,
    onSubmit: Function
}


function FilterModal({open, onSubmit} : FilterType) {

    const [data, setData]= useState({});

    const handleChange = (e: any) => setData({...data, [e.target.id]: e.target.value});

    const handleOnclick = (e: any) =>{
        e.preventDefault();
        onSubmit(data);
    }

    return (
    <Dialog open={open}>
        <DialogContent>
        <InputLabel shrink>First Name</InputLabel>
        <Input
        id="firstName"
        name="firstName"
        type="text"
        fullWidth
        onChange={handleChange}
        />
        <InputLabel shrink>Last Name</InputLabel>
        <Input
        id="lastName"
        name="lastName"
        type="text"
        fullWidth
        onChange={handleChange}
        />
        <InputLabel shrink>Email</InputLabel>
        <Input
        id="email"
        name="email"
        type="text"
        fullWidth
        onChange={handleChange}
        />
        <InputLabel shrink>Age</InputLabel>
        <Input
        id="age"
        name="age"
        type="text"
        fullWidth
        onChange={handleChange}
        />
        <InputLabel shrink>Birthday</InputLabel>
        <Input
        id="birthday"
        name="birthday"
        type="text"
        fullWidth
        onChange={handleChange}
        />
        <InputLabel shrink>Company Name</InputLabel>
        <Input
        id="companyName"
        name="companyName"
        type="text"
        fullWidth
        onChange={handleChange}
        />
        <InputLabel shrink>Company Year</InputLabel>
        <Input
        id="companyYear"
        name="companyYear"
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
