export const SITE_ORIGIN = 'https://sikola-indonesia.dekatlokal.com'
export const SITE_URL = `${SITE_ORIGIN}/`
export const SITE_NAME = 'Sikola Indonesia'
export const SITE_TITLE = 'Sikola Indonesia | Platform Mentoring Mahasiswa Indonesia'
export const SITE_DESCRIPTION =
  'Sikola Indonesia adalah platform mentoring mahasiswa untuk kompetisi, beasiswa, dan persiapan karier dengan bimbingan personal dari mentor berprestasi.'
export const SITE_SHORT_DESCRIPTION =
  'Platform mentoring mahasiswa Indonesia untuk kompetisi, beasiswa, dan persiapan karier.'
export const OG_IMAGE_PATH = '/images/sikola-indonesia-og.png'
export const BRAND_LOGO_PATH = '/images/logo-sikola.png'

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString()
}
