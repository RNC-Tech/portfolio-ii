import Link from 'next/link'

const page = () => {
  return (
      <div className='flex w-full flex-col justify-center items-start'>
        <article className='prose w-full'>
          <h1 style={{ marginBottom: '-10px' }}>Visuals with Purpose</h1>
          <p className='w-full'>I&apos;m a visual storyteller with a sharp eye for composition,
            color, and motion. With experience across tools like Photoshop,
            Illustrator, After Effects, and Canva, I craft visuals
            that don&apos;t just look good—they communicate. Whether it&apos;s
            designing standout social posts, sleek UI assets, or cinematic
            edits, I focus on clarity, emotion, and purpose. I approach each
            project with intention, blending design principles with instinct
            to create visuals that resonate.
          </p>
          <Link href='/about'>
            <button className='btn btn-primary rounded-full px-8 py-4'>
              About RNC
            </button>
          </Link>
        </article>
      </div>
  )
}

export default page