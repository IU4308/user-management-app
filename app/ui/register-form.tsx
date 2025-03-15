'use client'
import { EnvelopeIcon, LockClosedIcon as LockSolid, UserIcon } from '@heroicons/react/16/solid';
import { LockClosedIcon as LockOutline } from '@heroicons/react/24/outline';
import { useActionState } from 'react';
import { createUser, UserState } from '../lib/actions';
import InputField from './input-field';

const RegisterForm = () => {
    const initialState: UserState = { message: null, errors: {}, formData: new FormData() };
    const [state, formAction] = useActionState(createUser, initialState);
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
                    errors={state.errors?.password}
                    icon={<LockOutline className=' bg-white icon-1' />}
                />
                {/* <div className="container">
                    <div className="input-group mb-3">
                        <span className="input-group-text border-0 border-bottom">
                            <LockOutline className=' bg-white icon-1' />
                        </span>
                        <input type="password" className="form-control border-0 border-bottom rounded-0 p-3 p-3" id="pwd" placeholder="Repeat your password" name="passwordConfirm" />
                    </div>
                    <div id="passwordConfirm-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.passwordConfirm && <p className="text-danger">{state.errors.passwordConfirm[0]}</p>}
                    </div>
                </div> */}
                <div id="create-error" aria-live="polite" aria-atomic="true">
                    {state.message &&

                    <p className="text-danger" key={state.message}>
                        {state.message}
                    </p>
                    }
                </div>

                <button type="submit" className="btn  btn-primary p-3 ">Sign Up</button>
            </form>
        </div>
    )
}

export default RegisterForm
