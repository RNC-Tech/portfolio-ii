import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface Project {
  id: number
  title: string
  slug: string
  description: string
  publishedDate: string
  role: string
  status?: string
  category?: string
  skills: string[]
  deliverables: string[]
  image: string
  gallery?: GalleryItem[]
  links?: {
    live?: string
    github?: string
    docs?: string
    giphy?: string
  }
  content?: string
}

export type GalleryItem = {
  type: 'image' | 'video'
  src: string
}

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export function getAllProjects(): Project[] {
  try {
    // Check if directory exists
    if (!fs.existsSync(projectsDirectory)) {
      console.warn(`Projects directory not found: ${projectsDirectory}`)
      return []
    }

    // Get file names under /content/projects
    const fileNames = fs.readdirSync(projectsDirectory)
    const allProjectsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        // Remove ".md" from file name to get id
        const slug = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(projectsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the slug
        return {
          slug,
          ...matterResult.data,
        } as Project
      })

    // Sort projects by publishedDate (latest first)
    return allProjectsData.sort((a, b) => {
      const dateA = parseDate(a.publishedDate)
      const dateB = parseDate(b.publishedDate)
      return dateB.getTime() - dateA.getTime()
    })
  } catch (error) {
    console.error('Error reading projects:', error)
    return []
  }
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`)
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = remark()
      .use(html)
      .processSync(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the slug and content
    return {
      slug,
      content: contentHtml,
      ...matterResult.data,
    } as Project
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error)
    return null
  }
}

export function getProjectById(id: number): Project | null {
  const projects = getAllProjects()
  return projects.find(project => project.id === id) || null
}

// Helper function to parse dates in various formats
function parseDate(dateStr: string): Date {
  // Handle formats like 'July, 2025' or 'March, 2024' or '2023-11-01'
  if (dateStr.includes(',')) {
    const [month, year] = dateStr.replace(/\s/g, '').split(',')
    return new Date(`${month} 1, ${year}`)
  }
  
  // Handle ISO date format
  if (dateStr.includes('-')) {
    return new Date(dateStr)
  }
  
  // Fallback to current date
  return new Date()
}

// Get all slugs for static generation
export function getAllSlugs(): string[] {
  try {
    if (!fs.existsSync(projectsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(projectsDirectory)
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error reading slugs:', error)
    return []
  }
}

// Get all IDs for static generation (for backward compatibility)
export function getAllIds(): number[] {
  const projects = getAllProjects()
  return projects.map(project => project.id)
}
