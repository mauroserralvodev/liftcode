"use client"
import { UserDetailContext } from '@/context/UserDetailContext'
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { useSidebar } from '../sidebar';

function DashHistory() {
  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  const convex=useConvex();
  const [dashList,setDashList]=useState();
  const {toggleSidebar}=useSidebar();

  useEffect(()=>{
    userDetail&&GetAllDash();
  },[userDetail])

  const GetAllDash=async()=>{
    const result=await convex.query(api.dash.GetAllDash,{
      userId:userDetail?._id
    });
    
    // Ordenar por fecha de creación (más recientes primero)
    const sortedResults = result.sort((a, b) => 
      new Date(b._creationTime) - new Date(a._creationTime)
    );
    
    setDashList(sortedResults);
    console.log(sortedResults);
  }
  
  return (
    <div>
      <h2 className='font-medium text-lg'>Previous Chats</h2>
      <hr className='border-white/20 mt-2'/>
      <div>
        {dashList&&dashList.map((dash,index)=>(
          <Link key={index} href={'/dash/'+ dash?._id}>
            <h2 onClick={toggleSidebar} className='text-white p-2 hover:bg-white/20 mt-2 rounded-lg cursor-pointer transition'>
              {dash?.messages[0]?.content}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DashHistory