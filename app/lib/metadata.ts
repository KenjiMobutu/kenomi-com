import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kenomi.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kenomi Communication | Agence Web & Digital',
    template: '%s | Kenomi Communication',
  },
  description:
    'Kenomi Communication : Agence spécialisée dans la conception de sites web, branding, UX/UI design, SEO et accompagnement digital. Innovation, simplicité et précision.',
  keywords: [
    'agence web',
    'conception web',
    'développement web',
    'branding',
    'identité visuelle',
    'UX/UI design',
    'SEO',
    'optimisation',
    'digital',
    'accompagnement',
    'Paris',
    'France',
    'Next.js',
    'React',
    'sites web modernes',
  ],
  authors: [{ name: 'Kenomi Communication' }],
  creator: 'Kenomi Communication',
  publisher: 'Kenomi Communication',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    title: 'Kenomi Communication | Agence Web & Digital',
    description:
      'Conception de sites web, branding, UX/UI design, SEO et accompagnement digital. Innovation, simplicité et précision.',
    siteName: 'Kenomi Communication',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kenomi Communication | Agence Web & Digital',
    description:
      'Conception de sites web, branding, UX/UI design, SEO et accompagnement digital.',
    creator: '@kenomi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Kenomi Communication',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
