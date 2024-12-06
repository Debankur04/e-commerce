import React from 'react'
import { Store,TicketPercent,ShoppingCart,UserRound } from 'lucide-react';
const Navbar = () => {
  return (
    <div className='w-full flex justify-center p-5 '>
        <div className="flex w-1/6 bg-slate-700 text-white justify-around rounded p-2">
            <p><Store /></p>
            <p><TicketPercent /></p>
            <p><ShoppingCart /></p>
            <p><UserRound /></p>
        </div>
    </div>
  )
}

export default Navbar