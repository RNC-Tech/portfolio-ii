import React from 'react'
import ProjectList from '../components/ProjectList'
import { getAllProjects } from '../../lib/projects'

const ProjectsPage = async () => {
  // Fetch projects on the server side
  const projects = getAllProjects()

  return (
    <div>
       <ProjectList projects={projects}/>   
    </div>
  )
}

export default ProjectsPage