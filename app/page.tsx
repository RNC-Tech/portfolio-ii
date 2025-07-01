import Link from 'next/link'

const page = () => {
  return (
    <div className='flex justify-center items-start h-full'>
      <div className=' card bg-gradient-to-tl from-gray-900 to-gray-800 shadow-xl flex flex-row items-start justify-start w-fit h-fit px-24 py-24 rounded-2xl'>
        <div className='flex flex-row justify-start w-full'>
          <div className='w-1/2 animate-bounce'>
            <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDBvMjN0ZHpjd2V5NmhoYTM2aWphdXNnZXh0ZGI4MmQ4cDlsZTc4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/935gCxva4XOcgtBbdO/giphy.gif" alt="Visuals with Purpose" className='w-full h-80 object-contain rounded-lg' />
          </div>
          <div className='w-fit'>
            <article className='prose'>
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
                  <button className='btn btn-primary rounded-full px-8 py-4 hover:scale-115 transition-all duration-200 active:scale-105'>
                    Learn more about RNC
                  </button>
                </Link>
              </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page