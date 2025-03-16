'use client'
import { EnvelopeIcon, LockClosedIcon as LockSolid, UserIcon } from '@heroicons/react/16/solid';
import { LockClosedIcon as LockOutline } from '@heroicons/react/24/outline';
import { useActionState } from 'react';
import { createUser, UserState } from '../lib/actions';
import InputField from './input-field';
import { ClipLoader } from 'react-spinners';

const RegisterForm = () => {
    const initialState: UserState = { message: null, errors: {}, formData: new FormData() };
    const [state, formAction, isPending] = useActionState(createUser, initialState);
    const name = state.formData.get('name');
    const email = state.formData.get('email');
    return (
        <div className="container-fluid d-flex flex-column gap-2 py-5">
            <h1 className="py-3">Sign Up</h1>
            <form action={formAction} className="row gap-4">
                <InputField 
                    type='text'
                    name='name'
                    value={name}
                    placeholder="Your name"
                    errors={state.errors?.name}
                    icon={<UserIcon className=' bg-white icon-1' />}
                />
                <InputField 
                    value={email}
                    type='email'
                    name='email'
                    placeholder="Your email"
                    errors={state.errors?.email}
                    icon={<EnvelopeIcon className=' bg-white icon-1' />}
                />
                <InputField 
                    value={null}
                    type='password'
                    name='password'
                    placeholder="Password"
                    errors={state.errors?.password}
                    icon={<LockSolid className=' bg-white icon-1' />}
                />
                <InputField 
                    value={null}
                    type='password'
                    name='passwordConfirm'
                    placeholder="Repeat your password"
                    errors={state.errors?.passwordConfirm}
                    icon={<LockOutline className=' bg-white icon-1' />}
                />
                <div id="create-error" aria-live="polite" aria-atomic="true">
                    {state.message &&

                    <p className="text-danger" key={state.message}>
                        {state.message}
                    </p>
                    }
                </div>

                <button type="submit" className="btn  btn-primary p-3 d-flex gap-2 justify-content-center align-items-center">
                    <span>Register</span>
                    {isPending && <ClipLoader color={'white'}/>}
                </button>
            </form>
        </div>
    )
}

export default RegisterForm
