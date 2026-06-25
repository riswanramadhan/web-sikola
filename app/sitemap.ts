import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date('2026-06-26T00:00:00+08:00'),
      changeFrequency: 'weekly',
      priority: 1
    }
  ]
}
