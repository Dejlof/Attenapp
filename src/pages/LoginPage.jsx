import React from 'react'
import Button from './components/Button'
import Label from './components/Label'
import Input from './components/Input'
import Header from './components/Header'
import Layout from './components/Layout'


const LoginPage = () => {
  return (
    <Layout>
    <Header title={"Log In"}/>
    <div className='inputdetail'>
    <Label label={"Email"}/>
    <div className="relative mb-4">
      <Input
       type={"text"}
       placeholder={"Enter your email"}
      />
      <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    </div>
    <Label label={"Passsword"}/>
   <div className="relative w-full mb-4">
   <Input
       type={"password"}
       placeholder={"Enter your password"}
       pad='pr-10'
      />
    <button className="absolute right-3 top-3 text-gray-400">
      👁️
    </button>
  </div>
    </div>
  
  <div className="flex w-100 pt-2 pb-5">
    <p className='basis-1/2'>Remember me</p>
    <a href="#" className="basis-1/2 text-end underline">Forgot Password?</a>
  </div>
  
  <Button title={"Log In"}/>
  <p className='p-4'>Don't have an account? <a className='underline' href="#">Sign Up</a></p>
    </Layout>
  )
}

export default LoginPage

