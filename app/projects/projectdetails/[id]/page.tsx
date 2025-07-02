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
          <h1 className="text-4xl font-bold text-red-600 mb-4">Project Not Found</h1>
          <p className="text-gray-600">The project you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="w-full mx-auto p-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="md:relative sm:absolute sm:left-0 overflow-hidden rounded-2xl shadow-2xl mb-8">
            <Image 
              src={project.image} 
              alt={project.title} 
              width={1200}
              height={384}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:mt-0 sm:mt-110">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            {/* About Section */}
            <div className="rounded-box p-8 shadow-lg bg-gray-800">
              <h2 className="text-2xl font-bold mb-4 text-white">About This Project</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-gray-400 leading-relaxed">
                This project showcases expertise in {project.skills.join(', ').toLowerCase()} and demonstrates 
                the ability to deliver high-quality {project.deliverables.join(', ').toLowerCase()} that meet 
                client objectives and industry standards.
              </p>
            </div>

            {/* Skills Section */}
            <div className="rounded-xl p-8 shadow-lg bg-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-white">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-blue-900 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables Section */}
            <div className="rounded-xl p-8 shadow-lg bg-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-white">Deliverables</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-400">{deliverable}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Section - Using Client Component */}
            <ProjectGallery 
              projectId={project.id}
              projectTitle={project.title}
              gallery={project.gallery || []}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-white">Project Info</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Published</span>
                  <span className="text-gray-200 font-medium">
                    {new Date(project.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Role</span>
                  <span className="text-gray-200 font-medium">{project.role}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Status</span>
                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.status || 'Completed'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Category</span>
                  <span className="text-gray-200 font-medium">
                    {project.category || project.skills[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* Links Section */}
            {project.links && (project.links.live || project.links.github || project.links.docs) && (
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-white">Project Links</h3>
                <div className="space-y-3">
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      View Live Site
                    </a>
                  )}
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full bg-gray-700 hover:bg-gray-600 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      View on GitHub
                    </a>
                  )}
                  {project.links.docs && (
                    <a 
                      href={project.links.docs} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      View Documentation
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail 