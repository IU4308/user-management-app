import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/16/solid'
import React from 'react'

const UnblockButton = () => {
  return (
    <button className='btn border border-primary text-primary d-flex align-items-center gap-1'>
        <LockOpenIcon className="icon" />
    </button>
  )
}

export default UnblockButton