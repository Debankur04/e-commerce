import React from 'react'
import { Store,TicketPercent,ShoppingCart,UserRound } from 'lucide-react';
import Link from 'next/link'

const Navbar = (props) => {
  return (
    <div className='w-full flex justify-center p-5 '>
        <div className="flex w-1/6 bg-slate-700 text-white justify-around rounded p-2">
            <Link href= "/">
              <p><Store /></p>
              </Link>
            <Link href= "/Offers">
              <p><TicketPercent /></p>
            </Link>
            <Link href= "/Cart" className='flex'>
              <p><ShoppingCart /></p>
              <p className='text-white h-4 w-4 bg-green-500 rounded-3xl text-sm flex justify-center items-center p-0.5'>{props.number}</p>
            </Link>
            <Link href= "/Profile">
              <p><UserRound /></p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar