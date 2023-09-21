import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        //NOTE: Send a request to the backend to initiate the password reset
        try{
            const res = await fetch("/api/reset-password", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
            });

            if(res.ok){
                setMessage("Password reset email sent. Please check your inbox.");
            }
            else{
                const data = await res.json();
                setMessage(data.error || 'Something went wrong. Please try again later.');
            }
        }
        catch(error){
            setMessage("Something went wrong. Please try again later");
        }

        setIsLoading(false);
    }

  return (
    <div className=' '>

    
    <div className=' h-screen bg-gray-500 fixed inset-0 z-10 flex items-center justify-center'>
        <div className=' bg-white border rounded-lg px-9 py-4 container mx-auto mt-5 shadow-md sm:w-1/2 lg:w-1/3'>
            <h2 className=' text-2xl font-semibold  border-b-4'> Forgot Password</h2>
            <form onSubmit={handleSubmit} className=' mt-4'>
                <p className=' py-4'>Please enter your email address or mobile number to search for your account.</p>
                <div className=' mb-4'>
                    <label htmlFor='email' className=' block font-medium text-gray-700'>
                        Email address
                    </label>
                    <input onChange={handleEmailChange} value={email} type='email' id='email' name='email' placeholder='Enter your email address' 
                    className=' w-full px-4 py-4 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500' required/>
                </div>
                <div className=' mb-4 text-red-600'>{message}</div>
                <div className=' flex justify-end w-full'>
                <button className=' w-40 py-2 mt-4 mb-4 bg-gray-200 border rounded-lg'>
                   <Link to="/">Cancel</Link> 
                </button>
                <button type=' submit' className={` w-48 py-2 mt-4 text-white bg-blue-500 rounded-lg focus:outline-none mb-4 ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : 'hover: bg-black'
                    }`} disabled={isLoading}>
                    {isLoading ? 'Sending Email...' : 'Reset Password'}
                </button>
                </div>
                
            </form>

        </div>
    </div>
    </div>
  )
}

export default ForgetPassword