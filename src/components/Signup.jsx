import React, { useState } from 'react';
import Lottie from 'lottie-react';
import Heading from "./Heading";
import chatAnimation from "../assets/chatAnimation.json";
import { signupInputData } from '../lib/Signup';
import { FaEye } from 'react-icons/fa';
import Button from './Button';

// Remove the global `email` variable that is outside of the component

const Signup = () => {
    const item = signupInputData();
    console.log("Signup Input Data:", item); // Debugging

    const [email, setemail] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [eye, seteye] = useState(false);

  //error state
    const [emailError, setemailError] = useState("");
    const [usernameError, setusernameError] = useState("");
    const [passwordError, setpasswordError] = useState("");

    const handleEye = () => {
        seteye(!eye);
    };

    // Handle input changes for username, email, and password
    const handleInput = (event) => {
        const { name, value } = event.target;
        if (name === "username") {
            setusername(value);
        } else if (name === "email") {
            setemail(value);
        } else if (name === "password") {
            setpassword(value);
        }
    };

    console.log(username, email, password); // To check values in console

    /*
     * to do : handleSignup function implement
     * motive :
     * param : ()
     * return null
    
    
    
    
    
    */ 

    const handleSignup = () => {

        if (!username) {
            setusernameError("username missing");
        } else if (!password) {
            setpasswordError("password missing");
        } else if (!email) {
            setemailError("email missing");
        } else {
            alert("fine");
        }
    };

    console.log(usernameError,passwordError,emailError)

    return (
        <div className='flex py-20'>
            <div className="left w-[55%] bg-white">
                <div className="flex flex-col justify-center items-center h-full">
                    <Heading content="Get started with easily register" />
                    <p className="font-normal font-heading_font leading-[28px] text-[21px] text-secondary_text_color opacity-42 pt-4 mb-6">
                        Free register and you can enjoy it
                    </p>
                    
                    {item?.map((inputItem, index) => (
                        inputItem.name === "password" ? (
                            <div key={index} className="mb-4 relative">
                                <label htmlFor={inputItem.name} className="block font-medium text-gray-700 mb-2">
                                    Your {inputItem.name} <span className='text-red-600'>*</span>
                                </label>
                                <input 
                                    type={eye ? "text" : "password"}
                                    className='py-2 px-3 border border-gray-300 rounded-xl w-full' 
                                    placeholder={`Enter your ${inputItem.name}`} 
                                    name={inputItem.name} 
                                    onChange={handleInput}
                                />
                                <span className='absolute top-[60%] right-3 cursor-pointer' onClick={handleEye}>
                                    <FaEye />
                                </span>
                                {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                            </div>
                        ) : (
                            <div key={index} className="mb-4">
                                <label htmlFor={inputItem.name} className="block font-medium text-gray-700 mb-2">
                                    Your {inputItem.name} <span className='text-red-600'>*</span>
                                </label>
                                <input 
                                    type={inputItem.name.toLowerCase() === "email" 
                                        ? "email" 
                                        : inputItem.name.toLowerCase() === "username" 
                                        ? "text" 
                                        : "password"
                                    }
                                    className='py-2 px-3 border border-gray-300 rounded-xl w-full' 
                                    placeholder={`Enter your ${inputItem.name}`} 
                                    name={inputItem.name} 
                                    onChange={handleInput}
                                />
                                                            {inputItem.name === "email"  && email == "" ? (
                    <span className="text-red-600 font-roboto_font">
                      {!email && emailError}
                    </span>
                  ): inputItem.name === "username" && username == "" ? (
                    <span className="text-red-600 font-roboto_font">
                      {!username && usernameError}
                    </span>
                  ): ""}
                            </div>
                        )
                    ))}
                    
                    <Button 
                        design='bg-secondary_text_color py-4 px-22 font-roboto font-rounded-md capitalize mt-4 cursor-pointer'
                        onClick={handleSignup} // This should trigger the alert on button click
                        content="Sign up"
                    />
                    
                    <p className='font-medium text-[16.4px] font-bold mt-4'>
                        Already have an account? <span className='text-red-500'>Sign In</span>
                    </p>
                </div>
            </div>

            <div className='RightWrapper w-[45%]'>
                <Lottie animationData={chatAnimation} />
            </div>
        </div>
    );
};

export default Signup;
