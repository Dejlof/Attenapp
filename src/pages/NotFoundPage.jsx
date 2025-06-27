import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import ErrorPage from '../assets/images/error-page.jpg'

const NotFoundPage = () => {
  return (
    <>
    <Layout>
    <h3 class="text-2xl text-[#022D63] font-bold md:text-4xl ">Oops page not found</h3>
    <img src={ErrorPage} className=' w-40 h-40 md:w-80 md:h-80' alt="" />
    <div class="text-[#022D63] md:text-xl text-sm text-center mt-2 mb-5">
        <p>Sorry about that!</p>
        <p>Please visit our homepage to get where you need to go.</p>
    </div>
    <Link to={"/"}>
    <Button>
        Back to Home
    </Button>
    </Link>
    </Layout>
    </>
  )
}

export default NotFoundPage
