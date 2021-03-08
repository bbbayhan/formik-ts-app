import React, {useState} from 'react';
import {Form, Formik} from 'formik';
import {Link} from "react-router-dom";
import axios from 'axios';
import './App.css';
import FirstPage from "./forms/FirstPage";
import SecondPage from "./forms/SecondPage";
import ThirdPage from "./forms/ThirdPage";
import ForthPage from "./forms/ForthPage";
import {validationSchema} from "./validations";
import UserList from "./UserList";

const steps = ['First Page', 'Second Page', 'Third Page'];
const formId = "form";

const renderStepContent = (step: number, handleChange:any, values: any) => {
  switch (step) {
    case 0:
      return <FirstPage handleChange={handleChange} values={values}/>;
    case 1:
      return <SecondPage handleChange={handleChange} values={values} />;
    case 2:
      return <ThirdPage handleChange={handleChange} values={values} />; 
    default:
      return <Link to="/" component={UserList}></Link>;  }
}

function UserForm() {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  const currentValidationSchema = validationSchema[activeStep];

  const submitForm = async(values: any, actions: any) => {
    await axios.post('http://localhost:5000/users/', values);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  const handleSubmit = (values: any, actions:any) =>{
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  }

  return (
      <Formik
        initialValues={
         {firstName: '',
          lastName:'',
          email:'',
          age: '',
          birthday: '',
          companyName: '',
          companyYear: ''}
        }
        validationSchema={currentValidationSchema}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, values }) => (
          <Form className="App" id={formId}>
              <div className="App">
              {(activeStep !== 0 && activeStep !== 3)  && (
                  <button className="previous" type="button" onClick={handleBack}>&laquo;</button>
                )}
              {renderStepContent(activeStep, handleChange, values)}
              {isLastStep? 
                <ForthPage/> : 
                <button
                  disabled={isSubmitting}
                  className="next"
                  type="submit"
                  color="primary"
                >
                  &raquo;
                </button>
              } 
            </div>
          </Form>
        )}
      </Formik>
  );
}

export default UserForm;
