'use client';
import React from 'react'
import Image from 'next/image'
import SocMedLinks from '../components/SocMedLinks'
import useSound from '../components/useSound';

const cardHoverSound = 'https://d2rfm1awsiaf19.cloudfront.net/b8wx6w%2Ffile%2F4c2b753e4351058561347b3592978921_08a71d3441ba5e732ff88c7fcb3a156a.wav?response-content-disposition=inline%3Bfilename%3D%224c2b753e4351058561347b3592978921_08a71d3441ba5e732ff88c7fcb3a156a.wav%22%3B&response-content-type=audio%2Fx-wav&Expires=1751683552&Signature=X2It5z7zAKUfhgtDfj1EVt-vcOkkA1ciAkBi60lU~L0wSxOXbwlWSRgqpHFFtPJr0iYrkrXpPmA1WojXJzGNxVjYLFh6cpAI0HE8jJRBaoMBnAtq67zUakXCFDY7H8yYFVX8Vm9u8P4Ej9eBZu8PSwJeIFI5xQuRXNkP6LFiTCngjteoZB3p4HHOWsQH9063eQrEX~~CoVduKnHURfk-eNoigkdAW57SF6sCW0oB5U9xAkdLKhoWIAfW2jRU2jNTJCzXq442xJiQCa7vAgfGXTLP67u1a2kdN6aiJb23~xMY7CUfsJOvizlI4nGJpdyN3D982s6o3xdg5qbuaoV~tw__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ';

const AboutPage = () => {
  const playCardHover = useSound(cardHoverSound, 0.2);
  return (
    <main className="w-full max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Profile Picture */}
        <div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
          <div className="avatar hover:scale-105 transition-all duration-200 active:scale-95">
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden">
              <Image 
                src="https://i.imgur.com/rMr9iBA.gif" 
                alt="Rence Simbaya profile picture"
                width={256}
                height={256}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full">
          {/* Name and Title */}
          <div className="text-center lg:text-left mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Rence Simbaya</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4">Web Designer &amp; Graphic Designer</p>
            <div className="flex justify-center lg:justify-start">
              <SocMedLinks />
            </div>
          </div>

          {/* Biography */}
          <div className="mb-12">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I&apos;m someone who takes pride in delivering quality work whether it&apos;s crafting clean,
              functional websites or handling tasks with precision and care. With a background in both web
              development and graphic design, I bring a blend of technical skill and creative thinking to every project.
              I stay on top of deadlines, keep things organized, and focus on solutions that not only look good but work
              seamlessly. You can count on me to be dependable, detail-oriented, and always ready to go the extra mile to
              get things done right.
            </p>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center lg:text-left">Work Experience</h2>
        <div className="space-y-6">
          {/* JOB 1 */}
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:scale-105 transition-all duration-200" onMouseEnter={playCardHover}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <h3 className="text-xl md:text-2xl font-extrabold text-primary">
                Donaide LLC
              </h3>
              <span className="text-sm md:text-base text-blue-300 italic">
                August 2024 - April 2025
              </span>
            </div>
            <p className="text-white italic mb-4 text-base md:text-lg">
              Full Stack Developer &amp; Graphic Designer
            </p>
            <ul className="space-y-2 text-base md:text-lg text-gray-300">
              <li>• Created branding assets for a client&apos;s upcoming initiative.</li>
              <li>• Designed the user interface using CSS, Bootstrap, and wireframes built in Figma.</li>
              <li>• Designed and implemented multiple landing templates.</li>
              <li>• Implemented front-end designs</li>
            </ul>
          </div>

          {/* JOB 2 */}
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:scale-105 transition-all duration-200" onMouseEnter={playCardHover}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <h3 className="text-xl md:text-2xl font-extrabold text-primary">
                The Gaming VA
              </h3>
              <span className="text-sm md:text-base text-blue-300 italic">
                June 2023 - November 2024
              </span>
            </div>
            <p className="text-white italic mb-4 text-base md:text-lg">
              Video Editor, Graphic Designer &amp; Web Designer
            </p>
            <ul className="space-y-2 text-base md:text-lg text-gray-300">
              <li>• Created posters, advertisements, and promotional graphics using various design software.</li>
              <li>• Created assets for web essentials.</li>
              <li>• Designed the branding.</li>
              <li>• Created landing page.</li>
            </ul>
          </div>

          {/* JOB 3 */}
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:scale-105 transition-all duration-200" onMouseEnter={playCardHover}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <h3 className="text-xl md:text-2xl font-extrabold text-primary">
                Rapid Signal Electronics
              </h3>
              <span className="text-sm md:text-base text-blue-300 italic">
                June 2023 - August 2023
              </span>
            </div>
            <p className="text-white italic mb-4 text-base md:text-lg">
              Web Developer Intern
            </p>
            <ul className="space-y-2 text-base md:text-lg text-gray-300">
              <li>• Developed interactive web features and supported backend development.</li>
              <li>• Designed and implemented new web pages and integrated multimedia assets.</li>
              <li>• Acquired hands-on experience using Blazor and ASP.NET frameworks.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center lg:text-left">Education</h2>
        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg" onMouseEnter={playCardHover}>
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Notre Dame of Dadiangas University
          </h3>
          <p className="text-base md:text-lg text-primary italic">
            June 2019 - November 2024
          </p>
        </div>
      </section>
    </main>
  )
}

export default AboutPage