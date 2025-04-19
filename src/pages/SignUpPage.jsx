import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import Attencam from '../components/Attencam'
import { useNavigate } from 'react-router-dom'
import LoadingPage from '../components/LoadingPage'
import { toast } from 'react-toastify'


const SignUpPage = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    candidateGender: '',
    cohortId: '',
    staffId: '',
    department: '',
    password: '',
    confirmPassword: '',
  });
const [capturedImage, setCapturedImage] = React.useState(null);
const [showPassword, setShowPassword] = React.useState(false);
const [isLoading, setIsLoading] = React.useState(false);
const apiUrl =  import.meta.env.VITE_API_URL;



const navigate = useNavigate();

const handleChange = (e) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};



const handleSubmit = async (e) => {
  e.preventDefault();


  const requiredFields = [
    'firstName', 'lastName', 'email', 'phone', 'candidateGender',
    'staffId', 'department', 'password', 'confirmPassword'
  ];

  const missingFields = requiredFields.filter(field => !formData[field]);

  if (missingFields.length > 0 || !capturedImage) {
    toast.info("Please fill in all fields and capture your face.");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    toast.info("Passwords do not match!");
    return;
  }

    setIsLoading(true);


  const { confirmPassword, cohortId, ...rest } = formData;

  const getBase64String = (dataUrl) => {
    if (!dataUrl) return '';
    const parts = dataUrl.split(',');
    return parts.length > 1 ? parts[1] : dataUrl;
  };
  
  const payload = {
    ...rest,
    faceData: getBase64String(capturedImage),
  };

  try {
    const res = await fetch(`${apiUrl}/CandidateAuth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    });

    const contentType = res.headers.get("content-type");
    const responseBody = contentType?.includes("application/json")
      ? await res.json()
      : await res.text();


    if (res.ok) {
      toast.success("Registered successfully!");
      localStorage.getItem('token', responseBody.token);
  setFormData({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    candidateGender: '',
    cohortId: '',
    staffId: '',
    department: '',
    password: '',
    confirmPassword: '',
  });
  setCapturedImage(null);
  navigate('/getstarted'); 
    } else if(res.status === 400) {
      toast.error("Invalid input. Please check your data.");
    }
    else if (res.status === 409) {
      toast.error("Email already exists.");
    }
    else if (res.status === 500) {
      toast.error("Server error. Please try again later.");
    }
    else if(res.status === 401) {
      toast.error("Unauthorized access.");

    }
  } catch (err) {
    console.error("Error submitting form:", err);
    toast.error("Server error. Please try again later.");
  }
  finally{
    setIsLoading(false);
  }
};

  return (
    <>
    {isLoading ? (<LoadingPage/>) : (<Layout>
     <Header title={"Register"} word={"Welcome! Please fill in your credentials"}/>
     <Label label={"Label required field"}/>
     <form onSubmit={handleSubmit} className='pt-5'>
        <div className='flex flex-row flex-wrap justify-between w-210'>
        {[
            ['First Name', 'firstName'],
            ['Last Name', 'lastName'],
            ['Email', 'email'],
            ['Phone Number', 'phone'],
          ].map(([label, name], idx) => (
            <div key={idx} className='basis-1/2 mb-5'>
              <Label label={label} />
              <Input
                name={name}
                type="text"
                pad='pl-2'
                value={formData[name]}
                onChange={handleChange}
                required={true}
              />
            </div>
          ))}
          
          <div className='basis-1/6 mb-5'>
            <Label label="Gender" />
            <select
              className="border pt-2 pb-2 pl-6 pr-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="candidateGender"
              value={formData.candidateGender}
              onChange={handleChange}
            >
              <option value="">---</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>


          {[
            ['Staff ID', 'staffId'],
            ['Cohort ID', 'cohortId'],
          ].map(([label, name], idx) => (
            <div key={idx} className='basis-1/4 mb-5'>
              <Label label={label} />
              <Input
                name={name}
                type="text"
                pad='pl-2'
                w='w-50'
                value={formData[name]}
                onChange={handleChange}
                required={true}
              />
            </div>
          ))}


            <div className='basis-1/4 mb-5'>
            <Label label={"Department"}/>
          <Input
            type={"text"}
            pad='pl-2'
            w='w-60'
            value={formData.department}
            onChange={handleChange}
            name={"department"}
            required={true}
           /> 
            </div>



            <div className='basis-1/2 mb-2'>
            <Label label={"Passsword"}/>
         <div className="relative w-full">
         <Input
       type={showPassword? "text" :"password"}
       pad='pr-10'
       value={formData.password}
        onChange={handleChange}
        name="password"
        required={true}
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
          type={showPassword? "text" :"password"}
       pad='pr-10'
       value={formData.confirmPassword}
        onChange={handleChange}
       name="confirmPassword"
       required={true}
      />
    <button type="button"className="absolute right-8 top-3 text-gray-400" onClick={()=>{setShowPassword(!showPassword)}}>
    <i class="fa-regular fa-eye"></i>
    </button>
  </div>     
            </div>
        </div>
        <Attencam img={capturedImage} setImg={setCapturedImage} />
        <div className='text-center my-2'>
       
       <Button type={"submit"}>
        Register
        </Button>
        </div>
       
     </form>
   </Layout>)}
    
    </>
   
  )
}

export default SignUpPage