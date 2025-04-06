import React, {useState, useRef} from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const ResetPassword = () => {
    
    const length = 4;
    
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputRefs = useRef([]);

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

        
          const handleKeyDown = (index, e) => {
            if (e.key === 'Backspace' && !otp[index] && index > 0) {
              inputRefs.current[index - 1].focus();
            }}
 
  return (
    <Layout>
        <Header title={"Password Reset"} word={"We sent a code to adebi@gmail.com"}/>

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
          className="w-12 h-12 border-2 border-gray-300 text-center text-xl font-bold rounded-lg focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
      ))}
    </div>

        <Link to="#">
       <Button>
       Continue
        </Button></Link>
        <p className='p-6 text-[#01416EFF] font-light'> Didn't receive any email <Link className='text-[#F0BD2D] font-bold underline ' to="/">Click to resend</Link></p>
    <p className=' text-[#01416EFF] font-light'> <i class="fa-solid fa-arrow-left"></i> Back to <Link className='text-[#F0BD2D] ' to="/">log in</Link></p>
    </Layout>
  )
}

export default ResetPassword
