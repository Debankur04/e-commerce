import React from 'react'
import { Trash2 } from 'lucide-react'

const CartPage = () => {
  return (
    <div>
        <div className='flex justify-evenly bg-orange-300 w-5/6 mx-44 py-4 my-4'>
            <div className='text-2xl font-bold'>Place Holder Cloth Names</div>
            <div className='text-xl'>299</div>
            <div className='flex justify-center gap-8'>
                <input type="number" id="quantity" name="quantity" className='border-2 border-black'/>
                <div className='flex justify-center gap-4'>
                    <div className='text-2xl'>299</div>
                    <div className='text-red-500'><Trash2 /></div>
                </div>
            </div>
        </div>
        <div className='flex justify-evenly bg-orange-300 w-5/6 mx-44 py-4 my-4'>
            <div className='text-2xl font-bold'>Place Holder Cloth Names</div>
            <div className='text-xl'>299</div>
            <div className='flex justify-center gap-8'>
                <input type="number" id="quantity" name="quantity" className='border-2 border-black'/>
                <div className='flex justify-center gap-4'>
                    <div className='text-2xl'>299</div>
                    <div className='text-red-500'><Trash2 /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage