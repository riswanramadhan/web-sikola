import { mentorProfiles, programFormLinks } from './shared'
import type { SiteContent } from './types'

export const en: SiteContent = {
  nav: {
    home: 'Home',
    about: 'About Us',
    programs: 'Classes & Programs',
    mentors: 'Mentors',
    contact: 'Contact'
  },
  hero: {
    label: 'Student Mentoring Platform from Indonesia',
    headlineTop: "Let's Grow",
    headlineBottom: 'To Be',
    highlightedWord: 'Successful',
    description:
      'Sikola Indonesia is a personalized mentoring platform designed to help university students win competitions, secure scholarships, and step into their careers with confidence.',
    ctaPrimary: 'View Programs',
    ctaSecondary: 'Contact Us',
    stats: [
      { value: '50+', label: 'Mentor Achievements' },
      { value: '18', label: 'Available Classes' },
      { value: '5', label: 'Social Programs' }
    ]
  },
  about: {
    label: 'About Us',
    heading: 'Sikola Indonesia',
    intro:
      'Sikola Indonesia exists to answer students\' need for a more personal, focused, and accessible mentoring space for competitions, scholarships, and career preparation.',
    introCard:
      'Sikola Indonesia was born from a real concern: there were too few personal, focused, and accessible development spaces for Indonesian university students who want to grow through competitions, scholarships, and career preparation.',
    launchBadge: '12 January 2025',
    launchLabel: 'Launch',
    launchDate:
      'Launched on 12 January 2025, Sikola brings a renewed spirit to connect student potential with relevant and meaningful mentoring.',
    meaning:
      'The word "Sikola" comes from the Makassar language and means school or place to learn, becoming a symbol of a space that feels close, warm, and empowering.',
    founderLabel: 'Founder & CEO',
    founderName: 'Rifal, S.E',
    founderUniversity: 'Universitas Hasanuddin',
    vision: {
      label: 'Vision',
      heading: 'Our Vision',
      content:
        'To become Indonesia\'s leading personalized learning platform that opens access to quality mentoring so students can achieve, contribute, and grow sustainably.'
    },
    mission: {
      label: 'Mission',
      heading: 'Our Mission',
      points: [
        'Provide mentoring that is relevant and measurable based on each participant\'s needs.',
        'Build a learning ecosystem that is supportive, inclusive, and collaborative.',
        'Guide students in competitions, scholarships, and career development.',
        'Encourage participants to produce work, achievements, and real impact.',
        'Create a space for synergy between mentors, participants, communities, and partners.'
      ]
    },
    values: {
      label: 'Core Values',
      heading: 'Core Values',
      items: ['Competency', 'Empowerment', 'Integrity', 'Innovation', 'Synergy & Collaboration']
    }
  },
  programs: {
    label: 'Classes & Programs',
    heading: 'Start Your Journey and Succeed with Sikola Indonesia',
    subtext: 'Get the right guidance for your future',
    searchPlaceholder: 'Search Programs...',
    registerNow: 'Register Now',
    tabs: {
      mentoring: 'Mentoring Classes',
      social: 'Social Programs'
    },
    mentoringHeading: 'Mentoring Tailored to Your Goals',
    socialHeading: 'Growth & Opportunity Programs',
    noResults: 'The program you are looking for was not found.',
    categoryLabels: {
      lomba: 'Competition',
      beasiswa: 'Scholarship',
      karir: 'Career',
      social: 'Social Program'
    },
    mentoring: [
      {
        title: 'Business Plan Competition Mentoring',
        icon: '📊',
        category: 'lomba',
        link: programFormLinks.lomba,
        description:
          'Build a comprehensive, innovative, and competitive business proposal from idea validation to a pitch deck that meets national and international standards.'
      },
      {
        title: 'BMC Competition Mentoring',
        icon: '🗺️',
        category: 'lomba',
        link: programFormLinks.lomba,
        description:
          'Develop a strategic Business Model Canvas covering value proposition, market segmentation, and a business model that is viable and scalable.'
      },
      {
        title: 'Competition Presentation Mentoring',
        icon: '🎤',
        category: 'lomba',
        link: programFormLinks.lomba,
        description:
          'Improve public speaking, presentation flow, professional slide design, storytelling, and the ability to answer judges\' questions convincingly.'
      },
      {
        title: 'Poster Competition Mentoring',
        icon: '🎨',
        category: 'lomba',
        link: programFormLinks.lomba,
        description:
          'Create competition posters that are visually appealing and conceptually strong through composition, color, and message delivery.'
      },
      {
        title: 'Innovation / Scientific Essay Mentoring',
        icon: '✍️',
        category: 'lomba',
        link: programFormLinks.lomba,
        description:
          'Write critical, structured, and solution-based essays from topic selection and strong arguments to relevant data and competition-ready writing techniques.'
      },
      {
        title: 'Scientific Paper Mentoring',
        icon: '🔬',
        category: 'lomba',
        link: programFormLinks.lomba,
        description:
          'Prepare a systematic scientific paper based on research: topic selection, background, methodology, and final manuscript refinement for competitions.'
      },
      {
        title: 'Distinguished Scholarship Mentoring',
        icon: '🏆',
        category: 'beasiswa',
        link: programFormLinks.beasiswa,
        description:
          'Prepare for the Distinguished Scholarship selection with strong essays, academic and non-academic profiles, and stage-by-stage strategy.'
      },
      {
        title: 'Tanoto Foundation Scholarship Mentoring',
        icon: '🌟',
        category: 'beasiswa',
        link: programFormLinks.beasiswa,
        description:
          'Prepare for Tanoto Foundation selection through personal branding, impactful essays, and interview simulations grounded in real experience.'
      },
      {
        title: 'Bank Indonesia Scholarship Mentoring',
        icon: '🏦',
        category: 'beasiswa',
        link: programFormLinks.beasiswa,
        description:
          'Prepare for BI selection with administrative documents, central banking insights, interview simulations, and selection tests.'
      },
      {
        title: 'Glow & Lovely Scholarship Mentoring',
        icon: '💫',
        category: 'beasiswa',
        link: programFormLinks.beasiswa,
        description:
          'Prepare for the Glow & Lovely Scholarship with inspiring essays, a social contribution vision, and an authentic personal narrative.'
      },
      {
        title: 'Bakti Nusa Scholarship Mentoring',
        icon: '🌿',
        category: 'beasiswa',
        link: programFormLinks.beasiswa,
        description:
          'Develop leadership and social contribution profiles for Bakti Nusa selection through essays, values, and interviews.'
      },
      {
        title: 'Djarum Plus Scholarship Mentoring',
        icon: '🎖️',
        category: 'beasiswa',
        link: programFormLinks.beasiswa,
        description:
          'Prepare for Djarum Plus with strong essays, soft skills, administrative tests, aptitude tests, and comprehensive interviews.'
      },
      {
        title: 'Professional Student CV Mentoring',
        icon: '📄',
        category: 'karir',
        link: programFormLinks.karir,
        description:
          'Create a structured, relevant, and industry-standard CV that highlights experience, achievements, and abilities effectively.'
      },
      {
        title: 'Portfolio Mentoring',
        icon: '🗂️',
        category: 'karir',
        link: programFormLinks.karir,
        description:
          'Build a representative and marketable portfolio with works, projects, and professional achievements aligned to your field.'
      },
      {
        title: 'Internship / Job Interview Mentoring',
        icon: '💼',
        category: 'karir',
        link: programFormLinks.karir,
        description:
          'Improve interview readiness with structured answers, stronger confidence, and more effective communication techniques.'
      },
      {
        title: 'Career Talk: Management Trainee (MT)',
        icon: '🏢',
        category: 'karir',
        link: programFormLinks.karir,
        description:
          'Learn the MT career path: selection stages, required competencies, and strategies to improve your chances of success.'
      },
      {
        title: 'Career Talk: PCPM Bank Indonesia',
        icon: '🏛️',
        category: 'karir',
        link: programFormLinks.karir,
        description:
          'Prepare for PCPM BI with selection process insights, exam material, and a clear strategy for every stage.'
      },
      {
        title: 'Career Talk: PCS OJK',
        icon: '⚖️',
        category: 'karir',
        link: programFormLinks.karir,
        description:
          'Prepare for PCS OJK with selection standards, assessed competencies, and strategies to pass each stage.'
      }
    ],
    social: [
      {
        title: 'Sikola Competition Scholarship',
        icon: '🎗️',
        category: 'social',
        link: programFormLinks.scholarship,
        description:
          'Support for high-achieving students with limited access to mentoring. Selected participants receive intensive competition mentoring.'
      },
      {
        title: 'Sikola Talks & Webinar',
        icon: '🎙️',
        category: 'social',
        link: programFormLinks.talks,
        description:
          'Knowledge-sharing sessions through talks and webinars with inspiring speakers about competitions, scholarships, and careers.'
      },
      {
        title: 'Sikola Internship eXperience',
        icon: '🏗️',
        category: 'social',
        link: programFormLinks.internship,
        description:
          'An internship opportunity at Sikola Indonesia to join real projects, develop practical skills, and build a relevant portfolio.'
      },
      {
        title: 'Sikola Open Mentor',
        icon: '🧑‍🏫',
        category: 'social',
        link: programFormLinks.mentor,
        description:
          'An opportunity for high-achieving individuals to join as mentors, guide participants, and create real impact.'
      },
      {
        title: 'Sikola Open Collaboration',
        icon: '🤝',
        category: 'social',
        link: programFormLinks.collaboration,
        description:
          'A collaboration program for organizations, communities, or institutions that want to partner with Sikola Indonesia.'
      }
    ]
  },
  mentors: {
    label: 'Mentors',
    heading: 'Sikola Indonesia Mentors',
    subtext: 'Guided by accomplished mentors with proven winning records',
    achievementLabel: 'Achievements',
    showMore: 'View More',
    showLess: 'Hide',
    items: mentorProfiles
  },
  contact: {
    heading: 'Contact Us',
    subtext: 'We are ready to help. Reach out with any questions you may have.',
    emailLabel: 'Email',
    phoneLabel: 'Phone / WhatsApp',
    addressLabel: 'Address',
    whatsappChannelLabel: 'Sikola WhatsApp Channel',
    whatsappDescription:
      'Get program updates, class schedules, and the latest announcements directly from our official channel.',
    socialHeading: 'Follow Us',
    whatsappButton: 'Join Now',
    socialButtons: {
      instagram: 'Instagram',
      tiktok: 'TikTok',
      linkedin: 'LinkedIn'
    },
    faqLabel: 'FAQ',
    faqHeading: 'Frequently Asked Questions (FAQ)',
    faq: [
      {
        question: 'How do I register for a program?',
        answer:
          'Click the Main Programs button, find the class or program you need, click Register Now, complete the registration form, and then confirm with the admin.'
      },
      {
        question: 'How much does a mentoring class cost?',
        answer:
          'Mentoring class fees are relative and listed in each mentoring class registration form.'
      },
      {
        question: 'Can anyone access the social programs?',
        answer:
          'Yes, all social programs are open to anyone as long as they meet the stated criteria.'
      }
    ]
  },
  footer: {
    tagline: "Let's Grow To Be Successful",
    quickLinksHeading: 'Quick Links',
    contactHeading: 'Contact',
    copyright: '© 2025 Sikola Indonesia. All rights reserved. | Made with care for Indonesian students'
  }
}
