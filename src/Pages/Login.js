import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup =()=>{
    const userDetails = {
      username: `${firstName} ${lastName}`,
      email: email,
      password: password
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    console.log(userDetails);
    navigate(closeCreateAccount)
  }
  
  const handleLogin = ()=>{
    const storedUserDetails = localStorage.getItem('userDetails');
    if(storedUserDetails ){
      const userDetails = JSON.parse(storedUserDetails);
      console.log('UserDetails from LocalStorage:', userDetails); // Debug line
      console.log('Email entered:', email); // Debug line
      console.log('Password entered:', password); // Debug line

      if(userDetails.email === email && userDetails.password === password){
        console.log("Login successful!");
        alert("Login successful")
        navigate('/header');
      }
      else{
        alert("Invalid email or password")
      }
    }
    else{
      alert("User not found")
    }
  }

  const openCreateAccount = () => {
    setShowCreateAccount(true);
  };

  const closeCreateAccount = () => {
    setShowCreateAccount(false);
  };
  
  return (
    <div className=" lg:flex " >
      {showCreateAccount && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-orange-200 opacity-70"></div>
        <div className="bg-white w-full max-w-md mx-auto p-4 rounded-lg shadow-lg z-50 relative">
          <button onClick={closeCreateAccount}
            className="absolute top-2 right-2 text-orange-600 hover:text-gray-800 cursor-pointer focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-semibold mb-4">Create a new Account</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" id="firstName" name="firstName"
                className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" id="lastName" name="lastName"
                className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" name="email"
                className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" name="password"
                className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
               Confirm Password
              </label>
              <input type="password" id="password" name="password"
                className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4 text-xs">
              <p>
                By clicking Sign Up, you agree to our <span className=' text-orange-400'>Terms, Privacy Policy</span> and <span className=' text-orange-400'>Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any time.
              </p>
            </div>
            <button
              type="submit" onClick={handleSignup}
              className="w-full py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      )}
    <div className="lg:w-1/2 p-10 lg:pb-96 flex items-center justify-center">
      <div className=' text-center'>
        <h1 className="text-4xl font-bold text-orange-500 mb-4">QuickTix</h1>
        <p className="text-black">With <span className=' text-orange-500'>QUICKTIX</span> You can purchase any ticket of your choice across the Globe</p>
      </div>
    </div>

    <div className="w-full lg:w-1/2 p-4 lg:p-10 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Log in to QuickTix</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" name="email"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" name="password"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <Link to="" className="text-orange-400 text-sm hover:underline">
          <button
            type="submit" onClick={handleLogin}
            className="w-full py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Log In
          </button>
              </Link>
          <div className="mb-4 py-4 flex items-center justify-center">
              <Link to="/forgetpassword" className="text-orange-400 text-sm hover:underline">
                Forgotten Password?
              </Link>
            </div>
        </form>
        <div className="mt-4 flex items-center justify-center">
          <p className="text-sm text-gray-500">Don't have an account? <Link to="" className="text-orange-400 hover:underline" onClick={openCreateAccount}>Create one</Link></p>
        </div>
      </div>
    </div>
  </div>
   )
}

export default Login