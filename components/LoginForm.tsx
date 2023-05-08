'use client'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useRouter, redirect } from 'next/navigation';
import { useEffect } from 'react';
import * as Yup from 'yup';
import Link from "next/link";
// import { useHistory, BrowserRouter as Router } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Router from 'next/router';


type User = {
  username: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});


const initialValues = {
  username: '',
  password: ''
};

const loginUser = (values: User): User | null => {

  // Simulating a database lookup or API call
  const users: User[] = [
    { username: 'admin', password: 'root' },
    { username: 'John', password: 'test' },
    { username: 'Jane', password: 'try' },
  ];

  const user = users.find((user) => user.username === values.username);

  if (user && user.password === values.password) {
    return user;
  } else {
    return null;
  }
};

const LoginForm: React.FC = () => {
  //
  const  { push } = useRouter();

  // const doNothing = (values: User) =>{

  // }

  const redirectSuccess = () => {
    // redirect('/Travel');
    useEffect(() =>{
        push('/Travel');
      }, []);
  }
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const loggedInUser = loginUser(values);
    
  //   if (loggedInUser) {
  //     console.log('Login successful!');
  //     console.log(loggedInUser);
  //     // Router.push('Travel');
      
      // useEffect(() =>{
      //   push('/Travel');
      // }, []);
      
  //   } else {
  //     console.log('Invalid username or password');
  //   }
  // };

  return (

    <form className="flex flex-col gap-3">
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Username</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>


        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>

        <div className="flex ">
        <Link className="btn btn-primary" href="/Travel">Login</Link>
        </div>
        <p>Don't have an account? </p>
        <Link className="text-blue-600" href="/SignUp">Create now!</Link>
      </form>

      // <Formik
      //   initialValues={initialValues}
      //   validationSchema={validationSchema}
      //   onSubmit={doNothing}
      // >
      //   <Form>
      //   <div className="card w-96 bg-neutral text-neutral-content">
      //     <div className="card-body items-center text-center">
      //       <h2 className="card-title">Welcome</h2>
      //       <p>Embark on your big adventure today.</p>
      //       <div className="mb-3">
      //       <Field className="form-control" id="username" name="username" placeholder=" Username" aria-describedby="usernameHelp" />
      //       <ErrorMessage component="div" name="username" className="error" />
      //     </div>

      //     <div className="mb-3">
      //       <Field className="form-control" id="password" name="password" placeholder=" Password" type="password" />
      //       <ErrorMessage component="div" name="password" className="error" />
      //     </div>
      //       <div className="card-actions justify-end">
      //         <button className="btn btn-primary">Login</button>
      //         <button className="btn btn-ghost">Sign Up</button>
      //       </div>
      //     </div>
      //   </div>
      //   </Form>
      // </Formik>
    
  );

  
};

export default LoginForm;
function lume(arg0: { location: URL; }) {
  throw new Error('Login function not implemented.');
}

