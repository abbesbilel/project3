import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center
    justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
      <p>it's time to get</p>
      <h1 className='uppercase font-semibold text-5xl sm:text-4xl
      md:text-5xl lg:text-6xl'>Swole<span className='text-blue-400'>normous</span></h1>
        </div>
      <p className='text-sm md:text-base font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='text-blue-400 font-meduim'>Aliquam eaque non facilis</span> ullam quam. Natus commodi, repellat deserunt quos tempora, nemo quod, ipsam nulla quibusdam modi molestias aperiam voluptas doloremque!</p>
        <Button func={() => {
          window.location.href = '#generate'
        }} text={"accept & Begin"}/>
    </div>
  )
}
