import React, { useState } from "react";

import { connect } from "react-redux";
import { postRegistration } from "../actions/index";

const Registration = props => {
  console.log(props.registration);
  const [user, setUser] = useState({
    name: "",
    phone_number: "",
    email: "",
    password: "",
    terms: true
  });

  const changeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    props.postRegistration(user);
    props.history.push("/Conversation");
  };

  return (
    <div className="form-container">
      <h2>Registration</h2>
      <form className="regis_form" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Name"
          onChange={changeHandler}
          className="field-container"
        />
        <input
          type="text"
          name="phone_number"
          value={user.phone_number}
          placeholder="Phone Number"
          onChange={changeHandler}
          className="field-container"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={changeHandler}
          className="field-container"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="password"
          onChange={changeHandler}
          className="field-container"
        />
        <button className="regis_btn">Register</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    registration: state
  };
};

export default connect(mapStateToProps, { postRegistration })(Registration);
// const Registration = props => {
//   console.log(props.registration);
//   const [user, setUser] = useState({
//     name: "",
//     phone_number: "",
//     email: "",
//     password: "",
//     terms: true
//   });

//   const changeHandler = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const submitHandler = e => {
//     e.preventDefault();
//     console.log("submit registration");
//     props.postRegistration(user);
//     props.history.push("/login");
//   };

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
//         };
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

// import React, { useState } from "react";
// import { connect } from "react-redux";
// import axios from "axios";

// import "../App.css";

// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { postRegistration } from "../actions/index";

// function Registration({ values, errors, touched }) {
//   const [user, setUser] = useState({
//     name: "",
//     phone_number: "",
//     email: "",
//     password: "",
//     terms: true
//   });

//   const changeHandler = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="form-container">
//       <Form>
//         <div>
//           <label>
//             Name&nbsp;
//             <Field
//               type="text"
//               name="name"
//               className="field-container"
//               value={user.name}
//               onChange={changeHandler}
//             />
//             {touched.name && errors.name ? (
//               <p className="error">{errors.name}</p>
//             ) : (
//               ""
//             )}
//           </label>
//         </div>

//         <div>
//           <label>
//             Phone&nbsp;
//             <Field
//               type="text"
//               name="phone_number"
//               className="field-container"
//               value={user.phone_number}
//               onChange={changeHandler}
//             />
//             {touched.phone_number && errors.phone_number ? (
//               <p className="error">{errors.phone_number}</p>
//             ) : (
//               ""
//             )}
//           </label>
//         </div>

//         <div>
//           <label>
//             Email&nbsp;
//             <Field
//               type="email"
//               name="email"
//               className="field-container"
//               value={user.email}
//               onChange={changeHandler}
//             />
//             {touched.email && errors.email ? (
//               <p className="error">{errors.email}</p>
//             ) : (
//               ""
//             )}
//           </label>
//         </div>

//         <div>
//           <label>
//             Password&nbsp;
//             <Field
//               type="password"
//               name="password"
//               className="field-container"
//               value={user.password}
//               onChange={changeHandler}
//             />
//             {touched.password && errors.password ? (
//               <p className="error">{errors.password}</p>
//             ) : (
//               ""
//             )}
//           </label>
//         </div>

//         <div>
//           <label>
//             <Field type="checkbox" name="terms" checked={values.terms} />I
//             accept the Terms of Service
//             {touched.terms && errors.terms ? (
//               <p className="error">{errors.terms}</p>
//             ) : (
//               ""
//             )}
//           </label>
//         </div>

//         <div className="form-field">
//           <button type="submit">Submit</button>
//         </div>
//       </Form>
//     </div>
//   );
// }

// const RegFormFormik = withFormik({
//   mapPropsToValues: ({ name, phone_number, email, password, terms }) => {
//     return {
//       name: name || "",
//       phone_number: phone_number || "",
//       email: email || "",
//       password: password || "",
//       terms: terms || true
//     };
//   },

//   handleSubmit: (values, { props, resetForm }) => {
//     axios
//       .post("https://reqres.in/api/users", values)
//       .then(response => {
//         props.postRegistration(() => props.history.push("/login"));
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   },

//   validationSchema: Yup.object().shape({
//     name: Yup.string()
//       .min(2)
//       .required(),
//     phone_number: Yup.string()
//       .min(7)
//       .required(),
//     // role: Yup.mixed().required(),
//     email: Yup.string()
//       .email()
//       .required(),
//     password: Yup.string()
//       .min(4)
//       .required(),
//     terms: Yup.boolean().oneOf([true], "Please agree to the Terms of Service")
//   })
// })(Registration);

// const mapStateToProps = state => {
//   return {
//     registration: state
//   };
// };

// export default connect(mapStateToProps, { postRegistration })(
//   RegFormFormik(Registration)
// );

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
