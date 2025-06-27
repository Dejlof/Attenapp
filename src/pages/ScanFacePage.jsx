import React from 'react'
import Layout from '../components/Layout'
import Attencam from '../components/Attencam'
import Button from '../components/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import LoadingPage from '../components/LoadingPage'

const ScanFacePage = () => {
const [capturedImage, setCapturedImage] = React.useState(null);
const [isLoading, setIsLoading] = React.useState(false);
const [latitude, setLatitude] = React.useState(0);
const [longitude, setLongitude] = React.useState(0);
const location = useLocation();
const email = location.state?.email || 'your email';
const candidateId = location.state?.canId;
const apiUrl =  import.meta.env.VITE_API_URL;
const navigate = useNavigate();
const date = new Date();

const place = "Lagos";
const sessionName = "Session 1";

const getLocation = ()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    }, (error) => {
      console.error("Error getting location:", error);
      toast.error("Unable to retrieve location.");
    })
  }
  else{
    toast.error("Geolocation is not supported by this browser.");
  }
}

React.useEffect(() => {
  getLocation();
}, []);

const handleSubmit = async () => {

  if (!capturedImage) {
    toast.info("Please capture your face.");
    return;
  }
    setIsLoading(true);

  const getBase64String = (dataUrl) => {
    if (!dataUrl) return '';
    const parts = dataUrl.split(',');
    return parts.length > 1 ? parts[1] : dataUrl;
  };

 
  const payload = {
    faceData: getBase64String(capturedImage),
    userName: email,
    date:date,
    latitude: latitude,
    longitude: longitude,
    location: place,
    sessionName: sessionName,
  };
  console.log(payload)
  
  const token = localStorage.getItem('token');
  
 
  try {
    const res = await fetch(`${apiUrl}/attendance-records/${candidateId}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    });

   
    const contentType = res.headers.get("content-type");
    let responseBody;
    
    if (contentType?.includes("application/json")) {
      responseBody = await res.json();
    } else {
      responseBody = await res.text();
    }
    
    if (res.ok) {
      toast.success(
        typeof responseBody === "string" ? responseBody : responseBody.message
      );
      localStorage.removeItem("token");
      setCapturedImage(null);
      navigate("/");
    } else if (res.status === 400) {
      toast.error(
        typeof responseBody === "string" ? responseBody : responseBody.message
      );
    }   else if(res.status === 409) {
      toast.error("Attendance already submited.");
    }
    else if(res.status === 500) {
      toast.error("An error occurred. ");
    }
  }
  catch (err){
    console.error(err);
    toast.error("An error occurred. Please try again later.");
  }
  finally {
    setIsLoading(false);
  }
}


  return (
    <>
    {isLoading ? (<LoadingPage/>) : (<Layout>
        <div>
        <div className='p-6 rounded-2xl  bg-[#f8f9f9]'>
      <div className='p-6  rounded-2xl   bg-[#e0e6ea]'>
      <div className='p-6  rounded-2xl   bg-[#cad5dd]'>
            <Attencam  img={capturedImage} setImg={setCapturedImage} />
            </div>
            </div>
            </div>
        </div>
        <div className='my-10'>
        <Button onClick={handleSubmit}>
          Submit Attendance
        </Button>
        </div>
        
    </Layout>)}
    </>
    
  )
}

export default ScanFacePage
