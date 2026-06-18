import { personalInfo, parcours, competences } from '../data/portfolio';
import { useInView } from '../hooks/usePortfolio';
import { MapPin, Mail, Phone, GraduationCap } from 'lucide-react';

function SkillBar({ name, level, label, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-[#0F172A] dark:text-white">{name}</span>
        <span className="text-xs text-[#0F172A]/50 dark:text-white/40">{label || `${level}%`}</span>
      </div>
      <div className="h-2 bg-[#E2E8F0] dark:bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#DC2626] to-[#06B6D4] rounded-full transition-all duration-1000 ease-out"
          style={{ width: inView ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const [skillsRef, skillsInView] = useInView();

  return (
    <div className="min-h-screen pt-20 pb-16 zellige-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-divider w-24 mx-auto mb-4" />
          <h1 className="font-display text-5xl font-bold text-[#0F172A] dark:text-white mb-3">À Propos</h1>
        </div>

        {/* Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Photo + infos */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[#0F172A]/60 border border-[#E2E8F0] dark:border-white/10 rounded-2xl p-6 text-center">
              <div className="photo-frame w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personalInfo.name)}&size=256&background=DC2626&color=fff&font-size=0.4&bold=true`;
                  }}
                />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0F172A] dark:text-white">{personalInfo.name}</h2>
              <div className="font-arabic text-[#64748B] text-lg mt-1 mb-2">{personalInfo.nameAr}</div>
              <div className="text-sm text-[#0F172A]/60 dark:text-white/50 mb-4">{personalInfo.title}</div>

              <div className="space-y-2.5 text-left">
                {[
                  { icon: MapPin, val: personalInfo.location },
                  { icon: Mail, val: personalInfo.email },
                  { icon: Phone, val: personalInfo.phone },
                ].map(({ icon: Icon, val }) => (
                  <div key={val} className="flex items-center gap-2.5 text-sm text-[#0F172A]/60 dark:text-white/50">
                    <Icon size={14} className="text-[#DC2626] flex-shrink-0" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-[#0F172A]/60 border border-[#E2E8F0] dark:border-white/10 rounded-2xl p-6 h-full">
              <h3 className="font-display text-2xl font-bold text-[#0F172A] dark:text-white mb-4">Présentation</h3>
              <p className="text-[#0F172A]/70 dark:text-white/60 leading-relaxed mb-6">{personalInfo.bio}</p>

              <h3 className="font-display text-xl font-bold text-[#0F172A] dark:text-white mb-4">Parcours Académique</h3>
              <div className="space-y-4">
                {parcours.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${p.actuel ? 'bg-[#DC2626] text-white' : 'bg-[#E2E8F0] text-[#0F172A]'} text-xs flex-shrink-0`}>
                        <GraduationCap size={14} />
                      </div>
                      {i < parcours.length - 1 && <div className="w-px flex-1 bg-[#E2E8F0] mt-2 min-h-4" />}
                    </div>
                    <div className="pb-4">
                      <div className="text-xs font-bold text-[#64748B] mb-0.5">{p.annee}</div>
                      <div className="font-semibold text-[#0F172A] dark:text-white text-sm">{p.titre}</div>
                      <div className="text-xs text-[#0F172A]/50 dark:text-white/40">{p.lieu}</div>
                      <div className="text-xs text-[#0F172A]/60 dark:text-white/50 mt-1">{p.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compétences */}
        <div ref={skillsRef}>
          <h2 className="font-display text-3xl font-bold text-[#0F172A] dark:text-white text-center mb-8">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Compétences Pédagogiques', data: competences.pedagogiques, color: 'text-[#DC2626]' },
              { title: 'Compétences Techniques', data: competences.techniques, color: 'text-[#06B6D4]' },
              { title: 'Outils Numériques', data: competences.numeriques, color: 'text-[#64748B]' },
              { title: 'Langues', data: competences.langues, color: 'text-[#0F172A] dark:text-blue-300' },
            ].map(({ title, data, color }) => (
              <div key={title} className="bg-white dark:bg-[#0F172A]/60 border border-[#E2E8F0] dark:border-white/10 rounded-2xl p-6">
                <h3 className={`font-display text-xl font-bold ${color} mb-5`}>{title}</h3>
                {data.map((skill) => (
                  <SkillBar key={skill.name} {...skill} inView={skillsInView} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
