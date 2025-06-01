export interface Project {
  id: number
  name: string
  description: string
  image: string
  technologies: string[]
  link: string
}

export interface Service {
  id: number
  name: string
  description: string
  features: string[]
}

export interface BlogPost {
  id: number
  title: string
  description: string
  date: string
  category: string
  author: {
    name: string
    role: string
    imageUrl: string
  }
}

export interface TeamMember {
  id: number
  name: string
  role: string
  imageUrl: string
  bio: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
} 