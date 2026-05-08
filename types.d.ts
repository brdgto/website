interface ResidentData {
  id: string
  name: string
  description: string
  descriptionJa: string
  url?: string | string[]
  showProject?: boolean
  projectAlbumUrl?: string
}

interface ProjectData {
  id: string
  name: string
  description: string
  descriptionJa: string
  url?: string
}
