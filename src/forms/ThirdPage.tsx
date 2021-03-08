import '../App.css';
import { getIn } from 'formik';
import { TextField, Grid } from '@material-ui/core';
import {thirdData} from '../data';
import { renderHelperText } from "../helpers";


function ThirdPage(props: any) {
    return(
      <div className="App">
      <Grid container spacing={3}>
    {thirdData.map(({id, text, type}) => {
        return (
          <>
          <Grid item xs={12}>    
          <TextField
            id={id}
            label={text}
            fullWidth
            name={id}
            type={type}
            onChange={props.handleChange}
            value={getIn(props.values, id)}
            helperText={renderHelperText(id)}
          />
          </Grid>
          </>
        );
      })}
      </Grid>
      </div>
    );
}

export default ThirdPage;
