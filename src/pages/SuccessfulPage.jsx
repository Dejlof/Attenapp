import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const SuccessfulPage = () => {
  return (
    <Layout>
        <div>
        <h1 className='text-center text-3xl mb-5'>Attendance Marked 
        <br/>Successfully!</h1>
        </div>
        <div className='border-4 border-[#F0BD2D] px-7 py-6 rounded-full mb-8'>
        <i className="text-white fa-solid fa-check fa-4x bg-[#162D4C] rounded-full px-6 py-5"></i>
        </div>
       <Link to="/">
       <Button>
        Back
        </Button></Link>
    </Layout>
  )
}

export default SuccessfulPage
