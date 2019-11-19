import React from "react";
import FormContainer from "./Login";
import styled from "styled-components";

//import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";

import "../App.css";

function Register() {
  const FormContainer = styled.div`
    width: 460px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 32px;
    font-weight: bold;
    background-color: #e0f0fc;
    box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.2);
  `;

  return (
    <section>
      <div>
        <h2>Please Register to Start A Conversation</h2>

        <Formik
          initialValues={{ username: "", phone: "", email: "", password: "" }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
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
            <FormContainer>
              <Form>
                <div>
                  <label htmlFor="username">Name or Nickname</label>
                  <Field
                    type="text"
                    name="username"
                    className="field-container"
                  />
                </div>
                <div>
                  <label htmlFor="email">Valid Contact Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="field-container"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="field-container"
                  />
                  <ErrorMessage name="password" component="div" />
                  <button type="submit" disabled={isSubmitting}>
                    Submit{" "}
                  </button>
                </div>
              </Form>
            </FormContainer>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Register;
