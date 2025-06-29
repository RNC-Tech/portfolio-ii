import React from 'react'
import Image from 'next/image'
import SocMedLinks from '../components/SocMedLinks'

const AboutPage = () => {
  return (
    <main className='w-full flex flex-col items-center justify-center'>
        
      <div className='flex justify-between items-start gap-20'>
            
        <div className='max-w-full'>
          <div className="avatar">
            <div className="flex w-72 h-72 rounded-full object-cover">
              <Image 
                src="https://imgur.com/a/WpJBeBi" 
                alt="Rence Simbaya profile picture"
                width={288}
                height={288}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
            
        <div className='max-w-full flex flex-col gap'>
          <article className='prose'>
            <h1 style={{ marginBottom: '10px' }} className="text-6xl font-bold">Rence Simbaya</h1>
            <label className="text-m">Web Designer & Graphic Designer</label>
          
            <div className='py-6'>
              <SocMedLinks />
            </div>

            <p className='text-m'>
              I&apos;m someone who takes pride in delivering quality work whether it&apos;s crafting clean,
              functional websites or handling tasks with precision and care. With a background in both web
              development and graphic design, I bring a blend of technical skill and creative thinking to every project.
              I stay on top of deadlines, keep things organized, and focus on solutions that not only look good but work
              seamlessly. You can count on me to be dependable, detail-oriented, and always ready to go the extra mile to
              get things done right.
            </p>   
          </article>
        </div>
        
      </div>
            
    </main>
  )
}

export default AboutPage