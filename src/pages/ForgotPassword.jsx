import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Input from '../components/Input'
import Label from '../components/Label'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
 <Layout>
    <Header title={"Forgot Password"} word={"No worries, we’ll send you reset instructions."}/>
    <div className='mt-5 mb-10'>
    <Label label={"Email"}/>
    <div className="relative">
      <Input
       type={"text"}
       placeholder={"Enter your email"}
      />
      <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    </div>
    </div>

    <Link to="#">
       <Button>
        Reset Password
        </Button></Link>
    <p className='p-4 text-[#01416EFF]'> <i class="fa-solid fa-arrow-left"></i> Back to <Link className='text-[#F0BD2D] ' to="/">log in</Link></p>
 </Layout>
  )
}

export default ForgotPassword
