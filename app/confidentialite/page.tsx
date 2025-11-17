'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react';

export default function PolitiqueConfidentialite() {
  const sections = [
    {
      icon: Database,
      title: 'Collecte des données',
      content: [
        'Nous collectons les données personnelles que vous nous fournissez directement lors de l\'utilisation de nos services.',
        'Les informations collectées peuvent inclure : nom, prénom, adresse email, numéro de téléphone, adresse postale, et informations professionnelles.',
        'Nous collectons également des données techniques telles que votre adresse IP, type de navigateur, et pages visitées pour améliorer nos services.',
      ],
    },
    {
      icon: Lock,
      title: 'Utilisation des données',
      content: [
        'Vos données personnelles sont utilisées pour répondre à vos demandes et vous fournir nos services.',
        'Nous utilisons vos informations pour vous envoyer des communications marketing uniquement si vous avez consenti à les recevoir.',
        'Les données techniques sont utilisées pour analyser l\'utilisation de notre site et améliorer l\'expérience utilisateur.',
        'Nous n\'utilisons jamais vos données à des fins non consenties ou incompatibles avec les objectifs initiaux.',
      ],
    },
    {
      icon: Shield,
      title: 'Protection des données',
      content: [
        'Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données.',
        'Les données sont stockées sur des serveurs sécurisés avec chiffrement SSL/TLS.',
        'L\'accès à vos données personnelles est strictement limité aux personnes autorisées.',
        'Nous effectuons des audits de sécurité réguliers pour garantir la protection de vos informations.',
      ],
    },
    {
      icon: Eye,
      title: 'Partage des données',
      content: [
        'Nous ne vendons, n\'échangeons ni ne louons vos données personnelles à des tiers.',
        'Vos données peuvent être partagées avec nos prestataires de services techniques (hébergement, analytics) dans le cadre strict de l\'exécution de nos services.',
        'Nous pouvons divulguer vos informations si la loi l\'exige ou pour protéger nos droits légaux.',
        'Tous nos partenaires sont tenus de respecter la confidentialité de vos données.',
      ],
    },
    {
      icon: UserCheck,
      title: 'Vos droits',
      content: [
        'Conformément au RGPD, vous disposez d\'un droit d\'accès à vos données personnelles.',
        'Vous avez le droit de rectifier ou de supprimer vos données à tout moment.',
        'Vous pouvez vous opposer au traitement de vos données ou demander la limitation de celui-ci.',
        'Vous avez le droit à la portabilité de vos données.',
        'Vous pouvez retirer votre consentement à tout moment pour le traitement de vos données.',
        'Pour exercer ces droits, contactez-nous à : contact@kenomi.com',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Cookies',
      content: [
        'Notre site utilise des cookies pour améliorer votre expérience de navigation.',
        'Les cookies essentiels sont nécessaires au bon fonctionnement du site.',
        'Les cookies analytiques nous aident à comprendre comment vous utilisez notre site.',
        'Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.',
        'Le refus de certains cookies peut affecter votre expérience sur notre site.',
      ],
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
              Politique de <span className="bg-linear-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Confidentialité</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Votre vie privée est notre priorité
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 bg-linear-to-br from-emerald-50 to-sky-50 rounded-2xl border border-emerald-200">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Chez Kenomi, nous nous engageons à protéger et à respecter votre vie privée. Cette politique de
                confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos données
                personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
              <p className="text-slate-600 leading-relaxed">
                En utilisant notre site web et nos services, vous acceptez les pratiques décrites dans cette politique.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                  scale: 1.01
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotateY: 180
                      }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 bg-linear-to-br from-emerald-500 to-sky-500 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <section.icon className="text-white" size={28} />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-slate-800">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0 mt-2"></div>
                        <p className="text-slate-600 leading-relaxed">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retention */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              Conservation des données
            </h2>
            <div className="p-6 bg-slate-50 rounded-xl">
              <p className="text-slate-600 leading-relaxed mb-4">
                Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour les finalités
                pour lesquelles elles ont été collectées, sauf si la loi exige ou permet une période de conservation plus longue.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Les données des clients actifs sont conservées pendant la durée de la relation commerciale plus 3 ans.
                Les données de prospection sont conservées pendant 3 ans à compter du dernier contact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modifications */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              Modifications de la politique
            </h2>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <p className="text-slate-600 leading-relaxed mb-4">
                Nous pouvons modifier cette politique de confidentialité de temps à autre. Toute modification sera
                publiée sur cette page avec une date de mise à jour actualisée.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Nous vous encourageons à consulter régulièrement cette page pour rester informé de la manière dont
                nous protégeons vos données personnelles.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              Nous contacter
            </h2>
            <div className="p-8 bg-linear-to-br from-emerald-50 to-sky-50 rounded-2xl border border-emerald-200">
              <p className="text-slate-700 leading-relaxed mb-4">
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits
                relatifs à vos données personnelles, vous pouvez nous contacter :
              </p>
              <div className="space-y-2">
                <p className="text-slate-700">
                  <strong>Email :</strong> <a href="mailto:contact@kenomi.com" className="text-emerald-600 hover:underline">contact@kenomi.com</a>
                </p>
                <p className="text-slate-700">
                  <strong>Adresse :</strong> Bruxelles, Belgique
                </p>
              </div>
            </div>

            {/* Date */}
            <div className="mt-8 p-6 bg-slate-100 rounded-xl">
              <p className="text-slate-600 text-sm">
                <strong className="text-slate-800">Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-BE', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
