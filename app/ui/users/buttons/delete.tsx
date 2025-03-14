import { TrashIcon } from '@heroicons/react/16/solid'
import React from 'react'

const DeleteButton = () => {
  return (
    <button className='btn border border-danger text-danger d-flex align-items-center gap-1'>
        <TrashIcon className="icon" />
    </button>
  )
}

export default DeleteButton