import { generatePageMetadata } from '../lib/metadata';

export const metadata = generatePageMetadata(
  'Nos Services',
  'Découvrez nos services : Conception web, branding, UX/UI design, SEO, développement mobile et accompagnement digital. Solutions complètes pour votre projet.',
  '/services'
);

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
