
import * as Yup from 'yup';

export const validationSchema = [
    Yup.object().shape({
      "firstName": Yup.string().required("firstName is required"),
      "lastName": Yup.string().required("lastName is required"),
      "email": Yup.string().required("email is required"),
    }),
    Yup.object().shape({
      "age": Yup.string().required("age is required"),
      "birthday": Yup.string()
        .required("birthday is required") 
    }),
    Yup.object().shape({
        "companyName": Yup.string().required("company name is required"),
        "companyYear": Yup.string()
          .required("company year is required") 
    })
  ];
  