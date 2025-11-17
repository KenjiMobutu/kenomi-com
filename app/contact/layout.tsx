import { generatePageMetadata } from '../lib/metadata';

export const metadata = generatePageMetadata(
  'Contact',
  'Contactez Kenomi Communication pour discuter de votre projet digital. Notre équipe est à votre écoute pour répondre à vos besoins.',
  '/contact'
);

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
