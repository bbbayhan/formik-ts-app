import '../App.css';
import { getIn } from 'formik';
import {secondData} from '../data';
import { TextField, Grid } from '@material-ui/core';
import { renderHelperText } from "../helpers";


function SecondPage(props: any) {
    return (
    <div className="App">
    <Grid container spacing={3}>
    {secondData.map(({id, text, type}) => {
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

export default SecondPage;
