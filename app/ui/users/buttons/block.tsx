import { LockClosedIcon } from '@heroicons/react/16/solid'
import React from 'react'

const BlockButton = () => {
  return (
    <button className='btn border border-primary text-primary d-flex align-items-center gap-1'>
        <LockClosedIcon className="icon-1" />
        <span className="">Block</span>
    </button>
  )
}

export default BlockButton
