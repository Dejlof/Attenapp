import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Input from '../components/Input'
import Label from '../components/Label'
import Button from '../components/Button'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import LoadingPage from '../components/LoadingPage'
import { toast } from 'react-toastify'

const SetPassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const apiUrl =  import.meta.env.VITE_API_URL;

  

  const [formData, setFormData] = React.useState({
            newPassword: '',
            confirmPassword: '',
      });

const location = useLocation();
const email = location.state?.email || 'your email';

const navigate = useNavigate();   
const handleChange = (e)=>{
  setFormData(prev =>({
    ...prev,
    [e.target.name]: e.target.value
  }))
}

const handleSubmit = async (e)=>{
  e.preventDefault(); 


  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };
  
  if (formData.newPassword && !validatePassword(formData.newPassword.trim())) {
    toast.info("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one special character.");
    return;
  }

  if (formData.newPassword !== formData.confirmPassword) {
    toast.info("Passwords do not match!");
    return;
  }

  setIsLoading(true);

  const { confirmPassword, ...rest } = formData;

   const payload ={
    ...rest, email: email
   }

   try{
    const res = await fetch (`${apiUrl}/CandidateAuth/reset-password`, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    })

    const responseBody = await res.text();

    if(res.ok){
      console.log(responseBody);
      setFormData({
        newPassword: '',
        confirmPassword: '',
      })
      navigate('/');
      toast.success("Password reset successfully. You can now log in.");
    }
      else if(res.status === 400) {
            toast.error("Invalid input. Please check your data.");   
          }
          else if (res.status === 500) {
            toast.error("An error occurred. Please try again later."); 
          }
          else if(res.status === 401) {
            toast.error("Unauthorized access.");       
          }

   }
   catch(err){
    console.error("Error submitting:", err);
    toast.error("An error occurred. Please try again later.");
    
   }
   finally{
    setIsLoading(false);
   }

}



  return (
    <>
    {isLoading ?(<LoadingPage/>) : ( <Layout>
<Header title={"Set new password"} word={"Must be atleast 8 characters"}/>
<form className='my-5' onSubmit={handleSubmit}>
    <div className='relative w-full'>
    <Label label={"Password"}/>
      <Input
         type={showPassword ? "text":"password"}
       placeholder={"Password"}
         pad='pr-10'
         onChange={handleChange}
         value={formData.newPassword}
         name={"newPassword"}
         required={true}
      />
      <button type="button"className="absolute right-4 top-8 text-gray-400" onClick={()=>{setShowPassword(!showPassword)}}>
    <i class="fa-regular fa-eye"></i>
    </button>
    </div>
    <div className='relative w-full my-5'>
    <Label label={"Confirm Password"}/>
      <Input
       type={showPassword ? "text":"password"}
       placeholder={"Password"}
        pad='pr-10'
        onChange={handleChange}
        value={formData.confirmPassword}
        name={"confirmPassword"}
        required={true}
      />
      <button type="button"className="absolute right-4 top-8 text-gray-400" onClick={()=>{setShowPassword(!showPassword)}}>
    <i class="fa-regular fa-eye"></i>
    </button>
    </div>
    <div className='text-center'>
    <Button type={"submit"} >
        Reset Password
        </Button>
    </div>
    
    </form>
     
    <p className='p-4 text-[#01416EFF]'> <i class="fa-solid fa-arrow-left"></i> Back to <Link className='text-[#F0BD2D] ' to="/">log in</Link></p>
 </Layout>)}
    </>

  )
}

export default SetPassword
