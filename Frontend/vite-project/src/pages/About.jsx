import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>For was born out of a passion for innovation and a desire to revolutionize the way people shop online.Our jouney began with a simple idea:to provide a platfrom where customer can easily discover,explore,and purchese a wide range of products from the comfort of their homes.</p>
        <p>Since our inception,we've worked tirelessly to curate a diverse selection of high-quality product that cater to every taste and preferenc.From fashion and beauty to elctronic and home essentials.we offer an extensive collection sourced from trusted brands and supplers</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission at Forever is to empower customers with choice,convenience,and confidence.We've dedicted to providing a seamless shopping expreice,and expections,from browing and ordering to delivery and beyond</p>

        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously seletct and vet each product to ensure to ensure it meets our stringent quality standards.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We meticulously seletct and vet each product to ensure to ensure it meets our stringent quality standards.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Services:</b>
          <p className='text-gray-600'>We meticulously seletct and vet each product to ensure to ensure it meets our stringent quality standards.</p>

        </div>

      </div>
      <NewsletterBox />
    </div>
  )
}

export default About