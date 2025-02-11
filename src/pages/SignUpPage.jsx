import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import Attencam from '../components/Attencam'


const SignUpPage = () => {

const [showPassword, setShowPassword] = React.useState(false);


  return (
   <Layout>
     <Header title={"Register"}/>
     <Label label={"Label required field"}/>
     <div className='pt-5'>
        <div className='flex flex-row flex-wrap justify-between w-210'>
            <div className='basis-1/2 mb-5'>
            <Label label={"First Name"}/>
          <Input
            type={"text"}
            pad='pl-2'
           /> 
            </div>
            <div className='basis-1/2 mb-5'>
            <Label label={"Last Name"}/>
          <Input
            type={"text"}
            pad='pl-2'
           /> 
            </div>
            <div className='basis-1/2 mb-5'>
            <Label label={"Email"}/>
          <Input
            type={"text"}
            pad='pl-2'
           /> 
            </div>
            <div className='basis-1/2 mb-5'>
            <Label label={"Phone Number"}/>
          <Input
            type={"phone"}
            pad='pl-2'
           /> 
            </div>
            <div className='basis-1/6 mb-5'>
            <Label label={"Gender"}/>
            <select className="border pt-2 pb-2 pl-6 pr-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"name="gender" id="gender">
            <option>---</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
           </select>
            </div>
            <div className='basis-1/4 mb-5'>
            <Label label={"Cohort ID"}/>
          <Input
            type={"text"}
            pad='pl-2'
            w='w-50'
           /> 
            </div>
            <div className='basis-1/4 mb-5'>
            <Label label={"Staff ID"}/>
          <Input
            type={"text"}
            pad='pl-2'
            w='w-50'
           /> 
            </div>
            <div className='basis-1/4 mb-5'>
            <Label label={"Department"}/>
          <Input
            type={"text"}
            pad='pl-2'
            w='w-60'
           /> 
            </div>
            <div className='basis-1/2 mb-2'>
            <Label label={"Passsword"}/>
         <div className="relative w-full">
         <Input
       type={showPassword? "text" :"password"}
       pad='pr-10'
      />
    <button type="button"className="absolute right-8 top-3 text-gray-400" onClick={()=>{setShowPassword(!showPassword)}}>
    <i class="fa-regular fa-eye"></i>
    </button>
  </div>     
            </div>
            <div className='basis-1/2 mb-2'>
            <Label label={"Confirm Password"}/>
         <div className="relative w-full mb-4">
         <Input
       type={"password"}
       pad='pr-10'
      />
    <button type="button"className="absolute right-8 top-3 text-gray-400" onClick={()=>{setShowPassword(!showPassword)}}>
    <i class="fa-regular fa-eye"></i>
    </button>
  </div>     
            </div>
        </div>
   <Attencam/>
        <div className='text-center mt-2'>
        <Button title={"Sign Up"}/>
        </div>
       
     </div>
   </Layout>
  )
}

export default SignUpPage