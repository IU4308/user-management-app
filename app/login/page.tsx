import React from 'react'
import LoginForm from '../ui/login-form'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='container-fluid p-lg-5 my-auto'>
      <div className="container-fluid container-xl mx-auto p-lg-5 py-5 row ">
        
        <div className="col-md-6 order-md-2 ">
            <LoginForm />
        </div>
        <div className='col-md-6   d-flex py-5 d-flex flex-column align-items-center gap-3 '>
            <Image 
            src="/signin-image.jpg"
            alt='sign-in'
            width={290}
            height={350}
            className='mx-auto img-fluid'
            
            />
            <Link href={'/register'} className='link-secondary link-opacity-50-hover link-underline-opacity-50-hover'>Create an account</Link>
        </div>
      </div>
    </div>
  )
}

export default Page
