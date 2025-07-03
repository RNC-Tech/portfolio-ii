import React from 'react'
import Image from 'next/image'
import SocMedLinks from '../components/SocMedLinks'

const AboutPage = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 md:gap-20">
        {/* Profile Picture */}
        <div className="flex justify-center md:block w-full md:w-auto mb-8 md:mb-0">
          <div className="avatar hover:scale-105 transition-all duration-200 active:scale-95">
            <div className="flex w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover">
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
        {/* Main Content */}
        <div className="w-full md:w-auto flex flex-col">
          <div className="w-full flex flex-col items-center md:items-start">
            <article className="prose w-full flex flex-col md:block">
              {/* NAME */}
              <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left" style={{ marginBottom: '10px' }}>Rence Simbaya</h1>
              {/* JOB TITLE, SOCIAL LINKS, BIOGRAPHY - move after title on mobile */}
              <div className="flex flex-col gap-2 order-2 md:order-none">
                <div className="w-full text-center md:text-left">
                  <label>Web Designer &amp; Graphic Designer</label>
                </div>
                <div className="py-4 flex justify-center md:justify-start">
                  <SocMedLinks />
                </div>
                <p className="text-base text-center md:text-left">
                  I&apos;m someone who takes pride in delivering quality work whether it&apos;s crafting clean,
                  functional websites or handling tasks with precision and care. With a background in both web
                  development and graphic design, I bring a blend of technical skill and creative thinking to every project.
                  I stay on top of deadlines, keep things organized, and focus on solutions that not only look good but work
                  seamlessly. You can count on me to be dependable, detail-oriented, and always ready to go the extra mile to
                  get things done right.
                </p>
              </div>
            </article>
          </div>
          {/* Work Experience */}
          <div className="flex flex-col py-8 md:py-12">
            <article className="prose">
              <h4 className="text-2xl md:text-4xl font-bold text-center md:text-left">Work Experience</h4>
              <div className="flex flex-col gap-4">
                {/* JOB 1 */}
                <div className="w-full flex flex-col gap-2 card bg-gray-800 rounded-2xl p-4 md:p-8 shadow-lg hover:scale-105 transition-all duration-200">
                  <div className="flex flex-col md:flex-row gap-2 justify-between">
                    <h5 className="text-xl font-bold text-primary text-center md:text-left md:text-3xl">
                      Donaide LLC
                    </h5>
                    <span className="text-base md:text-m text-primary italic text-center md:text-left">
                      August 2024 - April 2025
                    </span>
                  </div>
                  <label className="font-normal text-white italic mb-2 text-center md:text-left">
                    Full Stack Developer &amp; Graphic Designer
                  </label>
                  <ul className="text-base text-left md:text-m md:text-left">
                    <li>Created branding assets for a client&apos;s upcoming initiative.</li>
                    <li>Designed the user interface using CSS, Bootstrap, and wireframes built in Figma.</li>
                    <li>Designed and implemented multiple landing templates.</li>
                    <li>Implemented front-end designs</li>
                  </ul>
                </div>
                {/* JOB 2 */}
                <div className="w-full flex flex-col gap-2 card bg-gray-800 rounded-2xl p-4 md:p-8 shadow-lg hover:scale-105 transition-all duration-200">
                  <div className="flex flex-col md:flex-row gap-2 justify-between">
                    <h5 className="text-xl md:text-3xl font-bold text-primary text-center md:text-left">
                      The Gaming VA
                    </h5>
                    <span className="text-base md:text-m text-primary italic text-center md:text-left">
                      June 2023 - November 2024
                    </span>
                  </div>
                  <label className="font-normal text-white italic mb-2 text-center md:text-left">
                    Video Editor, Graphic Designer &amp; Web Designer
                  </label>
                  <ul className="text-base md:text-m text-left md:text-left">
                    <li>Created posters, advertisements, and promotional graphics using various design software.</li>
                    <li>Created assets for web essentials.</li>
                    <li>Designed the branding.</li>
                    <li>Created landing page.</li>
                  </ul>
                </div>
                {/* JOB 3 */}
                <div className="w-full flex flex-col gap-2 card bg-gray-800 rounded-2xl p-4 md:p-8 shadow-lg hover:scale-105 transition-all duration-200">
                  <div className="flex flex-col md:flex-row gap-2 justify-between">
                    <h5 className="text-xl md:text-3xl font-bold text-primary text-center md:text-left">
                      Rapid Signal Electronics
                    </h5>
                    <span className="text-base md:text-m text-primary italic text-center md:text-left">
                      June 2023 - August 2023
                    </span>
                  </div>
                  <label className="font-normal text-white italic mb-2 text-center md:text-left">
                    Web Developer Intern
                  </label>
                  <ul className="text-base md:text-m text-left md:text-left">
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
          {/* Education */}
          <div className="flex flex-col py-8 md:py-12">
            <article className="prose">
              <h4 className="text-2xl md:text-4xl font-bold text-center md:text-left">Education</h4>
              <div className="flex flex-col gap-4">
                {/* EDUCATION 1 */}
                <div className="w-full flex flex-col gap-2 card bg-gray-800 rounded-2xl p-4 md:p-8 shadow-lg hover:scale-105 transition-all duration-200">
                  <h5 className="text-xl md:text-3xl font-bold text-center md:text-left">
                    Notre Dame of Dadiangas University
                  </h5>
                  <span className="text-base md:text-m text-primary italic text-center md:text-left">
                    June 2023 - November 2024
                  </span>
                  <label className="font-normal text-white italic mb-2 text-center md:text-left"></label>
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