'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, Palette, TrendingUp, Users, Zap, Target } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Code,
      title: 'Conception Web',
      description: 'Sites web modernes, performants et sur-mesure, adaptés à vos besoins.',
    },
    {
      icon: Palette,
      title: 'Branding & Identité',
      description: 'Création d&apos;identités visuelles uniques qui marquent les esprits.',
    },
    {
      icon: Target,
      title: 'UX/UI Design',
      description: 'Expériences utilisateur intuitives et interfaces élégantes.',
    },
    {
      icon: TrendingUp,
      title: 'SEO & Performance',
      description: 'Optimisation pour les moteurs de recherche et performances maximales.',
    },
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Toujours à la pointe des technologies et des tendances digitales.',
    },
    {
      icon: Target,
      title: 'Précision',
      description: 'Attention méticuleuse aux détails pour des résultats parfaits.',
    },
    {
      icon: Users,
      title: 'Accompagnement',
      description: 'Un partenaire à vos côtés à chaque étape de votre projet.',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-white to-emerald-50">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 -right-48 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transformez votre{' '}
                <span className="bg-linear-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
                  vision digitale
                </span>{' '}
                en réalité
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed"
            >
              Agence spécialisée dans la conception de sites web et l&apos;accompagnement digital.
              <br />
              <span className="font-semibold text-slate-700">Innovation, simplicité, précision.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  y: -4
                }}
                whileTap={{ scale: 0.98 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-linear-to-r from-emerald-500 to-sky-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                >
                  Démarrer un projet
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: -5,
                  y: -4
                }}
                whileTap={{ scale: 0.98 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Link
                  href="/realisations"
                  className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-500 hover:shadow-lg transition-all duration-300"
                >
                  Voir nos réalisations
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nos <span className="bg-linear-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Des solutions digitales complètes pour propulser votre présence en ligne
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000
                }}
                className="group p-8 rounded-2xl bg-linear-to-br from-white to-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotateY: 360
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-linear-to-br from-emerald-500 to-sky-500 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <service.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-emerald-500 font-semibold hover:gap-4 transition-all duration-300"
            >
              Découvrir tous nos services
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre <span className="bg-linear-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Approche</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Des valeurs qui guident chacun de nos projets
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  rotateY: 5
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000
                }}
                className="text-center p-8"
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotateZ: 360
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-linear-to-br from-emerald-500 to-sky-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <value.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-br from-emerald-500 via-sky-500 to-emerald-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à donner vie à votre projet ?
            </h2>
            <p className="text-xl mb-10 text-emerald-50">
              Discutons ensemble de vos objectifs et créons quelque chose d&apos;exceptionnel.
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Contactez-nous
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Add blob animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}
