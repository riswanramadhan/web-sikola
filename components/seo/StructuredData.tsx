import { id } from '@/lib/i18n/id'
import { contactLinks } from '@/lib/i18n/shared'
import {
  absoluteUrl,
  BRAND_LOGO_PATH,
  OG_IMAGE_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SHORT_DESCRIPTION,
  SITE_TITLE,
  SITE_URL
} from '@/lib/seo/constants'

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const organizationId = `${SITE_URL}#organization`
const websiteId = `${SITE_URL}#website`
const webpageId = `${SITE_URL}#webpage`
const logoId = `${SITE_URL}#logo`
const primaryImageId = `${SITE_URL}#primaryimage`
const programUrl = `${SITE_URL}#programs`
const mentorUrl = `${SITE_URL}#mentors`
const contactUrl = `${SITE_URL}#contact`

const socialLinks = [
  contactLinks.instagram,
  contactLinks.tiktok,
  contactLinks.linkedin,
  contactLinks.whatsappChannel
]

const mentoringCourses = id.programs.mentoring.map((program) => ({
  '@type': 'Course',
  '@id': `${SITE_URL}#course-${slugify(program.title)}`,
  name: program.title,
  description: program.description,
  url: programUrl,
  provider: {
    '@id': organizationId
  },
  educationalLevel: 'Higher education',
  teaches: program.title,
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'Mahasiswa'
  },
  inLanguage: 'id-ID'
}))

const allPrograms = [...id.programs.mentoring, ...id.programs.social]

const programItemList = {
  '@type': 'ItemList',
  '@id': `${SITE_URL}#program-list`,
  name: 'Program Mentoring Sikola Indonesia',
  numberOfItems: allPrograms.length,
  itemListElement: allPrograms.map((program, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: programUrl,
    name: program.title,
    description: program.description
  }))
}

const serviceSchema = {
  '@type': 'Service',
  '@id': `${SITE_URL}#platform-mentoring-mahasiswa`,
  name: 'Platform Mentoring Mahasiswa',
  serviceType: 'Mentoring mahasiswa untuk lomba, beasiswa, dan karier',
  provider: {
    '@id': organizationId
  },
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia'
  },
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'Mahasiswa'
  },
  description:
    'Layanan mentoring personal untuk mahasiswa yang ingin menyiapkan kompetisi, beasiswa, CV, portofolio, interview, dan karier.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Katalog Program Sikola Indonesia',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Mentoring Lomba',
        itemListElement: id.programs.mentoring
          .filter((program) => program.category === 'lomba')
          .map((program) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: program.title,
              description: program.description
            }
          }))
      },
      {
        '@type': 'OfferCatalog',
        name: 'Mentoring Beasiswa',
        itemListElement: id.programs.mentoring
          .filter((program) => program.category === 'beasiswa')
          .map((program) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: program.title,
              description: program.description
            }
          }))
      },
      {
        '@type': 'OfferCatalog',
        name: 'Mentoring Karier',
        itemListElement: id.programs.mentoring
          .filter((program) => program.category === 'karir')
          .map((program) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: program.title,
              description: program.description
            }
          }))
      }
    ]
  }
}

const mentorPeople = id.mentors.items.map((mentor) => ({
  '@type': 'Person',
  '@id': `${SITE_URL}#mentor-${slugify(mentor.name)}`,
  name: mentor.name,
  jobTitle: mentor.role,
  url: mentorUrl,
  image: absoluteUrl(mentor.photo),
  affiliation: {
    '@type': 'EducationalOrganization',
    name: mentor.university
  },
  worksFor: {
    '@id': organizationId
  },
  description: `${mentor.name} adalah ${mentor.role} di Sikola Indonesia dari ${mentor.university}.`,
  award: mentor.topAchievements
}))

const founderId = `${SITE_URL}#mentor-${slugify(id.about.founderName)}`

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ImageObject',
      '@id': logoId,
      url: absoluteUrl(BRAND_LOGO_PATH),
      contentUrl: absoluteUrl(BRAND_LOGO_PATH),
      caption: 'Logo Sikola Indonesia platform mentoring mahasiswa'
    },
    {
      '@type': 'ImageObject',
      '@id': primaryImageId,
      url: absoluteUrl(OG_IMAGE_PATH),
      contentUrl: absoluteUrl(OG_IMAGE_PATH),
      width: 1200,
      height: 630,
      caption: 'Sikola Indonesia platform mentoring mahasiswa untuk lomba beasiswa dan karier'
    },
    {
      '@type': 'EducationalOrganization',
      '@id': organizationId,
      name: SITE_NAME,
      alternateName: [
        'SIKOLA Indonesia',
        'SikolaID',
        'Sikola Indonesia Mentoring',
        'Sikola Mentoring',
        'Platform Mentoring Mahasiswa Indonesia'
      ],
      url: SITE_URL,
      logo: {
        '@id': logoId
      },
      image: {
        '@id': primaryImageId
      },
      email: 'sikolaindonesia@gmail.com',
      telephone: '+6285185663696',
      slogan: "Let's Grow To Be Successful",
      foundingDate: '2025-01-12',
      founder: {
        '@id': founderId
      },
      description: SITE_DESCRIPTION,
      disambiguatingDescription:
        'Sikola Indonesia adalah brand platform mentoring mahasiswa Indonesia yang berfokus pada kompetisi, beasiswa, dan pengembangan karier.',
      areaServed: {
        '@type': 'Country',
        name: 'Indonesia'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jl. Utama Unhas, Tamalanrea Indah',
        addressLocality: 'Kota Makassar',
        addressRegion: 'Sulawesi Selatan',
        addressCountry: 'ID'
      },
      sameAs: socialLinks
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: SITE_NAME,
      alternateName: ['SIKOLA Indonesia', 'SikolaID', 'Sikola Indonesia Mentoring'],
      url: SITE_URL,
      description: SITE_SHORT_DESCRIPTION,
      publisher: {
        '@id': organizationId
      },
      inLanguage: 'id-ID'
    },
    {
      '@type': 'WebPage',
      '@id': webpageId,
      name: SITE_TITLE,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      isPartOf: {
        '@id': websiteId
      },
      about: {
        '@id': organizationId
      },
      primaryImageOfPage: {
        '@id': primaryImageId
      },
      image: {
        '@id': primaryImageId
      },
      mainEntity: {
        '@id': `${SITE_URL}#platform-mentoring-mahasiswa`
      },
      inLanguage: 'id-ID'
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: SITE_NAME,
          item: SITE_URL
        }
      ]
    },
    serviceSchema,
    programItemList,
    ...mentoringCourses,
    ...mentorPeople,
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}#faq`,
      mainEntity: id.contact.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@type': 'ContactPoint',
      '@id': `${SITE_URL}#contact-point`,
      contactType: 'customer support',
      email: 'sikolaindonesia@gmail.com',
      telephone: '+6285185663696',
      areaServed: 'ID',
      availableLanguage: ['id', 'en'],
      url: contactUrl
    }
  ]
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}
