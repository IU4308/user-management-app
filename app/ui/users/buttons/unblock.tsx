import { Button } from '@/app/lib/definitions'
import { LockOpenIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'

const UnblockButton = () => {
  const [type, setType] = useState<Button>('button')
  return (
    <button 
      className='btn border border-primary text-primary d-flex align-items-center gap-1'
      type={type} 
      onClick={() => {
        setType('submit')
      }}
    >
        <LockOpenIcon className="icon-1" />
        <input type="hidden" name='action' value='toUnblocked' />
    </button>
  )
}

export default UnblockButton