import React from "react";

import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../App.css';

function RegisterPage() {

return (
<section >
<div>
    <h2>Please Register to Start A Conversation</h2>
    <Link to="/"><button>Go to Home</button></Link>
    <Link to="/Login"><button>Go to Login</button></Link>
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
          <Field type="text" name="username" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
</div>
</section>
);
}

export default RegisterPage;