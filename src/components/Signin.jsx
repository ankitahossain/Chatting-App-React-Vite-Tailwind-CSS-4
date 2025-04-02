import React, { useState } from 'react';
import Lottie from 'lottie-react';
import SigninAnimation from '../assets/Animation.json';
import Button from './Button';
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { toast, Bounce } from 'react-toastify';

const Signin = () => {
  const auth = getAuth();
  const db = getDatabase();
  const [loginInfo, setloginInfo] = useState({ email: '', password: '' });
  const [loginInfoError, setloginInfoError] = useState({ emailerr: '', passworderr: '' });

  const handleInput = (event) => {
    const { id, value } = event.target;
    setloginInfo({ ...loginInfo, [id]: value });
  };

  const handleSignIn = () => {
    const { email, password } = loginInfo;

    if (!email) {
      setloginInfoError({ ...loginInfoError, emailerr: "Email is missing" });
    } else if (!password) {
      setloginInfoError({ ...loginInfoError, passworderr: "Password is missing" });
    } else {
      setloginInfoError({ emailerr: "", passworderr: "" });

      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          toast.success(`🚀 Login Successful!`, {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
          });
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        });
    }
  };

  const loginwithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userInfo) => {
        set(ref(db, 'users'), {
          username: "Ankita",
          email: "ankita@gmail.com",
          profile_picture: "imgURL",
        });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  return (
    <div className="flex py-20">
      <div className="left_wrapper w-[55%] bg-white">
        <div className="flex flex-col justify-center items-center h-full">
          <p className="font-bold font-roboto leading-[28px] text-[30px] text-black pt-4 mb-4">
            Login to your account!
          </p>
          <div className='flex items-center mt-4 border-2 border-gray-400 rounded cursor-pointer text-lg mb-9'>
            <FcGoogle className="h-[50px] w-[50px] ml-6" />
            <span className='text-black ml-2 font-roboto font-semibold text-[16.4px] py-6 mr-7'>
              Login with Google
            </span>
          </div>
          <label className="font-roboto font-bold text-[21px]">Enter your email address</label>
          <input
            type="email"
            id="email"
            onChange={handleInput}
            placeholder="Youraddres@email.com"
            className="border-b-4 border-gray-300 mb-2"
          />
          {loginInfoError.emailerr && <span className='text-red-500'>{loginInfoError.emailerr}</span>}
          <label className="font-roboto font-bold text-[21px]">Enter your password</label>
          <input
            type="password"
            id="password"
            onChange={handleInput}
            placeholder="Enter your password"
            className="border-b-4 border-gray-300 mb-2"
          />
          {loginInfoError.passworderr && <span className='text-red-500'>{loginInfoError.passworderr}</span>}
          <Button
            design="px-22 py-2 bg-secondary_color font-roboto font-bold text-white rounded mt-4 cursor-pointer text-lg mt-9"
            onClick={handleSignIn}
            content="Login to Continue"
          />
          <p className="font-medium text-[16.4px] mt-4">
            Don’t have an account?
            <Link to="/signup" className="text-different_color hover:text-blue-500 hover:underline cursor-pointer">
              {' '}Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="right_wrapper w-[45%]">
        <Lottie animationData={SigninAnimation} />
      </div>
    </div>
  ); 
};

export default Signin;
