import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function Error(props) {

  const error = useRouteError();

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-red-600 text-xl'>
        Oppppsss, you've f*cked up bro!
      </h1>
      <h2 className='text-gray-500'>{error.message}</h2>
      <button className='bg-gray-200 rounded-sm px-2 py-1 hover:bg-gray-100' type='button'>
        <Link className='no-underline' to={-1}>Back</Link>
      </button>
      <img src="https://media.tenor.com/u0ebswgKTc0AAAAd/got-me.gif" alt="" />
    </div>
  )
}
