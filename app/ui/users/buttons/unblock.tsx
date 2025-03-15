import { LockOpenIcon } from '@heroicons/react/16/solid'
import React from 'react'

const UnblockButton = () => {
  return (
    <button className='btn border border-primary text-primary d-flex align-items-center gap-1'>
        <LockOpenIcon className="icon-1" />
    </button>
  )
}

export default UnblockButton