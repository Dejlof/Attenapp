import React, {use, useCallback, useRef, useState} from 'react'
import Webcam from 'react-webcam';


const Attencam = ({img, setImg}) => {

  const webcamRef = useRef(null);

  const videoConstraints =
  {
    width: 250,
    height: 250,
    facingMode: "user",
  }
  const capture = useCallback(()=>{
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc)
  }, [webcamRef, setImg])
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
      {img === null ? (
        <>
          <Webcam
            audio={false}
            mirrored={true}
            height={250}
            width={250}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <button type="button" className='ml-15 px-4 py-2 my-3  text-[#F0BD2D] bg-[#01416EFF] rounded-2xl cursor-pointer' onClick={capture}>Capture photo</button>
        </>
      ) : (
        <>
          <img className="h-[250px] w-[250px] object-cover rounded-2xl" src={img} alt="screenshot" />
          <button type="button" className='ml-20 px-4 py-2 my-3  text-[#F0BD2D] bg-[#01416EFF] rounded-2xl cursor-pointer'  onClick={() => setImg(null)}>Retake</button>
        </>
      )}
  </div>
    </div>
  )
}

export default Attencam
