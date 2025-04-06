import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Input from '../components/Input'
import Label from '../components/Label'
import Button from '../components/Button'
import { Link } from 'react-router-dom'


const SetPassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);


  return (
 <Layout>
<Header title={"Set new password"} word={"Must be atleast 8 characters"}/>
<div className='mt-5 mb-10'>
    <div className='relative w-full'>
    <Label label={"Password"}/>
      <Input
         type={showPassword ? "text":"password"}
       placeholder={"Password"}
         pad='pr-10'
      />
      <button type="button"className="absolute right-4 top-8 text-gray-400" onClick={()=>{setShowPassword(!showPassword)}}>
    <i class="fa-regular fa-eye"></i>
    </button>
    </div>
    <div className='relative w-full mt-5'>
    <Label label={"Confirm Password"}/>
      <Input
       type={showPassword ? "text":"password"}
       placeholder={"Password"}
        pad='pr-10'
      />
      <button type="button"className="absolute right-4 top-8 text-gray-400" onClick={()=>{setShowPassword(!showPassword)}}>
    <i class="fa-regular fa-eye"></i>
    </button>
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

export default SetPassword
