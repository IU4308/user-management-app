'use client'
import { EnvelopeIcon, ExclamationCircleIcon, LockClosedIcon } from '@heroicons/react/16/solid';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import ClipLoader from "react-spinners/ClipLoader";

const LoginForm = () => {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,  
    );

    return (
        <div className="container-fluid d-flex flex-column gap-2 py-5">
            <h1 className="py-3">Sign In</h1>
            
            <form action={formAction} className="row gap-4">
                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text border-0 border-bottom">
                        <EnvelopeIcon className='icon-1' />
                    </span>
                    <input type="email" className="form-control border-0 border-bottom rounded-0 p-3" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text border-0 border-bottom">
                        <LockClosedIcon className='bg-white icon-1' />
                    </span>
                    <input type="password" className="form-control border-0 border-bottom rounded-0 p-3 p-3" id="pwd" placeholder="Enter password" name="password" />
                </div>
                <input type="hidden" name="redirectTo" value={'/admin'} />
                <button aria-disabled={isPending} type="submit" className="btn  btn-primary p-3 d-flex gap-2 justify-content-center align-items-center">
                    <span>Log in</span>
                    {isPending && <ClipLoader color={'white'}/>}
                </button>
                <div className='d-flex gap-2 text-danger'>
                    {errorMessage && (
                        <>
                            <ExclamationCircleIcon className="icon-2" />
                            <p >{errorMessage}</p>
                        </>
                    )}
                </div>
            </form>
        </div>
    )
}

export default LoginForm