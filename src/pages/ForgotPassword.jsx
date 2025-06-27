import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Input from '../components/Input'
import Label from '../components/Label'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import LoadingPage from '../components/LoadingPage'
import { toast } from 'react-toastify'

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);


  const handleChange = (e) => {
    setEmail(e.target.value);
  }

const apiUrl = import.meta.env.VITE_API_URL;

 const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  if (!email) {
    toast.info("Please enter your email");
    return;
  }
  
const payload = {
  email,
}
setIsLoading(true);
try {
  const res = await fetch(`${apiUrl}/CandidateAuth/forgot-password`, {
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    credentials: 'include',
});

const responseBody = await res.text();

if (res.ok)
   {
  toast.success(`Password reset instructions sent to your email `);
 //console.log(responseBody);
 setEmail('');
navigate('/resetpassword', { state: { email } });
}
 else if(res.status === 400) {
           toast.error("User not found.");
      
         }
 else if (res.status === 500) {
           toast.error("An error accurred. Please try again later.");
         
         }
 else if(res.status === 401) {
           toast.error("Unauthorized access.");
        
         }
}
catch (err){
  console.error("Error submitting:", err);
  toast.error("An error occurred.  Please try again.");

}
finally{
  setIsLoading(false);
}

  }

  return (
    <>{
      isLoading ? (<LoadingPage/>) : (<Layout>
        <Header title={"Forgot Password"} word={"No worries, we’ll send you reset instructions."}/>
        <div className='mt-5 mb-10'>
        <Label label={"Email"}/>
        <div className="relative">
          <Input
           type={"text"}
           placeholder={"Enter your email"}
           name={"email"}
           value={email}
           onChange={handleChange}
           required={true}
          />
          <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
        </div>
        </div>
    
      
           <Button onClick={handleSubmit} >
            Reset Password
            </Button>
        <p className='p-4 text-[#01416EFF]'> <i class="fa-solid fa-arrow-left"></i> Back to <Link className='text-[#F0BD2D] ' to="/">log in</Link></p>
     </Layout>)
    }
    </>
 
  )
}

export default ForgotPassword
