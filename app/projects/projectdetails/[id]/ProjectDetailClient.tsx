'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Project } from '../../../../lib/projects'
import ProjectGallery from '../../../components/ProjectGallery'

// Client component for handling tabs
const ProjectDetailClient = ({ project }: { project: Project }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'gallery'>('about')

  const handleTabClick = (tab: 'about' | 'gallery') => {
    setActiveTab(tab)
  }

  return (
    <main className="w-full max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="overflow-hidden rounded-2xl shadow-2xl mb-8 glass-card">
          <Image 
            src={project.image} 
            alt={project.title} 
            width={1200}
            height={384}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 glass-text">{project.title}</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 glass-text-secondary">{project.role}</p>
        </div>
      </div>

      {/* DaisyUI Tabs Border */}
      <div role="tablist" className="tabs tabs-border">
        <a 
          role="tab" 
          className={`tab ${activeTab === 'about' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
          About
        </a>
        <a 
          role="tab" 
          className={`tab ${activeTab === 'gallery' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('gallery')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          Gallery
        </a>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {/* About Tab Content */}
        <div className={`tab-content ${activeTab === 'about' ? 'block' : 'hidden'}`}>
          <div className="space-y-12">
            {/* About This Project */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left glass-text">About This Project</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Intro Card */}
                <div className="lg:col-span-1">
                  <div className="glass-card p-6 h-fit no-hover">
                    <h3 className="text-lg font-semibold mb-4 text-primary glass-text">Project Overview</h3>
                    
                    {/* Category */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-400 mb-2 glass-text-secondary">Category</h4>
                      <p className="text-base font-semibold text-white glass-text">
                        {project.category || project.skills[0]}
                      </p>
                    </div>

                    {/* Status */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-400 mb-2 glass-text-secondary">Status</h4>
                      <span className="badge badge-success badge-sm">
                        {project.status || 'Completed'}
                      </span>
                    </div>

                    {/* Published Date */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-400 mb-2 glass-text-secondary">Published</h4>
                      <p className="text-base font-semibold text-white glass-text">
                        {new Date(project.publishedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                        })}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-400 mb-2 glass-text-secondary">Skills & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.slice(0, 6).map((skill, index) => (
                          <span 
                            key={index}
                            className="badge badge-primary badge-sm"
                          >
                            {skill}
                          </span>
                        ))}
                        {project.skills.length > 6 && (
                          <span className="badge badge-outline badge-sm">
                            +{project.skills.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2 glass-text-secondary">Deliverables</h4>
                      <div className="space-y-2">
                        {project.deliverables.map((deliverable, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-gray-300 glass-text-secondary leading-tight">
                              {deliverable}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Content */}
                <div className="lg:col-span-2">
                  <div className="glass-card p-6 md:p-8 no-hover">
                    {project.content ? (
                      <div 
                        className="prose prose-invert max-w-none glass-text-secondary"
                        dangerouslySetInnerHTML={{ __html: project.content }}
                      />
                    ) : (
                      <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 glass-text-secondary">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Project Links */}
            {project.links && (project.links.live || project.links.github || project.links.docs || project.links.giphy) && (
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left glass-text">Project Links</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary flex-1"
                    >
                      View Live Site
                    </a>
                  )}
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary flex-1"
                    >
                      View on GitHub
                    </a>
                  )}
                  {project.links.docs && (
                    <a 
                      href={project.links.docs} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-accent flex-1"
                    >
                      View Documentation
                    </a>
                  )}
                  {project.links.giphy && (
                    <a 
                      href={project.links.giphy} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-neutral flex-1"
                    >
                      View on Giphy
                    </a>
                  )}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Gallery Tab Content */}
        <div className={`tab-content ${activeTab === 'gallery' ? 'block' : 'hidden'}`}>
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left glass-text">Project Gallery</h2>
            <ProjectGallery 
              projectId={project.id}
              projectTitle={project.title}
              gallery={project.gallery || []}
            />
          </section>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetailClient
