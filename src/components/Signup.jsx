import React, { useState } from 'react';
import Lottie from 'lottie-react';
import Heading from "./Heading";
import chatAnimation from "../assets/chatAnimation.json";
import { signupInputData } from '../lib/Signup';
import { FaEye } from 'react-icons/fa';
import Button from './Button';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification  } from "firebase/auth";
import { toast , Bounce } from 'react-toastify';
import {HashLoader} from "react-spinners";
import { Link } from 'react-router';

const Registration = () => {
  const auth = getAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const [loading, setLoading] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  

  const handleEye = () => {
    setEye(!eye);
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSignUp = () => {
    if (!username) {
      setUsernameError("Username is missing!");
    } else if (!email) {
      setEmailError("Email is missing!");
    } else if (!password) {
      setPasswordError("Password is missing!");
    } else {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          updateProfile(auth.currentUser, { displayName: username });
        })
        .then(() => {
          toast.success(`🚀 ${username}, Your Account Created Successfully!`, {
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
        .then(() => sendEmailVerification(auth.currentUser))
        .then(() => {
          toast.info(`🦄 Verification mail sent to your email!`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Bounce,
          });
        })
        .catch((err) => {
          console.log(`Error: ${err.code}`);
        })
        .finally(() => {
          setLoading(false);
          setUsername("");
          setEmail("");
          setPassword("");
        });
    }
  };

  return (
    <div className="flex py-20">
      <div className="left w-[55%] bg-white">
        <div className="flex flex-col justify-center items-center h-full">
          <Heading content="Get started with easy registration" />
          <p className="font-normal font-heading_font leading-[28px] text-[21px] text-secondary_text_color opacity-42 pt-4 mb-4">
            Free register and enjoy!
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2 relative">
              <label className="text-black font-bold text-[21px]">Your Username <span className="text-red-600">*</span></label>
              <input
                type="text"
                className="py-2 px-4 border border-gray-400 rounded-xl mb-2"
                name="username"
                placeholder="Enter your username"
                onChange={handleInput}
                value={username}
              />
              {usernameError && <span className="text-red-600">{usernameError}</span>}
            </div>

            <div className="flex flex-col gap-2 relative">
              <label className="text-black font-bold text-[21px]">Your Email <span className="text-red-600">*</span></label>
              <input
                type="email"
                className="py-2 px-4 border border-gray-400 rounded-xl mb-2"
                name="email"
                placeholder="Enter your email"
                onChange={handleInput}
                value={email}
              />
              {emailError && <span className="text-red-600">{emailError}</span>}
            </div>

            <div className="flex flex-col gap-2 relative">
              <label className="text-black font-bold text-[21px]">Your Password <span className="text-red-600">*</span></label>
              <input
                type={eye ? "text" : "password"}
                className="py-2 px-4 border border-gray-400 rounded-xl mb-2"
                name="password"
                placeholder="Enter your password"
                onChange={handleInput}
                value={password}
              />
              <span className="absolute right-2 top-12 cursor-pointer" onClick={handleEye}>
                <FaEye />
              </span>
              {passwordError && <span className="text-red-600">{passwordError}</span>}
            </div>

            {loading ? (
              <Button design="px-22 py-2 bg-secondary_color text-white rounded mt-4 cursor-pointer text-lg" content={<HashLoader
                color="#ffffff"
                size={20}
                speedMultiplier={2}
              />} />
            ) : (
              <Button design="px-22 py-2 bg-secondary_color text-white rounded mt-4 cursor-pointer text-lg" onClick={handleSignUp} content="Sign Up" />
            )}

            <p className="font-medium text-[16.4px] mt-4">
              Already have an account? <Link to ={"/signin"} className="text-different_color hover:text-blue-500 hover:underline cursor-pointer">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
      <div className="Right w-[45%] mt-[7%]">
        <Lottie animationData={chatAnimation} />
      </div>
    </div>
  );
};

export default Registration;
