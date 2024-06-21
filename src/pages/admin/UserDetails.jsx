import React, { useEffect } from 'react'
import { Form, useActionData, useFetcher, useLoaderData, useLocation } from 'react-router-dom'

export default function UserDetails(props) {

  const loaderData = useLoaderData();

  const location = useLocation();

  const fetcher = useFetcher();

  console.log('fetcher.state', fetcher.state);
  console.log('fetcher.formData', Object.fromEntries(fetcher.formData || new FormData()));
  console.log('fetcher.formAction', fetcher.formAction);
  console.log('fetcher.formMethod', fetcher.formMethod);
  console.log('fetcher.data', fetcher.data);
  console.log('fetcher.formEncType', fetcher.formEncType);

  useEffect(() => {
    setTimeout(() => {
      // fetcher.load('/admin/manage/user/1');
      fetcher.load(location.pathname);

      fetcher.submit({hey: 'youuuuu'}, {
        method: 'post',
        action: location.pathname,
      })
    }, 2000);
  }, [])

  const actionData = useActionData();

  // console.log({loaderData});
  // console.log({actionData});

  return (
    <div>UserDetails

      <fetcher.Form action='/admin/manage/user/1' method='post'>
        <input type="text" name="email" className='m-5 bg-light-900' />

        {actionData?.errors && (<span className='text-red-400'>{actionData.errors}</span>)}

      </fetcher.Form>


    </div>
  )
}
