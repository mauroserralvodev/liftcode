"use client"
import PricingModel from '@/components/ui/custom/PricingModel'
import AppSideBar from '@/components/ui/custom/AppSidebar';
import { SidebarProvider, useSidebar } from '@/components/ui/sidebar'
import { UserDetailContext } from '@/context/UserDetailContext'
import Lookup from '@/data/Lookup'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

function Pricing() {
    const {userDetail,setUserDetail}=useContext(UserDetailContext)
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSideBar/>
        <div className='mt-20 flex flex-col items-center w-full px-10'>
            <h2 className='font-bold text-3xl'>Manage your credits</h2>
            <p className='text-neutral-400 max-w-2xl text-center mt-4'>{Lookup.PRICING_DESC}</p>
            <div className='mt-8 p-8 border border-white/20 hover:border-white/50 bg-neutral-900/20 transition rounded-full w-full max-w-6xl flex justify-between items-center'>
                <h2 className='text-xl'><span className='sm:font-extrabold font-medium text-[#0071E3] select-none'>{userDetail?.token}</span> Credits left</h2>
                <div className=''>
                    <h2 className='sm:font-bold font-medium'>Need more credits?</h2>
                    <p>Find the best pack for your needs.</p>
                </div>
            </div>
            <PricingModel/>
        </div>
    </SidebarProvider>
  )
}

export default Pricing