'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import projects from '../projects/projectdetails/[id]/data/projects'
import useSound from './useSound'

const cardHoverSound = 'https://d2rfm1awsiaf19.cloudfront.net/b8wx6w%2Ffile%2F4c2b753e4351058561347b3592978921_08a71d3441ba5e732ff88c7fcb3a156a.wav?response-content-disposition=inline%3Bfilename%3D%224c2b753e4351058561347b3592978921_08a71d3441ba5e732ff88c7fcb3a156a.wav%22%3B&response-content-type=audio%2Fx-wav&Expires=1751683552&Signature=X2It5z7zAKUfhgtDfj1EVt-vcOkkA1ciAkBi60lU~L0wSxOXbwlWSRgqpHFFtPJr0iYrkrXpPmA1WojXJzGNxVjYLFh6cpAI0HE8jJRBaoMBnAtq67zUakXCFDY7H8yYFVX8Vm9u8P4Ej9eBZu8PSwJeIFI5xQuRXNkP6LFiTCngjteoZB3p4HHOWsQH9063eQrEX~~CoVduKnHURfk-eNoigkdAW57SF6sCW0oB5U9xAkdLKhoWIAfW2jRU2jNTJCzXq442xJiQCa7vAgfGXTLP67u1a2kdN6aiJb23~xMY7CUfsJOvizlI4nGJpdyN3D982s6o3xdg5qbuaoV~tw__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ';
const buttonHoverSound = 'https://d1aht2gieyw871.cloudfront.net/z8wx6w%2Ffile%2F443278c0d3195c51cb44af6a3d99fa4b_e8ac2773334397a4e048e9b174f041de.wav?response-content-disposition=inline%3Bfilename%3D%22443278c0d3195c51cb44af6a3d99fa4b_e8ac2773334397a4e048e9b174f041de.wav%22%3B&response-content-type=audio%2Fx-wav&Expires=1751683615&Signature=DwOEtbT8qs59JPSYTXktJonmAIrZR481vDRMYErm~ah1X6wyT1e-33nkyY9Bn6hB~xtmY8Eagex0tQYcYb2o8SW22gU3aOG0gb-3OUlRdNZTID2euxZ7cyx6c6xFlrrbQBGFXXUErRUt~7dpyEj5GFO28olszWc8g52j44U3md7Ns6PMgnF8~PCRzCzgpZTlA0Kf85J7Hg-9JhSezunMsJRbNgsi1V9cAuOID1xYgtosgJB8SNvscRLK4SGSx4s1e3lsSh2zwEcaLwjIMV79m8eG4Uyk9sixidPLgQhweVBmXe6K8pDQaF0UAspjmYReHa8Kr6cItUXu0oWCVKfqlQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ';
const buttonClickSound = 'https://dz0i85a16ad4a.cloudfront.net/t8ux6w%2Ffile%2F9f99ae93281d3e862878318fd3696264_96dac53aebf63ab3236b8c1c1147ef19.wav?response-content-disposition=inline%3Bfilename%3D%229f99ae93281d3e862878318fd3696264_96dac53aebf63ab3236b8c1c1147ef19.wav%22%3B&response-content-type=audio%2Fx-wav&Expires=1751683645&Signature=E4nBeO5piFCL7Bmnd602FqJq5FDo9YfcgI6nn2CDV1OO-6IKoamDdQBnMeS1xRdUzEwGkkIKk~VYlAlYrroUIHHlr1Q7o0~0jgyBS9dZ6dzvedpSTnsdu8hC89ifPY8aBd-SdKg7pZLD4f8PYK-QaWBq4RToTuIXhh6-LAiBwskp80a4cMpYBFi~nN6v4n0Oq8GucZSouNRtkONxYvdsbGPoHmglKy1cvA26ULUVznxui8Ltgg11ACWBnCFV8O~dEKcYDVUCp85htyReXiUtol6yvCaLRJviNr7gDefwtddNcf67OJTYMxpNTiOE6Oii2Rx-M1i5-M7hKIN8wHMa0Q__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ';

const ProjectList = () => {
  const playCardHover = useSound(cardHoverSound, 0.2);
  const playButtonHover = useSound(buttonHoverSound, 0.2);
  const playButtonClick = useSound(buttonClickSound, 0.2);
  return (
    <div className="flex-wrap justify-center gap-6 flex">
      {projects.map((project) => (
        <div key={project.id} className="card w-full md:w-96 shadow-2xl bg-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-2xl transition-discretefy-items-stretch justify-self-auto justify-items-start" onMouseEnter={playCardHover}>
            <Link href={`/projects/projectdetails/${project.id}`}>
                <div>
                    <Image 
                      className='sm:w-full max-h-50 object-cover rounded-t-2xl' 
                      src={project.image} 
                      alt={project.title}
                      width={384}
                      height={200}
                    />
                </div>
            </Link>
                  
          <div className="card-body">
            <h2 className="card-title text-lg md:text-xl">{project.title}</h2>
            <p className='text-gray-400 mb-12 text-base md:text-lg'>{project.description.length > 100 ? `${project.description.substring(0, 100)}...` : project.description}</p>
            <div className="card-actions justify-end">
              <Link href={`/projects/projectdetails/${project.id}`}>
                <button className="btn btn-primary rounded-full active:scale-95 text-base md:text-lg" onMouseEnter={playButtonHover} onClick={playButtonClick}>View Project</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectList
