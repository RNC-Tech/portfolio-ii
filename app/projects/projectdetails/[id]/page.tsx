'use client'
import React from 'react'
import projects, { Project } from './data/projects'

interface PageProps {
  params: Promise<{ id: string }>
}

const ProjectDetail = ({ params }: PageProps) => {
  const { id } = React.use(params)
  const project = projects.find((p: Project) => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Project Not Found</h1>
          <p className="text-gray-600">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="w-full mx-auto p-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
              {/* <p className="text-xl text-gray-400 opacity-90">{project.description}</p> */}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
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

            {/* Gallery Section */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery && project.gallery.length > 0 ? (
                  project.gallery.map((image, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-700 rounded-lg h-48 flex items-center justify-center overflow-hidden group relative cursor-pointer"
                      onClick={() => {
                        const modal = document.getElementById(`modal_${project.id}_${index}`) as HTMLDialogElement;
                        if (modal) modal.showModal();
                      }}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gray bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                          View Image {index + 1}
                        </span>
                      </div>
                      
                      {/* DaisyUI Modal for this image */}
                      <dialog id={`modal_${project.id}_${index}`} className="modal">
                        <div className="modal-box w-11/12 max-w-5xl bg-gray-800">
                          <h3 className="font-bold text-lg text-white mb-4">{project.title} - Image {index + 1}</h3>
                          <div className="flex justify-center mb-4">
                            <img 
                              src={image} 
                              alt={`${project.title} - Image ${index + 1}`}
                              className="max-w-full max-h-100 object-contain rounded-lg"
                            />
                          </div>
                          <div className="modal-action">
                          </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center">
                      <span className="text-gray-400">Main View</span>
                    </div>
                    <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center">
                      <span className="text-gray-400">Detail View</span>
                    </div>
                    <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center">
                      <span className="text-gray-400">Process Work</span>
                    </div>
                    <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center">
                      <span className="text-gray-400">Final Result</span>
                    </div>
                    <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center">
                      <span className="text-gray-400">Additional View</span>
                    </div>
                    <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center">
                      <span className="text-gray-400">Close-up</span>
                    </div>
                  </>
                )}
              </div>
              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-4 text-center">
                  <p className="text-gray-400 text-sm">
                    {project.gallery.length} image{project.gallery.length !== 1 ? 's' : ''} in gallery
                  </p>
                </div>
              )}
            </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail 