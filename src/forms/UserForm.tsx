import React, {useState} from 'react';
import {Form, Formik} from 'formik';
import GenericForm from "./Form";
import {Redirect} from "react-router-dom";
import '../App.css';
import {data, secondData, thirdData} from '../data';
import ForthPage from "./ForthPage";
import {validationSchema} from "../validations";
import { postUserData } from '../api';

const steps = ['First Page', 'Second Page', 'Third Page'];
const formId = "form";

const renderStepContent = (step: number, handleChange:Function, values: Object) => {
  switch (step) {
    case 0:
      return <GenericForm data={data} handleChange={handleChange} values={values}/>;
    case 1:
      return <GenericForm data={secondData} handleChange={handleChange} values={values} />;
    case 2:
      return <GenericForm data={thirdData} handleChange={handleChange} values={values} />; 
    default:
      return <Redirect to='/'/>;
    }
}

function UserForm() {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  const currentValidationSchema = validationSchema[activeStep];

  const submitForm = async(values: Object, actions: any) => {
    postUserData(values);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  const handleSubmit = (values: Object, actions:any) =>{
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
                activeStep===3 ?
                "":
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
