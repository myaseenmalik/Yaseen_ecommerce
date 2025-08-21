// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// function About() {
//   return (
//     <div>
//       <div className='text-2xl text-center pt-8 border-t'>
//         <Title text1={'ABOUT '}  text2={'US'} />
//       </div>

//       <div className='my-10 flex flex-coll md:flex-row gap-16'>
//         <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
//         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, perspiciatis! Placeat praesentium beatae culpa minus tempore repudiandae in quod enim, accusantium id, nemo ipsum perspiciatis iste, accusamus quis libero sapiente!</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, consequuntur. Veritatis mollitia reprehenderit corporis consequatur perspiciatis inventore, dolores labore sapiente consequuntur, fugiat aperiam saepe, numquam odio perferendis porro iusto veniam.</p>
//         <b className='text-gray-800'>Our Mission</b>
//         <p> necessitatibus minima magni incidunt quidem, officiis sit aperiam voluptatem tenetur aspernatur dicta iure voluptate quam quod animi minus nihil! Est aspernatur distinctio quibusdam dicta, voluptate minima atque.</p>
//         </div>
        

//       </div>
//       <div className='text-xl py-4'>
//           <Title text1={'WHY '} text2={'CHOSE US'} />

//         </div>
//         <div className='flex flex-col md:flex-row text-sm mb-20'>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Quality Assurance:</b>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo neque pariatur nulla nihil repellat, doloribus vitae ratione molestias, debitis id ab expedita obcaecati recusandae? Optio inventore repellat eveniet magni aliquid?</p>

//           </div>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Convenience</b>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo neque pariatur nulla nihil repellat, doloribus vitae ratione molestias, debitis id ab expedita obcaecati recusandae? Optio inventore repellat eveniet magni aliquid?</p>

//           </div>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Exceptional Customer Service:</b>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo neque pariatur nulla nihil repellat, doloribus vitae ratione molestias, debitis id ab expedita obcaecati recusandae? Optio inventore repellat eveniet magni aliquid?</p>

//           </div>
          

//         </div>
//         <NewsletterBox/>
      
//     </div>
//   )
// }

// export default About


import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

function About() {
  return (
    <div>
      {/* Heading */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT '} text2={'US'} />
      </div>

      {/* About Section */}
      <div className="my-10 flex flex-col md:flex-row gap-10 md:gap-16 px-4 md:px-10">
        <img
          className="w-full md:max-w-[450px] object-cover rounded-lg shadow-md"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
          <p>
            At YASEEN , we are passionate about delivering high-quality products that combine style, comfort, and functionality. Our team carefully curates every item to ensure it meets our standards of excellence and provides a seamless experience for our customers.
          </p>
          <p>
            With a focus on innovation and attention to detail, we aim to create products that not only look great but also enhance your everyday life. Our mission is to make shopping enjoyable, effortless, and inspiring for everyone.
          </p>
          <b className="text-gray-900 text-lg">Our Mission</b>
          <p>
            To provide exceptional products and services that exceed customer expectations, foster trust, and create lasting relationships. We strive to combine quality, style, and sustainability in everything we offer.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-xl text-center py-4">
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 text-sm mb-20 px-4 md:px-0">
        {[
          {
            title: 'Premium Quality',
            desc: 'Our products are crafted using the finest materials and meticulous attention to detail to ensure durability, comfort, and style. We never compromise on quality.',
          },
          {
            title: 'Customer Convenience',
            desc: 'We make shopping simple and hassle-free, offering easy navigation, secure payment options, and a seamless checkout experience for all our customers.',
          },
          {
            title: 'Reliable Support',
            desc: 'Our dedicated customer service team is always ready to assist you. From pre-purchase inquiries to post-purchase support, we ensure your satisfaction at every step.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="border px-6 sm:px-10 py-6 sm:py-10 flex flex-col gap-4 flex-1 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <b className="text-gray-900">{item.title}</b>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  );
}

export default About;
