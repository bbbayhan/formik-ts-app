import '../App.css';
import { getIn } from 'formik';
import { TextField, Grid } from '@material-ui/core';
import { renderHelperText } from "../helpers";

interface Data {
    id: any,
    text:any,
    type: any,
}

function Form(props: any){
    return (
    <div className="App">
    <Grid container spacing={3}>
    {props.data.map(({id, text, type} : Data) => {
        return (
          <>
          <Grid item xs={12}>    
          <TextField
            id={id}
            fullWidth
            label={text}
            name={id}
            type={type}
            onChange={props.handleChange}
            helperText={renderHelperText(id)}
            value={getIn(props.values, id)}
          />
          </Grid>
          </>
        );
      })
    }
    </Grid>
    </div> 
    );
}

export default Form;