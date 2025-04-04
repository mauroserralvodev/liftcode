import { HelpCircle, LogOut, Settings, Wallet } from 'lucide-react'
import React from 'react'
import { Button } from '../button'
import { useRouter } from 'next/navigation'

function SideBarFooter() {
    const router=useRouter();
    const options=[
        // {
        //     name:'Settings',
        //     icon:Settings
        // },
        {
            name:'My Subscription',
            icon:Wallet,
            path:'/pricing'
        },
        {
            name:'Help Center',
            icon:HelpCircle,
            path:'https://support.brinpage.com/'
        },
        {
            name:'Sign Out',
            icon:LogOut,
            path:'/'
        }
    ]

    const onOptionClick=(option)=>{
        router.push(option.path)
    }
  return (
    <div className='p-2 mb-10'>
        {options.map((option,index)=>(
            <Button variant="ghost" 
            onClick={()=>onOptionClick(option)}
            className="w-full flex justify-start my-3" key={index}>
                <option.icon/>
                {option.name}
            </Button>
        ))}
    </div>
  )
}

export default SideBarFooter