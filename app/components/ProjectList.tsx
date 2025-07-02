import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import projects from '../projects/projectdetails/[id]/data/projects'

const ProjectList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {projects.map((project) => (
        <div key={project.id} className="card w-full md:w-96 shadow-2xl bg-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-2xl">
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
            <h2 className="card-title">{project.title}</h2>
            <p className='text-gray-400 mb-12'>{project.description.length > 100 ? `${project.description.substring(0, 100)}...` : project.description}</p>
            <div className="card-actions justify-end">
              <Link href={`/projects/projectdetails/${project.id}`}>
                <button className="btn btn-primary rounded-full active:scale-95">View Project</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectList
