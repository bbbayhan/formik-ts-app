import React, {useState} from 'react';
import { Dialog, Button, DialogContent, DialogContentText } from '@material-ui/core';
import { useFormikContext } from 'formik';

export default function ForthPage() {
  const { values: formValues } = useFormikContext<any>();
  const [open, setOpen] = useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" data-cy="new-user-submit" color="primary" type="submit" onClick={() => setOpen(true)}>
        Submit
      </Button>
      <Dialog open={open} onClose={handleClose}>
          {Object.entries(formValues).map((element: any)=>{
            return(
              <>
              <DialogContent>
                <DialogContentText>{<b>{element[0]}</b>}:{element[1]}</DialogContentText>
              </DialogContent>
              </>
          )})}
      </Dialog>
    </div>
  );
}
