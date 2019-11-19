import React from "react";

import '../App.css';

import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';





function BaseForm({ values, errors, touched }) {
  return (
    <Form>
      <div className='form-field'>
        <label >
          Name:&nbsp;
              <Field type='text' name='name' />
          {(touched.name && errors.name) ? <p className="error">{errors.name}</p> : ''}
        </label>
      </div>

      <div className='form-field'>
        <label >
          Phone:&nbsp;
              <Field type='text' name='phone' />
          {(touched.phone && errors.phone) ? <p className="error">{errors.phone}</p> : ''}
        </label>
      </div>
      
      <div className='form-field'>
        <label >
          Email:&nbsp;
              <Field type='email' name='email' />
          {(touched.email && errors.email) ? <p className="error">{errors.email}</p> : ''}
        </label>
      </div>

      <div className='form-field'>
        <label >
          Password:&nbsp;
              <Field type='password' name='password' />
          {(touched.password && errors.password) ? <p className="error">{errors.password}</p> : ''}
        </label>
      </div>

      <div className='form-field'>
        <label >
          <Field type='checkbox' name='terms' checked={values.terms} />
          I accept the Terms of Service
              {(touched.terms && errors.terms) ? <p className="error">{errors.terms}</p> : ''}
        </label>
      </div>
      
      <div className='form-field'>
        <button type='submit'>Submit</button>
      </div>

    </Form>
  )
};

const RegFormFormik = withFormik({
  mapPropsToValues: ({ name, phone, email, password, terms }) => {
    return {
      name: name || '',
      phone: phone || '',
      email: email || '',
      password: password || '',
      terms: terms || true,
    }
  },
  handleSubmit: (values, { props, resetForm }) => {
    //console.log(props)
    axios.post('https://reqres.in/api/users', values)
      .then(resp => {
        //console.log(resp)
        props.addUser(resp.data)
        resetForm({
          name: '',
          phone: '',
          email: '',
          password: '',
          terms: true,
        })
      })
      .catch(err => {
        console.error(err)
      })
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().min(2).required(),
    phone: Yup.string().min(7).required(),
    // role: Yup.mixed().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(4).required(),
    terms: Yup.boolean().oneOf([true], 'Please agree to the Terms of Service'),
  })
});

export default RegFormFormik(BaseForm);



// function Register() {

// return (
// <section >
// <div>
//     <h2>Please Register to Start A Conversation</h2>

//     <Formik
//       initialValues={{ username: '', phone: '', email: '', password: '' }}
//       validate={values => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//     {({ isSubmitting }) => (
//         <Form>
//             <div>
//             <label htmlFor="username">Name or Nickname </label>
//             <Field type="text" name="username" />
//             </div>
//             <div>
//             <label htmlFor="phone">Phone Number</label>
//             <Field type="phone" name="email" />  
//             </div>
//             <div>
//             <label htmlFor="email">Valid Contact Email </label>
//             <Field type="email" name="email" />
//             <ErrorMessage name="email" component="div" />
//             </div>
//             <div>
//             <label htmlFor="password">Password </label>  
//             <Field type="password" name="password" />
//             <ErrorMessage name="password" component="div" />
//             </div>
//             <div>
//             <button type="submit" disabled={isSubmitting}>
//                 Submit </button>
//             </div>
//         </Form>
//     )}
//     </Formik>
// </div>
// </section>
// );
// }

// export default Register;