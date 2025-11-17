'use client';

import { motion } from 'framer-motion';
import { Target, Users, Heart, Award, Zap, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, en accordant une attention méticuleuse aux détails.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Toujours à la pointe des technologies et des tendances digitales pour vous offrir le meilleur.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Notre passion pour le design et le développement web se reflète dans chaque création.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous travaillons main dans la main avec nos clients pour concrétiser leur vision.',
    },
    {
      icon: Zap,
      title: 'Agilité',
      description: 'Méthodologie agile pour une livraison rapide et des ajustements continus.',
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Des standards de qualité élevés pour garantir des résultats durables et performants.',
    },
  ];

  const team = [
    {
      stat: '50+',
      label: 'Projets réalisés',
    },
    {
      stat: '40+',
      label: 'Clients satisfaits',
    },
    {
      stat: '5+',
      label: 'Années d\'expérience',
    },
    {
      stat: '98%',
      label: 'Taux de satisfaction',
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
              À propos de <span className="bg-linear-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Kenomi</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Votre partenaire digital pour transformer vos idées en réalité
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Notre <span className="bg-linear-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Chez Kenomi, nous croyons que chaque entreprise mérite une présence digitale exceptionnelle.
                Notre mission est de créer des solutions web innovantes qui allient esthétique, performance et
                fonctionnalité pour propulser votre business vers de nouveaux sommets.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  rotateX: 5
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="p-8 bg-linear-to-br from-emerald-50 to-sky-50 rounded-2xl border border-emerald-100"
              >
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Notre Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  Devenir la référence en matière de création digitale en Belgique et au-delà,
                  en offrant des solutions web qui dépassent les attentes et créent un impact
                  mesurable pour nos clients.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  rotateX: 5
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="p-8 bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100"
              >
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Notre Approche</h3>
                <p className="text-slate-600 leading-relaxed">
                  Une méthodologie centrée sur l&apos;utilisateur, combinant design moderne,
                  technologies de pointe et stratégie digitale pour créer des expériences
                  web mémorables et performantes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Nos <span className="bg-linear-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">Valeurs</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  rotateX: 5
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotateY: 360
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-linear-to-br from-emerald-500 to-sky-500 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <value.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-linear-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Kenomi en <span className="bg-linear-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">chiffres</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.05
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold bg-linear-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <div className="text-slate-300 text-lg">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Travaillons ensemble sur votre projet
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Prêt à donner vie à vos idées ? Contactez-nous pour discuter de votre projet.
            </p>
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -4,
                rotateX: 5
              }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-emerald-500 to-sky-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Contactez-nous
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
