import React from 'react'
import ProjectList from '../components/ProjectList'
import { getAllProjects } from '../../lib/projects'

const ProjectsPage = async () => {
  // Fetch projects on the server side
  const projects = getAllProjects()

  return (
    <div className='pt-16 text-center'>
       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 glass-text pb-4">Projects</h1>
       <ProjectList projects={projects}/>
    </div>
  )
}

export default ProjectsPage