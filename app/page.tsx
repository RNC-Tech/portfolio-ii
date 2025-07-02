import Link from 'next/link'

const page = () => {
  return (
    <div className='flex justify-center items-start min-h-screen px-2 sm:px-4'>
      <div className='card lg:min-w-250 bg-gradient-to-tl from-gray-900 to-gray-800 shadow-xl flex flex-col md:flex-row items-center md:items-start justify-start max-w-4xl h-fit px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-16 md:py-24 rounded-2xl'>
        <div className='w-full md:w-1/2 flex justify-center mb-8 md:mb-0 md:mr-8'>
          <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDBvMjN0ZHpjd2V5NmhoYTM2aWphdXNnZXh0ZGI4MmQ4cDlsZTc4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/935gCxva4XOcgtBbdO/giphy.gif" alt="Visuals with Purpose" className='w-64 h-64 sm:w-80 sm:h-80 object-contain rounded-lg animate-bounce ' />
        </div>
        <div className='w-full md:w-fit flex justify-center'>
          <article className='prose prose-invert max-w-none'>
              <h1 style={{ marginBottom: '-10px' }}>Visuals with Purpose</h1>
              <p>I&apos;m a visual storyteller with a sharp eye for composition,
                color, and motion. With experience across tools like Photoshop,
                Illustrator, After Effects, and Canva, I craft visuals
                that don&apos;t just look good—they communicate. Whether it&apos;s
                designing standout social posts, sleek UI assets, or cinematic
                edits, I focus on clarity, emotion, and purpose. I approach each
                project with intention, blending design principles with instinct
                to create visuals that resonate.
              </p>
              <Link href='/about'>
                <button className='btn btn-primary rounded-full px-8 py-4 mt-4 w-full sm:w-auto hover:scale-105 transition-all duration-200 active:scale-100'>
                  Learn more about RNC
                </button>
              </Link>
            </article>
        </div>
      </div>
    </div>
  )
}

export default page