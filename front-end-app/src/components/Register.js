import React from "react";

//import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../App.css';

function Register() {

return (
<section >
<div>
    <h2>Please Register to Start A Conversation</h2>
    
    <Formik
      initialValues={{ username: '', phone: '', email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
    {({ isSubmitting }) => (
        <Form>
            <div>
            <label htmlFor="username">Name or Nickname</label>
            <Field type="text" name="username" />
            </div>
            <div>
            <label htmlFor="email">Valid Contact Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            </div>
            <div>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
                Submit </button>
            </div>
        </Form>
    )}
    </Formik>
</div>
</section>
);
}

export default Register;