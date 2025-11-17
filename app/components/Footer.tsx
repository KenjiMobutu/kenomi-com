'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Conception Web', href: '/services#web-design' },
    { label: 'Branding', href: '/services#branding' },
    { label: 'UX/UI Design', href: '/services#ux-ui' },
    { label: 'SEO', href: '/services#seo' },
  ];

  const company = [
    { label: 'À propos', href: '/about' },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  const legal = [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
    { label: 'CGV', href: '/cgv' },
  ];

  const socials = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <Image src="/noBgWhite.png" alt="Kenomi Logo" width={180} height={30} priority />
              <span className="text-white-800 ml-1">Ꮤ𐌄𐌁 & 𐌂Ꝋ𐌌𐌌𐌵𐌍𐌉𐌂𐌀𐌕𐌉Ꝋ𐌍</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Agence spécialisée dans la conception de sites web et les services
              d&apos;accompagnement digital. Innovation, simplicité et précision.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="text-emerald-400" />
                <a
                  href="mailto:contact@kenomi.com"
                  className="hover:text-emerald-400 transition-colors"
                >
                  contact@kenomi.com
                </a>
              </div>
              {/* <div className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="text-emerald-400" />
                <a
                  href="tel:+33123456789"
                  className="hover:text-emerald-400 transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </div> */}
              <div className="flex items-center space-x-2 text-sm">
                <MapPin size={16} className="text-emerald-400" />
                <span>Bruxelles, Belgique</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} Kenomi Communication. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800 hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
