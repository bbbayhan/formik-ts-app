import '../App.css';
import { getIn } from 'formik';
import { TextField, Grid } from '@material-ui/core';
import { renderHelperText } from "../helpers";

interface FormData {
    id: string,
    text:string,
    type: string,
}

interface FormProps {
  data: any,
  handleChange:any,
  values: Object,
}

function Form({data, handleChange, values} : FormProps){
    return (
    <div className="App">
    <Grid container spacing={3}>
    {data.map(({id, text, type} : FormData) => {
        return (
          <>
          <Grid item xs={12}>    
          <TextField
            id={id}
            fullWidth
            label={text}
            name={id}
            type={type}
            onChange={handleChange}
            helperText={renderHelperText(id)}
            value={getIn(values, id)}
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