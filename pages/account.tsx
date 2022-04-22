import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '../public/assets/logo.svg'

const Account: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Account Settings - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`bg-[#141414]`}>
        <Link href="/" passHref>
          <Image
            src={logo}
            alt="logo type"
            width={120}
            height={120}
            className="object-contain cursor-pointer"
          />
        </Link>
      </header>
    </div>
  )
}

export default Account
