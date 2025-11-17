import { generatePageMetadata } from '../lib/metadata';

export const metadata = generatePageMetadata(
  'Nos Réalisations',
  'Découvrez nos projets : sites web, applications, branding et design. Des réalisations qui illustrent notre expertise et notre créativité.',
  '/realisations'
);

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
