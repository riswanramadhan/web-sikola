export type Locale = 'id' | 'en'

export type ProgramCategory = 'lomba' | 'beasiswa' | 'karir' | 'social'

export interface ProgramItem {
  title: string
  description: string
  icon: string
  link: string
  category: ProgramCategory
}

export interface MentorProfile {
  name: string
  role: string
  university: string
  photo: string
  achievementCount: number
  topAchievements: string[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ContentSection {
  label: string
  heading: string
  subtext?: string
}

export interface SiteContent {
  nav: {
    home: string
    about: string
    programs: string
    mentors: string
    contact: string
  }
  hero: {
    label: string
    headlineTop: string
    headlineBottom: string
    highlightedWord: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    stats: Array<{ value: string; label: string }>
  }
  about: {
    label: string
    heading: string
    intro: string
    introCard: string
    launchBadge: string
    launchLabel: string
    launchDate: string
    meaning: string
    founderLabel: string
    founderName: string
    founderUniversity: string
    vision: {
      label: string
      heading: string
      content: string
    }
    mission: {
      label: string
      heading: string
      points: string[]
    }
    values: {
      label: string
      heading: string
      items: string[]
    }
  }
  programs: {
    label: string
    heading: string
    subtext: string
    searchPlaceholder: string
    registerNow: string
    tabs: {
      mentoring: string
      social: string
    }
    mentoringHeading: string
    socialHeading: string
    noResults: string
    categoryLabels: Record<'lomba' | 'beasiswa' | 'karir' | 'social', string>
    mentoring: ProgramItem[]
    social: ProgramItem[]
  }
  mentors: {
    label: string
    heading: string
    subtext: string
    achievementLabel: string
    showMore: string
    showLess: string
    items: MentorProfile[]
  }
  contact: {
    heading: string
    subtext: string
    emailLabel: string
    phoneLabel: string
    addressLabel: string
    whatsappChannelLabel: string
    whatsappDescription: string
    socialHeading: string
    whatsappButton: string
    socialButtons: {
      instagram: string
      tiktok: string
      linkedin: string
    }
    faqLabel: string
    faqHeading: string
    faq: FAQItem[]
  }
  footer: {
    tagline: string
    quickLinksHeading: string
    contactHeading: string
    copyright: string
  }
}
