import module from "./LoginForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email format is incorrect")
    .required("Email is a required field"),
  password: Yup.string()
    .min(6, "The password is too short")
    .required("Password is a required field"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div className={module.formDiv}>
      <h1 className={module.formHeader}>Log in</h1>
      <p>Log in to continue</p>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={module.form}>
          <label className={module.formLabel}>
            <Field
              placeholder="Email"
              className={module.input}
              type="text"
              name="email"
            />
            <ErrorMessage
              className={module.error}
              name="email"
              component="span"
            />
          </label>
          <label className={module.formLabel}>
            <Field
              placeholder="Password"
              className={module.input}
              type="password"
              name="password"
            />
            <ErrorMessage
              className={module.error}
              name="password"
              component="span"
            />
          </label>
          <button className={module.formButton} type="submit">
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
