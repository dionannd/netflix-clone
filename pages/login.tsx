import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

interface Props {
  email: string
  password: string
}

const Login: NextPage<Props> = ({ email, password }) => {
  const [login, setLogin] = React.useState<boolean>(false)

  return (
    <div className="relative flex flex-col w-screen h-screen bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src="https://rb.gy/p2hphi" alt="Login" />
      <h1>Login page</h1>
    </div>
  )
}

export default Login
