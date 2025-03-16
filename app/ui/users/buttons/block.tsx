'use client';
import { Button } from '@/app/lib/definitions';
import { LockClosedIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'


const BlockButton = () => {
  const [type, setType] = useState<Button>('button')
  return (
    <button 
      className='btn border border-primary text-primary d-flex align-items-center gap-1'
      type={type} 
      onClick={() => {
        setType('submit')
      }}
    >
        <LockClosedIcon className="icon-1" />
        <span className="">Block</span>
        <input type="hidden" name='action' value='toBlocked' />
    </button>
  )
}

export default BlockButton
