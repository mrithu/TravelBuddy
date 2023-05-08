'use client'

// import { Formik, Field, Form, ErrorMessage } from 'formik';
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

const SignUpForm: React.FC = () => {
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
                <span className="label-text">Set Password</span>
            </label>
            <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>

        <div className="flex ">
        <Link className="btn btn-primary" href="/Travel">Sign Up</Link>
        </div>
        <p>Already have an account? </p>
        <Link className="text-blue-600" href="/Login">Login now!</Link>
      </form>

  );


function lume(arg0: { location: URL; }) {
  throw new Error('Signup function not implemented.');
}
}
export default SignUpForm;