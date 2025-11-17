'use client';

import { motion } from 'framer-motion';
import { Building, Mail, MapPin, Phone } from 'lucide-react';

export default function MentionsLegales() {
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
              Mentions <span className="bg-linear-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Légales</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Informations légales et réglementaires
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Éditeur du site */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                1. Éditeur du site
              </h2>
              <div className="p-6 bg-slate-50 rounded-xl space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="text-emerald-500 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-slate-800">Kenomi</p>
                    <p className="text-slate-600">Agence de création web et communication digitale</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-emerald-500 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-slate-600">Bruxelles, Belgique</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-emerald-500 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-slate-600">contact@kenomi.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Directeur de publication */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                2. Directeur de publication
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Le directeur de la publication du site est le représentant légal de Kenomi.
              </p>
            </motion.div>

            {/* Hébergement */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                3. Hébergement
              </h2>
              <div className="p-6 bg-slate-50 rounded-xl">
                <p className="text-slate-600 leading-relaxed mb-2">
                  <strong className="text-slate-800">Hébergeur :</strong> Vercel Inc.
                </p>
                <p className="text-slate-600 leading-relaxed mb-2">
                  <strong className="text-slate-800">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline">vercel.com</a>
                </p>
              </div>
            </motion.div>

            {/* Propriété intellectuelle */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                4. Propriété intellectuelle
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                L&apos;ensemble de ce site relève de la législation belge et internationale sur le droit d&apos;auteur
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les
                documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-slate-600 leading-relaxed">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </motion.div>

            {/* Données personnelles */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                5. Données personnelles
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit
                d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Pour exercer ces droits, vous pouvez nous contacter par email à l&apos;adresse : contact@kenomi.com
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Pour plus d&apos;informations, consultez notre{' '}
                <a href="/politique-confidentialite" className="text-emerald-500 hover:underline font-semibold">
                  Politique de confidentialité
                </a>
                .
              </p>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                6. Cookies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Le site peut être amené à vous demander l&apos;acceptation de cookies pour des besoins de statistiques
                et d&apos;affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site
                que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple
                fichier texte auquel un serveur accède pour lire et enregistrer des informations.
              </p>
            </motion.div>

            {/* Limitation de responsabilité */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                7. Limitation de responsabilité
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement
                remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Kenomi ne pourra être tenu responsable des dommages directs et indirects causés au matériel de
                l&apos;utilisateur, lors de l&apos;accès au site, et résultant soit de l&apos;utilisation d&apos;un matériel ne
                répondant pas aux spécifications indiquées, soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
              </p>
            </motion.div>

            {/* Droit applicable */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                8. Droit applicable
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Les présentes mentions légales sont soumises au droit belge. En cas de litige et à défaut d&apos;accord
                amiable, le litige sera porté devant les tribunaux belges conformément aux règles de compétence en vigueur.
              </p>
            </motion.div>

            {/* Date de mise à jour */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl"
            >
              <p className="text-slate-600 text-sm">
                <strong className="text-slate-800">Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-BE', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
