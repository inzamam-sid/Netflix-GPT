import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/25f808aa-cecb-4753-8541-9a79f40c18ae/web/IN-en-20251006-TRIFECTA-perspective_507f47be-8780-4697-92cb-0f6c78177b6e_medium.jpg'
      alt='logo'
      style={{
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    display: "block",
  }}
      />
      </div>

      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
       {!isSignInForm && (
        <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>
        )}
        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now." : "Already registered? Sign In Now..."}</p>
      </form>

    </div>
  )
}

export default Login