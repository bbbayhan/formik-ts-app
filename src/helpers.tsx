import { ErrorMessage } from 'formik';


export const renderHelperText = (id:string) => {
    return (
      <ErrorMessage name={id} />
    );
}