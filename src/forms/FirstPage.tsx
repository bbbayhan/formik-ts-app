import '../App.css';
import { TextField, Grid } from '@material-ui/core';
import { getIn } from 'formik';
import {data} from '../data';
import { renderHelperText } from "../helpers";

function FirstPage(props: any) {
    return (
    <Grid container spacing={3}>
      {data.map(({id, text, type}) => {
        return (
          <>
          <Grid item xs={12}>    
          <TextField
            label={text}
            id={id}
            name={id}
            type={type}
            fullWidth
            onChange={props.handleChange}
            value={getIn(props.values, id)}
            helperText={renderHelperText(id)}
          />
          </Grid>
          </>
        );
      })
    }
    </Grid>
  );
}

export default FirstPage;
