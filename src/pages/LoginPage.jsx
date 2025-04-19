import React from 'react'
import Button from '../components/Button'
import Label from '../components/Label'
import Input from '../components/Input'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { Link, useNavigate } from 'react-router-dom'
import LoadingPage from '../components/LoadingPage'
import { toast } from 'react-toastify'


const LoginPage = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const[isLoading, setIsLoading] = React.useState(false);
    const apiUrl =  import.meta.env.VITE_API_URL;


    const [formData, setFormData] = React.useState({
         username: '',
          password: '',
          rememberMe: true,
    });
    if (formData.rememberMe) {
      localStorage.setItem('rememberedUsername', formData.username);
    } else {
      localStorage.removeItem('rememberedUsername');
    }

    React.useEffect(() => {
      const savedUsername = localStorage.getItem('rememberedUsername');
      if (savedUsername) {
        setFormData((prev) => ({
          ...prev,
          username: savedUsername,
          rememberMe: true,
        }));
      }
    }, []);

    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async(e) =>{
      e.preventDefault();
      const requiredFields = [
        'username', 'password'
      ];
    
      const missingFields = requiredFields.filter(field => !formData[field]);
    
      if (missingFields.length > 0) {
        alert("Please fill in all fields");
        return;
      }
    
 
      const payload = {
        ...formData,
      };
      setIsLoading(true);
      try{
        const res = await fetch(`${apiUrl}/CandidateAuth/login`, {
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
          credentials: 'include',
      });
      
      const contentType = res.headers.get("content-type");
      const responseBody = contentType?.includes("application/json")
        ? await res.json()
        : await res.text();


      if (res.ok) {
         setFormData({
          username: '',
          password: '',    
      })
      navigate('/getstarted'); 
      toast.success("Login successful!");
    }
     else if(res.status === 400) {
           toast.error("Invalid input. Please check your data.");
         }
         else if (res.status === 500) {
           toast.error("Server error. Please try again later.");

         }
         else if(res.status === 401) {
           toast.error("Invalid Username or Password.");
         }
    }
    catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Server error. Please try again later.");
    }
    finally{
      setIsLoading(false);
    }
  }


  return (
    <>
    {isLoading ?(<LoadingPage/>) : ( <Layout>
    <Header title={"Log In"} word={"Welcome! Please fill in your credentials"}/>
    <form onSubmit={handleSubmit}>
    <div className='inputdetail pt-10'>
    <Label label={"Email"}/>
    <div className="relative mb-4">
      <Input
       type={"text"}
       placeholder={"Enter your email"}
       name={"username"}
       value={formData.username}
       onChange={handleChange}
       required={true}
      />
      <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    </div>
    <Label label={"Passsword"}/>
   <div className="relative w-full mb-4">
   <Input
       type={showPassword ? "text":"password"}
       placeholder={"Enter your password"}
       pad='pr-10'
       name={"password"}
       value={formData.password}
       onChange={handleChange}
       required={true}
      />
   <button type="button"className="absolute right-6 top-3 text-gray-400" onClick={()=>{setShowPassword(!showPassword)}}>
    <i class="fa-regular fa-eye"></i>
    </button>
  </div>
    </div>
  
  <div className="flex w-100 pt-2 pb-5">
    <div className=' flex flex row basis-1/2'>
    <Input
       type={"checkbox"}
       w='w-5'
       name="rememberMe"
  checked={formData.rememberMe}
  required={false}
  onChange={(e) =>
    setFormData({ ...formData, rememberMe: e.target.checked })
  }
      />
      <p>Remember me</p>
    
    </div>
    <Link to="/forgotpassword" className="basis-1/2 text-end underline">Forgot Password?</Link>
  </div>
  
       <Button type={"submit"} >
        Log In
        </Button>
        </form>
  <p className='p-4'>Don't have an account? <Link className='underline' to="/Register">Sign Up</Link></p>
    </Layout>)}
    
    </>
   
  )
}

export default LoginPage

