'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code, Palette, TrendingUp } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  objective: string;
  technologies: string[];
  results: string[];
  link?: string;
}

export default function Realisations() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Mode',
      category: 'web',
      description: 'Plateforme e-commerce complète pour une marque de mode',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Next.js', 'Stripe'],
      objective: 'Créer une expérience d&apos;achat fluide et moderne pour une marque de mode émergente.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Sanity CMS'],
      results: [
        'Augmentation de 150% des ventes en ligne',
        'Temps de chargement réduit de 60%',
        'Taux de conversion amélioré de 35%',
      ],
    },
    {
      id: 2,
      title: 'Application SaaS',
      category: 'web',
      description: 'Solution SaaS de gestion de projets pour équipes',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['SaaS', 'React', 'Node.js'],
      objective: 'Développer une application web collaborative pour la gestion de projets en équipe.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      results: [
        '500+ utilisateurs actifs mensuels',
        'Performance 99.9% uptime',
        'Interface notée 4.8/5 par les utilisateurs',
      ],
    },
    {
      id: 3,
      title: 'Identité Visuelle - Tech Startup',
      category: 'branding',
      description: 'Création d&apos; identité complète pour une startup tech',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Branding', 'Logo', 'Charte graphique'],
      objective: 'Créer une identité visuelle moderne et impactante reflétant l&apos;innovation de la startup.',
      technologies: ['Adobe Illustrator', 'Figma', 'Adobe InDesign'],
      results: [
        'Reconnaissance de marque accrue de 200%',
        'Guide de style complet en 40 pages',
        'Déploiement sur 15+ supports',
      ],
    },
    {
      id: 4,
      title: 'Site Vitrine Architecture',
      category: 'web',
      description: 'Site vitrine élégant pour cabinet d&apos;architecture',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      tags: ['Vitrine', 'Design', 'Portfolio'],
      objective: 'Concevoir un site vitrine mettant en valeur les projets architecturaux avec élégance.',
      technologies: ['Next.js', 'Framer Motion', 'Three.js', 'Contentful'],
      results: [
        'Score Lighthouse de 98/100',
        'Temps de visite moyen +180%',
        '50+ nouveaux contacts qualifiés/mois',
      ],
    },
    {
      id: 5,
      title: 'Application Mobile Fitness',
      category: 'mobile',
      description: 'App de coaching sportif personnalisé',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      tags: ['Mobile', 'React Native', 'Fitness'],
      objective: 'Développer une application mobile de coaching sportif avec suivi personnalisé.',
      technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit/Google Fit'],
      results: [
        '10,000+ téléchargements en 3 mois',
        'Note moyenne de 4.7/5 sur les stores',
        'Engagement quotidien de 65%',
      ],
    },
    {
      id: 6,
      title: 'Refonte UX/UI - Banque en ligne',
      category: 'ux-ui',
      description: 'Refonte complète de l&apos;expérience utilisateur',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['UX/UI', 'Design System', 'Wireframes'],
      objective: 'Moderniser l&apos;interface d&apos;une plateforme bancaire pour améliorer l&apos;expérience utilisateur.',
      technologies: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
      results: [
        'Réduction de 40% des erreurs utilisateur',
        'Satisfaction client passée de 3.2 à 4.6/5',
        'Design system complet avec 200+ composants',
      ],
    },
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets', count: projects.length },
    { id: 'web', label: 'Développement Web', count: projects.filter(p => p.category === 'web').length },
    { id: 'branding', label: 'Branding', count: projects.filter(p => p.category === 'branding').length },
    { id: 'ux-ui', label: 'UX/UI Design', count: projects.filter(p => p.category === 'ux-ui').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <main className="min-h-screen pt-30">
      {/* Hero Section */}
      <section className="relative py-24 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos <span className="bg-linear-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Réalisations</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Découvrez nos projets et l&apos;impact que nous créons pour nos clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-slate-200 sticky top-20 z-40 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-linear-to-r from-emerald-500 to-sky-500 text-white shadow-lg scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.label} <span className="ml-1 opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{
                    y: -12,
                    rotateX: 5,
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: 1000
                  }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-slate-200">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full font-semibold text-slate-900">
                        Voir le projet
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-slate-800 group-hover:text-emerald-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8"
            >
              {/* Modal Header with Image */}
              <div className="relative h-80 bg-slate-200">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedProject.image})` }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <X size={24} className="text-slate-900" />
                </button>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-4xl font-bold mb-2">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                {/* Objective */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-sky-500 rounded-lg flex items-center justify-center">
                      <Code className="text-white" size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Objectif</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedProject.objective}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Palette className="text-white" size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Technologies</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-linear-to-br from-slate-100 to-slate-50 border border-slate-200 text-slate-700 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="text-white" size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Résultats</h3>
                  </div>
                  <ul className="space-y-3">
                    {selectedProject.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                {selectedProject.link && (
                  <div className="pt-6 border-t border-slate-200">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-emerald-500 to-sky-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                      Visiter le site
                      <ExternalLink size={18} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
