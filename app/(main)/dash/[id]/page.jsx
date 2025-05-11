"use client"
import ChatView from '@/components/ui/custom/ChatView'
import CodeView from '@/components/ui/custom/CodeView'
import AppSideBar from '@/components/ui/custom/AppSidebar';
import { SidebarProvider, useSidebar } from '@/components/ui/sidebar';
import React, { useContext, useState } from 'react'
import { UserDetailContext } from '@/context/UserDetailContext';
import Image from 'next/image';

// Componente que contiene la lógica principal
function DashContent() {
  const { userDetail } = useContext(UserDetailContext)
  const { toggleSidebar } = useSidebar() // Ahora está dentro del provider
  const [showBetaWarning, setShowBetaWarning] = useState(true)

  return (
    <>
    {showBetaWarning && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-neutral-800/70 border border-white/20 p-8 rounded-lg max-w-md mx-4 ">
            <h2 className="text-2xl font-medium mb-4">Beta version</h2>
            <div className="mb-4 text-neutral-400">
              This application is in beta phase and can:
              <ul className="list-disc pl-5 mt-2">
                <li>Contain unexpected errors</li>
                <li>Not working properly</li>
                <li>No response from the server</li>
              </ul>
            </div>
            <button 
              onClick={() => setShowBetaWarning(false)}
              className="bg-white/80 text-black hover:text-white hover:bg-blue-600 px-4 py-1 mt-2 rounded-lg w-full transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}
      <AppSideBar/>
      <div className="fixed right-0 top-0 h-full w-12 bg-neutral-900 backdrop-blur-sm border-l border-white/10 z-30">
        <div className="h-full flex flex-col items-center justify-end pb-4">
          <div className="cursor-pointer p-2 hover:bg-white/10 rounded-full transition-colors">
          {userDetail&&<Image 
              src={userDetail?.picture} 
              alt='User Image'
              width={35} 
              height={35} 
              className='rounded-full self-start'
              onClick={toggleSidebar}
            />}
          </div>
        </div>
      </div>
      
      <div className='p-14'>
        <div className="absolute inset-0 z-0">
          {/* ... (contenido del banner) ... */}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 pr-10'>
          <div className='col-span-2 rounded-lg'>
            <CodeView/>
          </div>
          <ChatView/>
        </div>
      </div>
    </>
  )
}

// Componente wrapper que provee el contexto
function Dash() {
  return (
    <SidebarProvider defaultOpen={false}>
      <DashContent/>
    </SidebarProvider>
  )
}

export default Dash