import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useAuth from '../hooks/useAuth'

import member from '../public/assets/member.svg'

const Account: NextPage = () => {
  const { user, logout, loading } = useAuth()

  if (loading) return null

  return (
    <div className="">
      <Head>
        <title>Account Settings - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`bg-[#141414]`}>
        <Link href="/" passHref>
          <img
            src="/assets/logo.svg"
            width={100}
            height={100}
            alt="logo Type"
            className="object-contain cursor-pointer"
          />
        </Link>
        <Link href="/account" passHref>
          <img
            src="/assets/account.png"
            alt="account"
            className="rounded cursor-pointer"
          />
        </Link>
      </header>

      <main className="max-w-6xl px-5 pt-24 pb-12 mx-auto transition-all md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <Image src={member} alt="member since" className="h-7 w-7" />
            <p className="text-sm font-semibold text-[#555]">
              Member since 12 Apr 2022
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 px-4 py-4 mt-6 border gap-x-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0">
          <h4 className="text-lg text-[gray]">Plan Details</h4>
          <div className="col-span-2 font-medium"></div>
          <p className="text-blue-500 cursor-pointer md:text-rigth hover:underline">
            Change Plan
          </p>
        </div>

        <div className="grid grid-cols-1 px-4 py-4 mt-6 border gap-x-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
          <h4 className="text-lg text-[gray]">Settings</h4>
          <p
            className="col-span-3 text-blue-500 cursor-pointer hover:underline"
            onClick={logout}
          >
            Sign out of all devices
          </p>
        </div>
      </main>
    </div>
  )
}

export default Account
