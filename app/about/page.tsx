import React from 'react'
import Image from 'next/image'
import SocMedLinks from '../components/SocMedLinks'

const AboutPage = () => {
  return (
    <main className='w-full flex flex-col items-center justify-center'>
        
      <div className='flex justify-center items-start w-full gap-20'>
        {/* PROFILE PICTURE */}
        <div className='max-w-full'>
          <div className="avatar hover:scale-105 transition-all duration-200 active:scale-95">
            <div className="flex w-72 h-72 rounded-full object-cover">
              <Image 
                src="https://i.imgur.com/rMr9iBA.gif" 
                alt="Rence Simbaya profile picture"
                width={288}
                height={288}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
            
        <div className='w-auto flex flex-col'>
          <div className='w-auto'>
            <article className='prose w-auto'>
              {/* NAME */}
              <h1 style={{ marginBottom: '10px' }} className="text-6xl font-bold">Rence Simbaya</h1>
              {/* JOB TITLE */}
              <label className="text-m">Web Designer & Graphic Designer</label>
              {/* SOCIAL MEDIA LINKS */}
                <div className='py-6'>
                  <SocMedLinks />
                </div>
              {/* BIOGRAPHY */}
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
          <div className='flex flex-col py-12'>
            <article className='prose'>
             <h4 className="text-4xl font-medium font-bold">Work Experience</h4>
              {/* JOB TITLE */}
              <div className='flex flex-col gap-4'>
                {/* JOB 1 */}
                <div className='w-2xl flex flex-col gap-2 card bg-gradient-to-tl from-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition-all duration-200'>
                  <div className='flex flex-row gap-2 justify-between'>
                      <h5 className='text-3xl font-medium font-bold text-cyan-400'>
                        Donaide LLC
                      </h5>
                      <span className='text-m text-cyan-400 italic'>
                        August 2024 - April 2025
                      </span>
                  </div>
                  <label className='font-normal text-white italic' style={{ marginBottom: '-10px' }}>
                    Full Stack Developer & Graphic Designer
                  </label>
                   {/* BIOGRAPHY */}
                  <ul className='text-m'>
                    <li>Created branding assets for a client’s upcoming initiative.</li>
                    <li>Designed the user interface using CSS, Bootstrap, and wireframes built in Figma.</li>
                    <li>Designed and implemented multiple landing templates.</li>
                    <li>Implemented front-end designs</li>
                  </ul>  
                </div>
                
                {/* JOB 2 */}
                <div className='w-2xl flex flex-col gap-2 card bg-gradient-to-tl from-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition-all duration-200'>
                  <div className='flex flex-row gap-2 justify-between'>
                      <h5 className='text-3xl font-medium font-bold text-cyan-400'>
                        The Gaming VA
                      </h5>
                      <span className='text-m text-cyan-400 italic'>
                        June 2023 - November 2024
                      </span>
                  </div>
                  <label className='font-normal text-white italic' style={{ marginBottom: '-10px' }}>
                    Video Editor, Graphic Designer & Web Designer
                  </label>
                   {/* BIOGRAPHY */}
                  <ul className='text-m'>
                    <li>Created posters, advertisements, and promotional graphics using various design software.</li>
                    <li>Created assets for web essentials.</li>
                    <li>Designed the branding.</li>
                    <li>Created landing page.</li>
                  </ul>  
                </div>

                {/* JOB 3 */}
                <div className='w-2xl flex flex-col gap-2 card bg-gradient-to-tl from-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition-all duration-200'>
                  <div className='flex flex-row gap-2 justify-between'>
                      <h5 className='text-3xl font-medium font-bold text-cyan-400'>
                        Rapid Signal Electronics
                      </h5>
                      <span className='text-m text-cyan-400 italic'>
                        June 2023 - August 2023
                      </span>
                  </div>
                  <label className='font-normal text-white italic' style={{ marginBottom: '-10px' }}>
                    Web Developer Intern
                  </label>
                   {/* BIOGRAPHY */}
                  <ul className='text-m'>
                    <li>Developed interactive web features and supported backend development.</li>
                    <li>Designed and implemented new web pages and integrated multimedia assets.</li>
                    <li>Acquired hands-on experience using Blazor and ASP.NET frameworks.</li>
                  </ul>  
                </div>
                {/* JOB 4 */}
                {/* ADD MORE JOBS HERE */}
              </div>
            </article>
          </div>

          <div className='flex flex-col py-12'>
            <article className='prose'>
              <h4 className="text-4xl font-medium font-bold">Education</h4>
              <div className='flex flex-col gap-4'>
                {/* EDUCATION 1 */}
                <div className='w-2xl flex flex-col gap-2 card bg-gradient-to-tl from-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition-all duration-200'>
                    <h5 className='text-3xl font-medium font-bold'>
                      Notre Dame of Dadiangas University
                    </h5>
                    <span className='text-m text-cyan-400 italic'>
                      June 2023 - November 2024
                    </span>
                  <label className='font-normal text-white italic' style={{ marginBottom: '-10px' }}></label>
                </div>
              </div>
            </article>
          </div>

        </div>
        
      </div>
            
    </main>
  )
}

export default AboutPage