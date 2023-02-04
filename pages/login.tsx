import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
      <Head>
          <title>Netflix</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt='loading...'
      />

      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

        <form className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0'>
            <h1>Sign up</h1>
            <div>
                <label className='inline-block w-full'>
                    <input className='input' type="email" placeholder='email'/>
                </label>
                <label className='inline-block w-full'>
                    <input className='input' type="password" placeholder='password'/>
                </label>
            </div>

            <button>Sign In</button>
        </form>
    </div>
  )
}

export default Login
