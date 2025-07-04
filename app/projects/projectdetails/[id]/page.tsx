import React from 'react'
import Image from 'next/image'
import projects, { Project } from './data/projects'
import ProjectGallery from '../../../components/ProjectGallery'

// Generate static params for all project IDs
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

interface PageProps {
  params: Promise<{ id: string }>
}

const ProjectDetail = async ({ params }: PageProps) => {
  const { id } = await params
  const project = projects.find((p: Project) => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-red-600 mb-4">Project Not Found</h1>
          <p className="text-base md:text-lg text-gray-300">The project you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    )
  }

  return (
    <main className="w-full max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="overflow-hidden rounded-2xl shadow-2xl mb-8">
          <Image 
            src={project.image} 
            alt={project.title} 
            width={1200}
            height={384}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">{project.role}</p>
        </div>
      </div>

      {/* Project Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div className="bg-gray-800 rounded-2xl p-6 text-center">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Published</h3>
          <p className="text-base md:text-lg font-semibold text-white">
            {new Date(project.publishedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
            })}
          </p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 text-center">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Status</h3>
          <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {project.status || 'Completed'}
          </span>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 text-center">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Category</h3>
          <p className="text-base md:text-lg font-semibold text-white">
            {project.category || project.skills[0]}
          </p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 text-center">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Role</h3>
          <p className="text-base md:text-lg font-semibold text-white">{project.role}</p>
        </div>
      </div>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">About This Project</h2>
        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            {project.description}
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            This project showcases expertise in {project.skills.join(', ').toLowerCase()} and demonstrates 
            the ability to deliver high-quality {project.deliverables.join(', ').toLowerCase()} that meet 
            client objectives and industry standards.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">Skills & Technologies</h2>
        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex flex-wrap gap-3">
            {project.skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-blue-900 text-blue-300 px-4 py-2 rounded-full text-sm md:text-base font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">Deliverables</h2>
        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.deliverables.map((deliverable, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-300 text-base md:text-lg">{deliverable}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Links */}
      {project.links && (project.links.live || project.links.github || project.links.docs) && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">Project Links</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {project.links.live && (
              <a 
                href={project.links.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-2xl transition-colors duration-200 text-base md:text-lg font-medium"
              >
                View Live Site
              </a>
            )}
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-3 px-6 rounded-2xl transition-colors duration-200 text-base md:text-lg font-medium"
              >
                View on GitHub
              </a>
            )}
            {project.links.docs && (
              <a 
                href={project.links.docs} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-3 px-6 rounded-2xl transition-colors duration-200 text-base md:text-lg font-medium"
              >
                View Documentation
              </a>
            )}
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">Project Gallery</h2>
        <ProjectGallery 
          projectId={project.id}
          projectTitle={project.title}
          gallery={project.gallery || []}
        />
      </section>
    </main>
  )
}

export default ProjectDetail 