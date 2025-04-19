import React, {useState, useRef} from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import LoadingPage from '../components/LoadingPage'
import { toast } from 'react-toastify'

const ResetPassword = () => {
    
    const length = 6;
    const navigate = useNavigate();
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputRefs = useRef([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const location = useLocation();
    const email = location.state?.email || 'your email';
    const apiUrl =  import.meta.env.VITE_API_URL;



    const handleChange = (index, value) => {
        if (!/^[0-9]?$/.test(value)) return; // Only allow numbers
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < length - 1) {
            inputRefs.current[index + 1].focus();
          }

          if (newOtp.every((num) => num !== '')) {
           console.log(newOtp.join(''));
          }
        }


        
   const handleSubmit = async(e) => {
      e.preventDefault();

      const payload ={
        code: otp.join(''), email: email
      }
      setIsLoading(true);
try{
  const res = await fetch (`${apiUrl}/CandidateAuth/verify-code`, {
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    credentials: 'include',
  });

  if(res.ok){
    setOtp(Array(length).fill(''));
    navigate('/setpassword', { state: { email } });
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
  catch (err){
    console.error("Error submitting:", err);
    toast.error("An error occurred, please try again.");
  
   }
   finally{
    setIsLoading(false);}
  }

  const handleResendCode = async () => {
    try {
      
      const res = await fetch('https://localhost:5001/api/CandidateAuth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, 
        }),
      });
  
      if (res.ok) {
        toast.success("Verification code resent!");
      } else {
        toast.error("Failed to resend code.");
      }
    } catch (error) {
      console.error("Resend error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };
        
     const handleKeyDown = (index, e) => {
      if (e.key === 'Backspace' && !otp[index] && index > 0) {
              inputRefs.current[index - 1].focus();
      }}
 
  return (
      <>
      {isLoading?(<LoadingPage/>):( <Layout>
        <Header title={"Password Reset"} word={`We sent a code to ${email}`}/>

        <div className="flex space-x-3 justify-center my-8">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          value={digit}
          maxLength="1"
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          required= {false}
          className="w-12 h-12 border-2 border-gray-300 text-center text-xl font-bold rounded-lg focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
      ))}
    </div>

     
       <Button onClick={handleSubmit} disabled={otp.some((digit) => digit === '')} className={` ${
    !otp.every(num => num !== '')
      ? 'px-4 py-2 bg-[#dac691] text-[#72afdb] rounded-2xl w-100 cursor-crosshair'
      : 'px-4 py-2 bg-[#F0BD2D] text-[#01416EFF] rounded-2xl w-100 cursor-pointer'
  }`}>
       Continue
        </Button>
        <p className='p-6 text-[#01416EFF] font-light'> Didn't receive any email <Link className='text-[#F0BD2D] font-bold underline ' onClick={handleResendCode}>Click to resend</Link></p>
    <p className=' text-[#01416EFF] font-light'> <i class="fa-solid fa-arrow-left"></i> Back to <Link className='text-[#F0BD2D] ' to="/">log in</Link></p>
    </Layout>)}
      </>
   
  )
}

export default ResetPassword
