import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"
import Image from 'next/image'
import { MessageCircleCodeIcon } from 'lucide-react'
import DashHistory from './DashHistory'
import SideBarFooter from './SidebarFooter'


function AppSideBar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-5 flex items-center justify-center">
        <Image src={'/logo.png'} alt='Logo' width={180} height={0}/>
        <a href='/' className="text-black px-5 py-2 mt-3 text-sm gap-2 rounded-lg transition bg-white hover:text-white hover:bg-white/20 flex items-center"> <MessageCircleCodeIcon/>Create New Project</a>
      </SidebarHeader>
      <SidebarContent className="px-4 scrollbar-hide">
        <SidebarGroup >
          <DashHistory/>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SideBarFooter/>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSideBar