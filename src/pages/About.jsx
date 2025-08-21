import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '}  text2={'US'} />
      </div>

      <div className='my-10 flex flex-coll md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, perspiciatis! Placeat praesentium beatae culpa minus tempore repudiandae in quod enim, accusantium id, nemo ipsum perspiciatis iste, accusamus quis libero sapiente!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, consequuntur. Veritatis mollitia reprehenderit corporis consequatur perspiciatis inventore, dolores labore sapiente consequuntur, fugiat aperiam saepe, numquam odio perferendis porro iusto veniam.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p> necessitatibus minima magni incidunt quidem, officiis sit aperiam voluptatem tenetur aspernatur dicta iure voluptate quam quod animi minus nihil! Est aspernatur distinctio quibusdam dicta, voluptate minima atque.</p>
        </div>
        

      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY '} text2={'CHOSE US'} />

        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo neque pariatur nulla nihil repellat, doloribus vitae ratione molestias, debitis id ab expedita obcaecati recusandae? Optio inventore repellat eveniet magni aliquid?</p>

          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo neque pariatur nulla nihil repellat, doloribus vitae ratione molestias, debitis id ab expedita obcaecati recusandae? Optio inventore repellat eveniet magni aliquid?</p>

          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo neque pariatur nulla nihil repellat, doloribus vitae ratione molestias, debitis id ab expedita obcaecati recusandae? Optio inventore repellat eveniet magni aliquid?</p>

          </div>
          

        </div>
        <NewsletterBox/>
      
    </div>
  )
}

export default About
