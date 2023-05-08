'use client'

import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
    username: string;
    name: string;
    password: string;
}

export default function SignUpForm() {
    return (
      <div>
        <h1 className="display-6 mb-3">Login</h1>
        <Formik
          initialValues={{
            username: '',
            name: '',
            password: '',
          }}

          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 3));
              setSubmitting(false);
            }, 500);
          }}

        >
          <Form>
            <div className="mb-3">
              <Field className="form-control" id="username" name="username" placeholder="Username" aria-describedby="usernameHelp" />
            </div>

            <div className="mb-3">
              <Field className="form-control" id="name" name="name" placeholder="Name" />
            </div>
  
            <div className="mb-3">
              <Field className="form-control" id="password" name="password" placeholder="Password" type="password" />
            </div>

            <button type="submit" className="btn btn-primary">Sign Up</button>
            <p> </p>
            <div className='mt-3'>
              <p>Already have an account? 
                <a href="#" className='text-blue-600'> Login </a>
              </p>
            </div>
            
          </Form>
        </Formik>
      </div>
    );
  };
