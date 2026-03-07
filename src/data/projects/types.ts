export type GalleryItem = {
  type: "image" | "video" | "youtube";
  src: string;
  title?: string;
  description?: string;
};

export type CodeSnippet = {
  title: string;
  language?: string;
  description?: string;
  code: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: any[];
  github?: string;
  link?: string;
  trailer?: string;
  youtubeChannel?: string;
  youtubeVideoId?: string;
  href?: string;
  gallery?: GalleryItem[];
  detail?: {
    explication?: string[];
    myRole?: string;
    technologies?: any[];
    images?: string[];
    media?: GalleryItem[];
    recognitions?: string[];
    codeSnippets?: CodeSnippet[];
  };
};