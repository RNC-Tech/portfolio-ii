'use client';
import Link from 'next/link'
import useSound from './components/useSound';

const buttonHoverSound = 'https://d1aht2gieyw871.cloudfront.net/z8wx6w%2Ffile%2F443278c0d3195c51cb44af6a3d99fa4b_e8ac2773334397a4e048e9b174f041de.wav?response-content-disposition=inline%3Bfilename%3D%22443278c0d3195c51cb44af6a3d99fa4b_e8ac2773334397a4e048e9b174f041de.wav%22%3B&response-content-type=audio%2Fx-wav&Expires=1751683615&Signature=DwOEtbT8qs59JPSYTXktJonmAIrZR481vDRMYErm~ah1X6wyT1e-33nkyY9Bn6hB~xtmY8Eagex0tQYcYb2o8SW22gU3aOG0gb-3OUlRdNZTID2euxZ7cyx6c6xFlrrbQBGFXXUErRUt~7dpyEj5GFO28olszWc8g52j44U3md7Ns6PMgnF8~PCRzCzgpZTlA0Kf85J7Hg-9JhSezunMsJRbNgsi1V9cAuOID1xYgtosgJB8SNvscRLK4SGSx4s1e3lsSh2zwEcaLwjIMV79m8eG4Uyk9sixidPLgQhweVBmXe6K8pDQaF0UAspjmYReHa8Kr6cItUXu0oWCVKfqlQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ';
const buttonClickSound = 'https://dz0i85a16ad4a.cloudfront.net/t8ux6w%2Ffile%2F9f99ae93281d3e862878318fd3696264_96dac53aebf63ab3236b8c1c1147ef19.wav?response-content-disposition=inline%3Bfilename%3D%229f99ae93281d3e862878318fd3696264_96dac53aebf63ab3236b8c1c1147ef19.wav%22%3B&response-content-type=audio%2Fx-wav&Expires=1751683645&Signature=E4nBeO5piFCL7Bmnd602FqJq5FDo9YfcgI6nn2CDV1OO-6IKoamDdQBnMeS1xRdUzEwGkkIKk~VYlAlYrroUIHHlr1Q7o0~0jgyBS9dZ6dzvedpSTnsdu8hC89ifPY8aBd-SdKg7pZLD4f8PYK-QaWBq4RToTuIXhh6-LAiBwskp80a4cMpYBFi~nN6v4n0Oq8GucZSouNRtkONxYvdsbGPoHmglKy1cvA26ULUVznxui8Ltgg11ACWBnCFV8O~dEKcYDVUCp85htyReXiUtol6yvCaLRJviNr7gDefwtddNcf67OJTYMxpNTiOE6Oii2Rx-M1i5-M7hKIN8wHMa0Q__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ';

const page = () => {
  const playButtonHover = useSound(buttonHoverSound, 0.2);
  const playButtonClick = useSound(buttonClickSound, 0.2);

  const handleButtonClick = () => {
    // Play button click sound
    playButtonClick();
    
    // Start background music using global function
    if (typeof window !== 'undefined' && window.startBackgroundMusic) {
      window.startBackgroundMusic();
    }
  };

  return (
    <main className="w-full max-w-6xl mx-auto min-h-fit flex items-center justify-center mt-16 md:mt-32">
      <div className="w-full h-fit">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl">
              <img 
                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDBvMjN0ZHpjd2V5NmhoYTM2aWphdXNnZXh0ZGI4MmQ4cDlsZTc4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/935gCxva4XOcgtBbdO/giphy.gif" 
                alt="Visuals with Purpose" 
                className="w-full h-full object-contain rounded-2xl animate-bounce"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Visuals with Purpose
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              I&apos;m a visual storyteller with a sharp eye for composition,
              color, and motion. With experience across tools like Photoshop,
              Illustrator, After Effects, and Canva, I craft visuals
              that don&apos;t just look good—they communicate. Whether it&apos;s
              designing standout social posts, sleek UI assets, or cinematic
              edits, I focus on clarity, emotion, and purpose. I approach each
              project with intention, blending design principles with instinct
              to create visuals that resonate.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href='/about'>
                <button className='btn btn-primary rounded-full px-8 py-4 text-base md:text-lg hover:scale-105 transition-all duration-200 active:scale-100' onMouseEnter={playButtonHover} onClick={handleButtonClick}>
                  Learn more about RNC
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page