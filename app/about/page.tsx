import React from 'react'
import Image from 'next/image'
import SocMedLinks from '../components/SocMedLinks'

const AboutPage = () => {
  return (
    <main className='w-full flex flex-col items-center justify-center px-4 md:px-0'>
      <div className='flex flex-col md:flex-row justify-center items-start w-full gap-8 md:gap-20 max-w-6xl'>
        {/* PROFILE PICTURE */}
        <div className='flex justify-center md:block w-full md:w-auto mb-8 md:mb-0'>
          <div className="avatar hover:scale-105 transition-all duration-200 active:scale-95">
            <div className="flex w-72 h-72 md:w-72 md:h-72 rounded-full object-cover">
              <Image 
                src="https://i.imgur.com/rMr9iBA.gif" 
                alt="Rence Simbaya profile picture"
                width={288}
                height={288}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className='w-full md:w-auto flex flex-col'>
          <div className='w-full md:w-auto flex flex-col items-center justify-start md:justify-center'>
            <article className='prose w-full md:w-auto'>
              {/* NAME */}
              <h1 style={{ marginBottom: '10px' }} className="text-3xl md:text-6xl font-bold text-center lg:text-left">Rence Simbaya</h1>
              {/* JOB TITLE */}
              <div className='w-full sm:text-center md:text-left lg:text-m text-left'>
                <label>Web Designer & Graphic Designer</label>
              </div>
              {/* SOCIAL MEDIA LINKS */}
                <div className='py-4 sm:justify-center md:py-6 flex justify-left'>
                  <SocMedLinks />
                </div>
              {/* BIOGRAPHY */}
                <p className='text-base sm:text-justify md:text-m text-left '>
                  I&apos;m someone who takes pride in delivering quality work whether it&apos;s crafting clean,
                  functional websites or handling tasks with precision and care. With a background in both web
                  development and graphic design, I bring a blend of technical skill and creative thinking to every project.
                  I stay on top of deadlines, keep things organized, and focus on solutions that not only look good but work
                  seamlessly. You can count on me to be dependable, detail-oriented, and always ready to go the extra mile to
                  get things done right.
                </p>   
              </article>
          </div>
          <div className='flex flex-col py-8 md:py-12'>
            <article className='prose'>
             <h4 className="text-2xl sm:text-center md:text-left md:text-4xl font-medium  lg:text-left">Work Experience</h4>
              {/* JOB TITLE */}
              <div className='flex flex-col gap-4'>
                {/* JOB 1 */}
                <div className='w-full flex flex-col gap-2 card bg-gray-800 rounded-2xl p-4 md:p-8 shadow-lg hover:scale-105 transition-all duration-200'>
                  <div className='flex flex-col md:flex-row gap-2 justify-between'>
                      <h5 className='text-xl md:text-3xl font-bold text-primary'>
                        Donaide LLC
                      </h5>
                      <span className='text-base md:text-m text-primary italic'>
                        August 2024 - April 2025
                      </span>
                  </div>
                  <label className='font-normal text-white italic mb-2'>
                    Full Stack Developer & Graphic Designer
                  </label>
                   {/* BIOGRAPHY */}
                  <ul className='text-base md:text-m'>
                    <li>Created branding assets for a client&apos;s upcoming initiative.</li>
                    <li>Designed the user interface using CSS, Bootstrap, and wireframes built in Figma.</li>
                    <li>Designed and implemented multiple landing templates.</li>
                    <li>Implemented front-end designs</li>
                  </ul>  
                </div>
                {/* JOB 2 */}
                <div className='w-full flex flex-col gap-2 card bg-gray-800 rounded-2xl p-4 md:p-8 shadow-lg hover:scale-105 transition-all duration-200'>
                  <div className='flex flex-col md:flex-row gap-2 justify-between'>
                      <h5 className='text-xl md:text-3xl font-bold text-primary'>
                        The Gaming VA
                      </h5>
                      <span className='text-base md:text-m text-primary italic'>
                        June 2023 - November 2024
                      </span>
                  </div>
                  <label className='font-normal text-white italic mb-2'>
                    Video Editor, Graphic Designer & Web Designer
                  </label>
                   {/* BIOGRAPHY */}
                  <ul className='text-base md:text-m'>
                    <li>Created posters, advertisements, and promotional graphics using various design software.</li>
                    <li>Created assets for web essentials.</li>
                    <li>Designed the branding.</li>
                    <li>Created landing page.</li>
                  </ul>  
                </div>
                {/* JOB 3 */}
                <div className='w-full flex flex-col gap-2 card bg-gray-800 rounded-2xl p-4 md:p-8 shadow-lg hover:scale-105 transition-all duration-200'>
                  <div className='flex flex-col md:flex-row gap-2 justify-between'>
                      <h5 className='text-xl md:text-3xl font-bold text-primary'>
                        Rapid Signal Electronics
                      </h5>
                      <span className='text-base md:text-m text-primary italic'>
                        June 2023 - August 2023
                      </span>
                  </div>
                  <label className='font-normal text-white italic mb-2'>
                    Web Developer Intern
                  </label>
                   {/* BIOGRAPHY */}
                  <ul className='text-base md:text-m'>
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
          <div className='flex flex-col py-8 md:py-12'>
            <article className='prose'>
              <h4 className="text-2xl md:text-4xl md:font-medium font-bold">Education</h4>
              <div className='flex flex-col gap-4'>
                {/* EDUCATION 1 */}
                <div className='w-full flex flex-col gap-2 card bg-gray-800 rounded-2xl p-4 md:p-8 shadow-lg hover:scale-105 transition-all duration-200'>
                    <h5 className='text-xl md:text-3xl font-bold'>
                      Notre Dame of Dadiangas University
                    </h5>
                    <span className='text-base md:text-m text-primary italic'>
                      June 2023 - November 2024
                    </span>
                  <label className='font-normal text-white italic mb-2'></label>
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