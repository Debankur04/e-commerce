"use client"
import React, {useState} from 'react'
import Image from 'next/image'

const Product = () => {

  const [order_number, setorder_number] = useState(0)

  

  return (
    <div className='h-92 w-40 p-1 bg-slate-500 rounded-lg' >
        <Image
      src="/ChrisCrossPlainNavyBlueT-Shirt.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
      className='my-2 h-1/2 rounded'
        />
        <div className='bg-slate-500'>
            <div className='text-l font-extrabold py-2'>Plain Navy Blue T-Shirt</div>
            <div className='flex justify-between py-1'>
                <div className='text-green-200'>RS 350</div>
                <div className='text-slate-700 line-through'>RS 500</div>
            </div>
            <div className='py-1 text-white'>Items Ordered: {order_number}</div>
            <button className='w-full flex gap-4 justify-center bg-green-500 hover:bg-green-700 ease-in duration-300 py-1 rounded-lg' onClick={()=>setorder_number(order_number + 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                <div >BUY</div>
            </button>
        </div>
    </div>
  )
}

export default Product  