import React from 'react'
import { getProjectBySlug, getAllSlugs } from '../../../../lib/projects'
import ProjectDetailClient from './ProjectDetailClient'

// Generate static params for all project slugs
export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({
    id: slug,
  }))
}

interface PageProps {
  params: Promise<{ id: string }>
}

const ProjectDetail = async ({ params }: PageProps) => {
  const { id } = await params
  const project = getProjectBySlug(id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-red-600 mb-4 glass-text">Project Not Found</h1>
          <p className="text-base md:text-lg text-gray-300 glass-text-secondary">The project you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    )
  }

  return <ProjectDetailClient project={project} />
}

export default ProjectDetail 