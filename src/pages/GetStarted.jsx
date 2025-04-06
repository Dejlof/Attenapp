import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <Layout>
      <div className='p-6 rounded-full bg-[#f8f9f9]'>
      <div className='p-6 rounded-full bg-[#e0e6ea]'>
      <div className='p-6 rounded-full bg-[#cad5dd]'>
    <i class="fa-solid fa-4x fa-users-viewfinder rounded-full p-12 text-[white] bg-[#003B65]"></i>
    </div>
      </div>
      </div>
      <div className='text-center pt-4 pb-15'>
        <h2 className='text-3xl pb-2'>Face Recognition</h2>
        <p>Scan your face to mark your attendance</p>
      </div>
      <Link to="/scanface">
      <Button>
        Get Started
      </Button>
      </Link>
    </Layout>
  
  )
}

export default GetStarted
