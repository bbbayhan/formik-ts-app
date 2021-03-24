import React, {useState} from 'react';
import { Input, InputLabel, Button, Dialog,DialogContent } from '@material-ui/core';
import { INPUTS } from "../constants";
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
            {Object.values(INPUTS).map(value => {
                return (<>
                <InputLabel shrink>{value.label}</InputLabel>
                <Input
                id={value.id}
                name={value.name}
                type={value.type}
                fullWidth
                onChange={handleChange}
                />
                </>);
            } )}
            <Button variant="contained" color="primary" onClick={handleOnclick}>
                Apply Filter
            </Button>
        </DialogContent>
    </Dialog>
    );
}
       
export default FilterModal;
