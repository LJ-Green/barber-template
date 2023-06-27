import React from 'react'
import ServiceImgOne from './../assets/Haircut image.jpg'
import ServiceImgTwo from './../assets/Styling & Grooming.jpg'
import ServiceImgThree from './../assets/blowdry.jpg'

const Services = () => {
  return (
    <div id='services'>
      <h1 className='text-center text-[40px] my-10 font-bold'
      >Our Services</h1>
      <div className='md:flex md:justify-center'>
        <div className='flex flex-col items-center mb-10 mx-8'>
          <img className='w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] object-cover rounded-xl'
          src={ServiceImgOne} alt='Service' />
          <h3 className='text-[32px] font-bold my-8'
          >Haircuts:</h3>
          <div className='flex space-x-10 xl:text-[20px]'>
            <div className='space-y-4'>
              <p>Classic Haircut:</p>
              <p>Beard Trim and Shape:</p>
              <p>Buzz Cut:</p>
              <p>Fade and Taper:</p>
              <p>Clipper Cut:</p>
              <p>Crew Cut:</p>
            </div>
            <div className='space-y-4 font-bold'>
              <p>£25</p>
              <p>£15</p>
              <p>£20</p>
              <p>£30</p>
              <p>£18</p>
              <p>£22</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center mb-10 mx-8'>
          <img className='w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] object-cover rounded-xl'
          src={ServiceImgTwo} alt='Service' />
          <h3 className='text-[32px] font-bold my-8'
          >Shaving and Grooming:</h3>
          <div className='flex space-x-10 xl:text-[20px]'>
            <div className='space-y-4'>
              <p>Hot Towel Shave:</p>
              <p>Beard Sculpting:</p>
              <p>Head Shave:</p>
              <p>Neck Shave:</p>
              <p>Luxury Shave Experience:</p>
            </div>
            <div className='space-y-4 font-bold'>
              <p>£30</p>
              <p>£15</p>
              <p>£25</p>
              <p>£10</p>
              <p>£40</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center mb-10 mx-8'>
          <img className='w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] object-cover rounded-xl'
          src={ServiceImgThree} alt='Service' />
          <h3 className='text-[32px] font-bold my-8'
          >Specialised Services:</h3>
          <div className='flex space-x-10 xl:text-[20px]'>
            <div className='space-y-4'>
              <p>Styling and Blow Dry:</p>
              <p>Hair Colouring:</p>
              <p>Hair and Scalp Treatment:</p>
              <p>Pattern Design:</p>
              <p>Senior Haircut (60+):</p>
            </div>
            <div className='space-y-4 font-bold'>
              <p>£25</p>
              <p>£40</p>
              <p>£30</p>
              <p>£35</p>
              <p>£10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
