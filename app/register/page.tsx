import React from 'react'
import Image from 'next/image'
import RegisterForm from '../ui/register-form'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='container-fluid  px-lg-5 my-auto'>
      <div className="container-fluid container-xl row d-flex justify-content-center mx-auto ">
        
        <div className="col-lg-5 ">
            <RegisterForm />
        </div>
        <div className='col-lg-5  d-flex py-5 d-flex flex-column justify-content-center align-items-center gap-3 '>
            <Image 
            src="/signup-image.jpg"
            alt='sign-in'
            width={290}
            height={350}
            className='mx-auto img-fluid'
            
            />
            <Link href={'/login'} className='link-secondary link-opacity-50-hover link-underline-opacity-50-hover'>I am already member</Link>
        </div>
      </div>
    </div>
  )
}

export default Page
