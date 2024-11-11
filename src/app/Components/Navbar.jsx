import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center p-5 '>
        <div className="flex w-1/6 bg-slate-700 text-white justify-around rounded">
            <p>Market Place</p>
            <p>Offers</p>
            <p>Cart</p>
            <p>Profile</p>
        </div>
    </div>
  )
}

export default Navbar