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
  gallery?: GalleryItem[]
  links?: {
    live?: string
    github?: string
    docs?: string
  }
}

export type GalleryItem = {
  type: 'image' | 'video';
  src: string;
}

const projects: Project[] = [
    // RE-TRUE
  {
    id: 1,
    title: "RE-TRUE | Graphic Designs and Digital Publication",
    description:"Designed a full graphic identity for a university intramurals event with a unique pixel art theme. The project featured retro-inspired visuals across posters, digital publications, and event branding. From character sprites to 8-bit-style typography, every element was crafted to evoke nostalgia while maintaining a clean, modern layout. A playful yet cohesive design system that energized the student community.",
    publishedDate: "Nov, 2023",
    role: "Graphics Director & Motion Graphic Artist",
    skills: ["Graphic Design", "Digital Publication", "Character Design", "Character Animation", "Pixel Art", "Music Production"],
    deliverables: ["Logo Suite", "Brand Guidelines", "Social Media Assets", "Motion Graphic Animations", "Music Production", "Social Media Assets", "Custom Sprite Character Animations", "GIFs", "Socialmedia Camera Filter"],
    image: "https://i.imgur.com/jQp9jtW.jpeg",
    status: "Completed",
    category: "Branding",
    gallery: [
      { type: 'image', src: "https://i.imgur.com/7rMoJFn.jpeg" },
      { type: 'image', src: "https://i.imgur.com/OY4p8JG.gif" },
      { type: 'image', src: "https://i.imgur.com/Kuh4fZ2.gif" },
      { type: 'image', src: "https://i.imgur.com/NeF3WfB.jpeg" },
      { type: 'image', src: "https://i.imgur.com/9COhkj3.jpeg" },
      { type: 'image', src: "https://i.imgur.com/IMcQTFd.jpeg" },
      { type: 'image', src: "https://i.imgur.com/U715jwn.jpeg" },
      { type: 'image', src: "https://i.imgur.com/qpTDOXz.jpeg" },
      { type: 'image', src: "https://i.imgur.com/Sx3H1xj.gif" },
      { type: 'image', src: "https://i.imgur.com/ibv7fu9.gif" },
      { type: 'image', src: "https://i.imgur.com/VhgS4Pg.gif" },
      { type: 'image', src: "https://i.imgur.com/kGKOv7F.gif" },
      { type: 'image', src: "https://i.imgur.com/7xkxHpj.gif" },
      { type: 'image', src: "https://i.imgur.com/RWUgrV8.gif" },
      { type: 'image', src: "https://i.imgur.com/143MQUE.gif" },
      { type: 'image', src: "https://i.imgur.com/2rViBK2.gif" },
      { type: 'image', src: "https://i.imgur.com/W3JHA9L.gif" },

      { type: 'video', src: 'https://www.youtube.com/watch?v=suTSIDAXiY0' },
      { type: 'video', src: 'https://www.youtube.com/watch?v=T8ZZ7TaZnnk' },
      { type: 'video', src: 'https://www.youtube.com/watch?v=HUocjZC3kJ4' }
    ],
    links: {
      live: "",
      github: "",
      docs: ""
    }
  },
  // TITANS OF JAPAN COLLECTION
  {
    id: 2,
    title: "Titans of Japan Collection | GT Lifestyle",
    description:
      "The goal was to create standout t-shirt designs celebrating Japan&apos;s iconic sports cars—the GT-R R34 and Supra MK4—for the GT Lifestyle brand. I crafted two variants featuring detailed car illustrations, bold graphics, and Japanese-inspired elements. The result merged streetwear with car culture, enhancing brand identity and resonating with automotive enthusiasts.",
    publishedDate: "March, 2025",
    role: "Product Designer",
    skills: ["Graphic Design", "T-Shirt Design", "Design Mockup", "Motion Graphic Animation"],
    deliverables: ["Shirt Designs", "Socialmedia Assets", "Shirt Mockups (x3)"],
    image: "https://i.imgur.com/x8d2Q95.png",
    status: "Completed",
    category: "Product Design",
    gallery: [
      { type: 'image', src: "https://i.imgur.com/SnWsD7w.jpeg" },
      { type: 'image', src: "https://i.imgur.com/G2lShWG.jpeg" },
      { type: 'image', src: "https://i.imgur.com/x8d2Q95.png" },
      { type: 'video', src: 'https://www.youtube.com/watch?v=vVdYxPEiXjc' }

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
      "The goal was to design headwear that extends the GT Lifestyle brand into everyday wear while maintaining its automotive identity. I developed two clean and modern cap variants—one in black and one in blue—featuring embroidered GT Lifestyle logos. The minimalist approach ensures versatility, while the color choices reflect the brand&apos;s aesthetic. The result: a stylish, wearable extension of the brand that appeals to both car fans and streetwear enthusiasts.",
    publishedDate: "July, 2025",
    role: "Designer",
    skills: ["Design Mockup"],
    deliverables: ["Product Mockup"],
    image: "https://i.imgur.com/j8YTinm.png",
    status: "Completed",
    category: "Mockup",
    gallery: [
      { type: 'image', src: "https://i.imgur.com/j8YTinm.png" },
      { type: 'image', src: "https://i.imgur.com/WHv49XD.png" }
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
      "The goal was to create a streetwear-inspired shirt that celebrates Honda&apos;s iconic Civic EK9, specifically its Spoon Sports heritage. I designed a bold graphic featuring the EK9 in its signature livery, paired with energetic typography and layout that emphasizes performance. This design brought together GT Lifestyle&apos;s brand identity and Autoworx&apos;s racing roots—resulting in a piece that resonated with both car enthusiasts and the motorsport community.",
    publishedDate: "Febuary, 2025",
   role: "Product Designer",
    skills: ["Graphic Design", "T-Shirt Design", "Design Mockup", "Motion Graphic Animation"],
    deliverables: ["Shirt Designs", "Socialmedia Assets", "Shirt Mockups (x3)"],
    image: "https://i.imgur.com/h4wkBwT.png",
    status: "Completed",
    category: "Product Design",
    gallery: [
      { type: 'image', src: "https://i.imgur.com/2GWhbRn.gif" },
      { type: 'image', src: "https://i.imgur.com/h4wkBwT.png" },
      { type: 'image', src: "https://i.imgur.com/Fhrhmk3.jpeg" },
      { type: 'image', src: "https://i.imgur.com/I1S4QMS.png" },
      { type: 'image', src: "https://i.imgur.com/EBWe42c.jpeg" },
    ],
    links: {
      live: "",
      github: "",
      docs: ""
    }
  },

  {
    id: 5,
    title: "ALSA | Graphic Designs and Digital Publication",
    description:"Developed a vibrant and festive graphic identity for a university week celebration, inspired by Filipino cultural motifs and fiesta themes. The design featured bold colors, playful illustrations, and dynamic layouts applied across digital publications, social media materials, and event collaterals. ALSA captured the energy, joy, and cultural pride of the event while keeping the overall look clean and modern.",
    publishedDate: "March, 2024",
    role: "Graphics Director & Motion Graphic Artist",
    skills: ["Graphic Design", "Digital Publication", "Character Design", "Character Animation", "Pixel Art", "Music Production"],
    deliverables: ["Logo Suite", "Brand Guidelines", "Social Media Assets", "Motion Graphic Animations", "Music Production", "Social Media Assets", "Custom Sprite Character Animations", "GIFs", "Socialmedia Camera Filter"],
    image: "https://i.imgur.com/xJQPaa7.jpeg",
    status: "Completed",
    category: "Branding",
    gallery: [
      { type: 'image', src: "https://i.imgur.com/xJQPaa7.jpeg" },
      { type: 'image', src: "https://i.imgur.com/plgC9v8.jpeg" },
      { type: 'image', src: "https://i.imgur.com/gtUzB0j.jpeg" },
      { type: 'image', src: "https://i.imgur.com/3GWr4E0.jpeg" },
      { type: 'image', src: "https://i.imgur.com/4G2YQNm.jpeg" },
      { type: 'image', src: "https://i.imgur.com/jxKJ2r4.jpeg" },
      { type: 'image', src: "https://i.imgur.com/xvJ16MB.jpeg" },
      { type: 'image', src: "https://i.imgur.com/48kpEou.jpeg" },
      { type: 'image', src: "https://i.imgur.com/6Gpwqed.jpeg" },
      { type: 'image', src: "https://i.imgur.com/qM9Dyef.gif" },
      { type: 'image', src: "https://i.imgur.com/avhNmMo.gif" },
      { type: 'image', src: "https://i.imgur.com/jFeNcCP.gif" },
      { type: 'video', src: 'https://www.youtube.com/watch?v=t5V28UFltSY' }
    ],
    links: {
      live: "",
      github: "",
      docs: ""
    }
  }

  
]

// Sort projects by publishedDate (latest first)
function parseMonthYear(dateStr: string): Date {
  // Handles formats like 'July, 2025' or 'March, 2024'
  const [month, year] = dateStr.replace(/\s/g, '').split(',');
  return new Date(`${month} 1, ${year}`);
}

const sortedProjects = projects.slice().sort((a, b) => {
  const dateA = parseMonthYear(a.publishedDate);
  const dateB = parseMonthYear(b.publishedDate);
  return dateB.getTime() - dateA.getTime(); // Descending order
});

export default sortedProjects
