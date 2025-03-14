'use client'
import { EnvelopeIcon, LockClosedIcon as LockSolid, UserIcon } from '@heroicons/react/16/solid';
import { LockClosedIcon as LockOutline } from '@heroicons/react/24/outline';



const RegisterForm = () => {
    return (
        <div className="container-fluid d-flex flex-column gap-2 py-5">
            <h1 className="py-3">Sign Up</h1>
            <form action="/action_page.php" className="row gap-4">
                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text border-0 border-bottom">
                        <UserIcon className=' bg-white icon' />
                    </span>
                    <input type="email" className="form-control border-0 border-bottom rounded-0 p-3" id="name" placeholder="Your name" name="name" />
                </div>
                
                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text border-0 border-bottom">
                        <EnvelopeIcon className=' bg-white icon' />
                    </span>
                    <input type="email" className="form-control border-0 border-bottom rounded-0 p-3" id="email" placeholder="Your email" name="email" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text border-0 border-bottom">
                        <LockSolid className=' bg-white icon' />
                    </span>
                    <input type="password" className="form-control border-0 border-bottom rounded-0 p-3 p-3" id="pwd" placeholder="Password" name="pswd" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text border-0 border-bottom">
                        <LockOutline className=' bg-white icon' />
                    </span>
                    <input type="password" className="form-control border-0 border-bottom rounded-0 p-3 p-3" id="pwd" placeholder="Repeat your password" name="pswd" />
                </div>

                <button type="submit" className="btn  btn-primary p-3 ">Submit</button>
            </form>
        </div>
    )
}

export default RegisterForm
