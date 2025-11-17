'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Code,
  Palette,
  Layout,
  TrendingUp,
  Users,
  Smartphone,
  Search,
  Gauge,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'web-design',
      icon: Code,
      title: 'Conception et Développement Web',
      description: 'Sites web sur-mesure, performants et évolutifs',
      details: [
        'Sites vitrine et institutionnels',
        'E-commerce et plateformes',
        'Applications web progressives (PWA)',
        'Développement sur-mesure',
        'Technologies modernes (Next.js, React, Node.js)',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'branding',
      icon: Palette,
      title: 'Identité Visuelle et Branding',
      description: 'Créez une marque forte et mémorable',
      details: [
        'Création de logo et charte graphique',
        'Guide de style et brandbook',
        'Design d&apos;éléments visuels',
        'Cohérence de marque multi-canal',
        'Refonte d&apos;identité existante',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'ux-ui',
      icon: Layout,
      title: 'UX/UI Design',
      description: 'Expériences utilisateur intuitives et engageantes',
      details: [
        'Recherche utilisateur et personas',
        'Architecture de l&apos;information',
        'Wireframes et prototypes interactifs',
        'Design d&apos;interface moderne',
        'Tests utilisateurs et itérations',
      ],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'seo',
      icon: TrendingUp,
      title: 'Optimisation SEO et Performance',
      description: 'Maximisez votre visibilité en ligne',
      details: [
        'Audit SEO complet',
        'Optimisation technique et contenu',
        'Stratégie de mots-clés',
        'Performance et vitesse',
        'Rapports et suivi régulier',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Développement Mobile',
      description: 'Applications mobiles natives et cross-platform',
      details: [
        'Applications iOS et Android',
        'React Native et Flutter',
        'Design responsive et adaptatif',
        'Intégration API et services',
        'Publication sur les stores',
      ],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 'consulting',
      icon: Users,
      title: 'Accompagnement Digital',
      description: 'Stratégie et conseil pour votre transformation digitale',
      details: [
        'Audit et stratégie digitale',
        'Formation et accompagnement',
        'Conseil en technologies',
        'Gestion de projet web',
        'Support et maintenance',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Découverte',
      description: 'Nous analysons vos besoins, objectifs et contraintes pour définir la meilleure approche.',
    },
    {
      number: '02',
      title: 'Stratégie',
      description: 'Élaboration d&apos;une stratégie sur-mesure et d&apos;un plan d&apos;action détaillé.',
    },
    {
      number: '03',
      title: 'Création',
      description: 'Conception et développement avec des points de validation réguliers.',
    },
    {
      number: '04',
      title: 'Lancement',
      description: 'Déploiement, tests finaux et mise en ligne de votre projet.',
    },
    {
      number: '05',
      title: 'Suivi',
      description: 'Accompagnement post-lancement, maintenance et optimisations continues.',
    },
  ];

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
              Nos <span className="bg-linear-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Des solutions digitales complètes pour donner vie à vos projets et propulser votre présence en ligne
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000
                }}
                id={service.id}
                className="group relative bg-white rounded-2xl border-2 border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotateY: 360
                    }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <service.icon className="text-white" size={32} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre <span className="bg-linear-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">Processus</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de votre projet
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex gap-8 mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index < process.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-linear-to-b from-emerald-500 to-sky-500"></div>
                )}

                {/* Number */}
                <motion.div
                  className="shrink-0"
                  whileHover={{
                    scale: 1.15,
                    rotateY: 360
                  }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-500 to-sky-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                  whileHover={{
                    y: -4,
                    scale: 1.02
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Pourquoi choisir <span className="bg-linear-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">Kenomi</span> ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Gauge,
                  title: 'Performance optimale',
                  description: 'Sites ultra-rapides et optimisés pour le référencement',
                },
                {
                  icon: Search,
                  title: 'SEO intégré',
                  description: 'Visibilité maximale sur les moteurs de recherche',
                },
                {
                  icon: Smartphone,
                  title: '100% Responsive',
                  description: 'Expérience parfaite sur tous les appareils',
                },
                {
                  icon: Users,
                  title: 'Support dédié',
                  description: 'Accompagnement personnalisé tout au long du projet',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                    rotateX: 5
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="flex gap-4 p-6 rounded-xl bg-slate-50 hover:bg-linear-to-br hover:from-emerald-50 hover:to-sky-50 transition-all duration-300"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-emerald-500 to-sky-500 flex items-center justify-center">
                      <item.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-slate-800">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl mb-10 text-slate-300">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <motion.div
              whileHover={{
                scale: 1.08,
                y: -6,
                rotateX: 10
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-emerald-500 to-sky-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Demander un devis
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
