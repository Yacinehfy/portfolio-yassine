import { useState } from 'react';
import { projets, personalInfo } from '../data/portfolio';
import { ExternalLink, FileText, Download, ChevronDown, ChevronUp, Target, Users, Layers, ThumbsUp } from 'lucide-react';
import { useInView } from '../hooks/usePortfolio';

function ProjectCard({ projet }) {
  const [expanded, setExpanded] = useState(true);
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="bg-white dark:bg-[#0F172A]/60 border border-[#06B6D4]/20 rounded-2xl overflow-hidden shadow-md">
        {/* Header */}
        <div className="bg-[#06B6D4]/10 px-6 py-5">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{projet.icon}</span>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#0F172A]/50 dark:text-white/40 mb-0.5">
                  {projet.type}
                </div>
                <h2 className="font-display text-2xl font-bold text-[#06B6D4] leading-tight">{projet.title}</h2>
              </div>
            </div>
            <span className="bg-[#06B6D4] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
              {projet.annee}
            </span>
          </div>
          <p className="text-sm text-[#0F172A]/60 dark:text-white/50">{projet.sousTitre} — {projet.etablissement}</p>
        </div>

        <div className="px-6 py-5">
          {/* Description */}
          <p className="text-sm text-[#0F172A]/65 dark:text-white/55 leading-relaxed mb-5 border-l-2 border-[#E2E8F0] pl-4">
            {projet.description}
          </p>

          {/* Toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm font-semibold text-[#06B6D4] hover:opacity-80 transition-opacity mb-2"
          >
            {expanded ? <><ChevronUp size={16} /> Réduire les détails</> : <><ChevronDown size={16} /> Voir tous les détails</>}
          </button>

          {expanded && (
            <div className="space-y-6 border-t border-[#E2E8F0]/50 dark:border-white/10 pt-6 animate-fade-up">

              {/* Objectifs */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target size={16} className="text-[#06B6D4]" />
                  <h3 className="font-semibold text-[#0F172A] dark:text-white text-sm">Objectifs du projet</h3>
                </div>
                <ul className="space-y-2">
                  {projet.objectifs.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#0F172A]/70 dark:text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-1.5 flex-shrink-0" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modules du projet */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers size={16} className="text-[#06B6D4]" />
                  <h3 className="font-semibold text-[#0F172A] dark:text-white text-sm">Modules de la plateforme</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projet.modules.map((m, i) => (
                    <div key={i} className="bg-[#06B6D4]/5 border border-[#06B6D4]/15 rounded-xl p-3.5 flex gap-3">
                      <span className="text-2xl flex-shrink-0">{m.icon}</span>
                      <div>
                        <div className="font-semibold text-sm text-[#0F172A] dark:text-white mb-0.5">{m.nom}</div>
                        <div className="text-xs text-[#0F172A]/55 dark:text-white/45 leading-relaxed">{m.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Utilisateurs */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users size={16} className="text-[#06B6D4]" />
                  <h3 className="font-semibold text-[#0F172A] dark:text-white text-sm">Profils utilisateurs</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projet.utilisateurs.map((u, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/20">
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-semibold text-[#0F172A] dark:text-white text-sm mb-3">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {projet.technologies.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-[#64748B]/10 text-[#64748B] border border-[#64748B]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Avantages */}
              <div className="bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <ThumbsUp size={15} className="text-[#06B6D4]" />
                  <h3 className="font-semibold text-sm text-[#06B6D4]">Avantages apportés</h3>
                </div>
                <ul className="space-y-1.5">
                  {projet.avantages.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#0F172A]/70 dark:text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-1.5 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {projet.rapportPdf && (
                <a href={projet.rapportPdf} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#06B6D4] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
                  <FileText size={15} /> Consulter le rapport du projet <Download size={14} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projets() {
  return (
    <div className="min-h-screen pt-20 pb-16 zellige-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-divider w-24 mx-auto mb-4" />
          <h1 className="font-display text-5xl font-bold text-[#0F172A] dark:text-white mb-3">Projets</h1>
          <p className="text-[#0F172A]/60 dark:text-white/50 text-lg">Productions pédagogiques et numériques</p>
        </div>

        <div className="space-y-8">
          {projets.map((projet) => (
            <ProjectCard key={projet.id} projet={projet} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// CONTACT
// ============================================================
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen pt-20 pb-16 zellige-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-divider w-24 mx-auto mb-4" />
          <h1 className="font-display text-5xl font-bold text-[#0F172A] dark:text-white mb-3">Contact</h1>
          <p className="text-[#0F172A]/60 dark:text-white/50 text-lg">Prenez contact avec moi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-[#0F172A]/60 border border-[#E2E8F0] dark:border-white/10 rounded-2xl p-6">
              <h2 className="font-display text-2xl font-bold text-[#0F172A] dark:text-white mb-5">Coordonnées</h2>
              {[
                { icon: Mail, label: 'Email', value: personalInfo.email },
                { icon: Phone, label: 'Téléphone', value: personalInfo.phone },
                { icon: MapPin, label: 'Ville', value: personalInfo.location },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-[#DC2626]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#DC2626]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#0F172A]/40 dark:text-white/30 font-medium">{label}</div>
                    <div className="text-sm font-medium text-[#0F172A] dark:text-white">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#0F172A] rounded-2xl p-6 text-white">
              <div className="font-arabic text-[#64748B] text-2xl mb-2">مرحباً بكم</div>
              <p className="text-white/70 text-sm leading-relaxed">
                N'hésitez pas à me contacter pour toute collaboration pédagogique,
                partage d'expériences ou échange professionnel dans le domaine de l'enseignement de l'informatique.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-[#0F172A]/60 border border-[#E2E8F0] dark:border-white/10 rounded-2xl p-6">
            <h2 className="font-display text-2xl font-bold text-[#0F172A] dark:text-white mb-5">Envoyer un message</h2>
            <div className="space-y-4">
              {[
                { label: 'Nom complet', type: 'text', placeholder: 'Votre nom' },
                { label: 'Email', type: 'email', placeholder: 'votre@email.com' },
                { label: 'Sujet', type: 'text', placeholder: 'Objet du message' },
              ].map(({ label, type, placeholder }) => (
                <div key={label}>
                  <label className="block text-xs font-semibold text-[#0F172A]/60 dark:text-white/50 uppercase tracking-wider mb-1.5">{label}</label>
                  <input type={type} placeholder={placeholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-white/5 text-sm text-[#0F172A] dark:text-white placeholder:text-[#0F172A]/30 dark:placeholder:text-white/20 focus:outline-none focus:border-[#DC2626] transition-colors" />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold text-[#0F172A]/60 dark:text-white/50 uppercase tracking-wider mb-1.5">Message</label>
                <textarea rows={4} placeholder="Votre message..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-white/5 text-sm text-[#0F172A] dark:text-white placeholder:text-[#0F172A]/30 dark:placeholder:text-white/20 focus:outline-none focus:border-[#DC2626] transition-colors resize-none" />
              </div>
              <button className="w-full bg-[#DC2626] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#B91C1C] transition-colors flex items-center justify-center gap-2">
                <Send size={15} /> Envoyer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
