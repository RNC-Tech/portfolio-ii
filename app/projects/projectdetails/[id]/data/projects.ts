export interface Project {
  id: number
  title: string
  description: string
  publishedDate: string
  role: string
  skills: string[]
  deliverables: string[]
  image: string
  status?: string
  category?: string
  gallery?: string[]
  links?: {
    live?: string
    github?: string
    docs?: string
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: "RE-TRUE | Graphic Designs and Digital Publication",
    description:"Designed a full graphic identity for a university intramurals event with a unique pixel art theme. The project featured retro-inspired visuals across posters, digital publications, and event branding. From character sprites to 8-bit-style typography, every element was crafted to evoke nostalgia while maintaining a clean, modern layout. A playful yet cohesive design system that energized the student community.",
    publishedDate: "2024-09-15",
    role: "Graphic Designer",
    skills: ["Graphic Design", "Digital Publication", "Character Design", "Character Animation", "Pixel Art"],
    deliverables: ["Logo Suite", "Brand Guidelines", "Social Media Assets"],
    image: "/re-true/image_1.png",
    status: "Completed",
    category: "Branding",
    gallery: [
      "/re-true/image_2.png", 
      "/re-true/image_3.gif", 
      "/re-true/image_4.png", 
      "/re-true/image_5.png",
      "/re-true/image_6.png",
      "/re-true/image_7.png"
    ],
    links: {
      live: "",
      github: "",
      docs: ""
    }
  },
  {
    id: 2,
    title: "Titans of Japan Collection | GT Lifestyle",
    description:
      "The goal was to create standout t-shirt designs celebrating Japan’s iconic sports cars—the GT-R R34 and Supra MK4—for the GT Lifestyle brand. I crafted two variants featuring detailed car illustrations, bold graphics, and Japanese-inspired elements. The result merged streetwear with car culture, enhancing brand identity and resonating with automotive enthusiasts.",
    publishedDate: "2024-06-03",
    role: "Designer",
    skills: ["Graphic Design", "T-Shirt Design", "Design Mockup"],
    deliverables: ["Poster Set (x5)", "Press Kit Materials"],
    image: "/titans-of-japan/image_1.png",
    status: "Completed",
    category: "Product Design",
    gallery: [
      "/titans-of-japan/image_1.png", 
      "/titans-of-japan/image_2.png", 
      "/titans-of-japan/image_3.png"

    ],
    links: {
      live: "",
      github: "",
      docs: ""
    }
  },
  {
    id: 3,
    title: "GT Cap Collection | GT Lifestyle",
    description:
      "The goal was to design headwear that extends the GT Lifestyle brand into everyday wear while maintaining its automotive identity. I developed two clean and modern cap variants—one in black and one in blue—featuring embroidered GT Lifestyle logos. The minimalist approach ensures versatility, while the color choices reflect the brand's aesthetic. The result: a stylish, wearable extension of the brand that appeals to both car fans and streetwear enthusiasts.",
    publishedDate: "2025-01-22",
    role: "Designer",
    skills: ["Design Mockup"],
    deliverables: ["Product Mockup"],
    image: "/gt-cap/image_1.png",
    status: "Completed",
    category: "Mockup",
    gallery: [
      "/gt-cap/image_1.png", 
      "/gt-cap/image_2.png"
    ],
    links: {
      live: "",
      github: "",
      docs: ""
    }
  },

  {
    id: 4,
    title: "Passion For Performance | GT Lifestyle",
    description:
      "The goal was to create a streetwear-inspired shirt that celebrates Honda’s iconic Civic EK9, specifically its Spoon Sports heritage. I designed a bold graphic featuring the EK9 in its signature livery, paired with energetic typography and layout that emphasizes performance. This design brought together GT Lifestyle’s brand identity and Autoworx's racing roots—resulting in a piece that resonated with both car enthusiasts and the motorsport community.",
    publishedDate: "2025-01-22",
    role: "Designer",
    skills: ["Design Mockup"],
    deliverables: ["Product Mockup"],
    image: "/passion-for-performance/image_1.png",
    status: "Completed",
    category: "Mockup",
    gallery: [
      "/passion-for-performance/image_1.png", 
      "/passion-for-performance/image_2.png",
      "/passion-for-performance/image_3.png",
      "/passion-for-performance/image_4.png"
    ],
    links: {
      live: "",
      github: "",
      docs: ""
    }
  }

  
]

export default projects
