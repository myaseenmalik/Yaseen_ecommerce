import React from 'react'
import { assets } from '../assets/assets'

{/* fotter components*/}

function Footer() {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className=' mb-5 w-32  ' alt="" />
            <p className='w-full md:w2/3 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia possimus dolorum nulla illum enim, corporis earum adipisci ex deleniti beatae, reiciendis cupiditate ea? Mollitia saepe cum suscipit voluptates, officia aperiam.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPNY</p>
            <ul className='flex flex-col text-gray-600'>
                <li>Home</li>
                <li>About US</li>
                <li>Dilivary</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul  className='flex flex-col text-gray-600'>
                <li>+1 212-654-7878</li>
                <li>myaseenmalik4@gmail.com</li>

            </ul>
        </div>

        

      </div>
      <div>
            <hr />
            <p className='py-5 text-sm text-center'>copyright 2024@ yaseen.com -All Right Reseverd</p>
        </div>
    </div>
  )
}

export default Footer
