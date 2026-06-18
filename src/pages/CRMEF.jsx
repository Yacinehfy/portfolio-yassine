import { BookOpen, Award, Users, Building, Calendar, CheckCircle } from 'lucide-react';

export default function CRMEF() {
  const features = [
    { icon: BookOpen, title: 'Formation Théorique', desc: '16 modules couvrant didactique, pédagogie, sciences de l\'éducation et disciplines de spécialité' },
    { icon: Users, title: 'Stages Pratiques', desc: '3 stages progressifs en établissements scolaires : observation, pratique accompagnée et autonome' },
    { icon: Award, title: 'Certification', desc: 'Obtention du CAPES (Certificat d\'Aptitude Pédagogique) après validation de toutes les composantes' },
    { icon: Building, title: 'Établissements Partenaires', desc: 'Partenariats avec les lycées qualifiants de la région Marrakech-Safi pour les stages professionnels' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 zellige-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-divider w-24 mx-auto mb-4" />
          <h1 className="font-display text-5xl font-bold text-[#0F172A] dark:text-white mb-3">Le CRMEF</h1>
          <p className="text-[#0F172A]/60 dark:text-white/50 text-lg">
            Centre Régional des Métiers de l'Éducation et de la Formation
          </p>
        </div>

        {/* Hero card */}
        <div className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-10 mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC2626]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#06B6D4]/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-[#DC2626]/20 text-[#FCA5A5] border border-[#DC2626]/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Marrakech-Safi</span>
              <span className="bg-[#64748B]/20 text-[#64748B] border border-[#64748B]/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Promotion 2025–2026</span>
              <span className="bg-[#06B6D4]/20 text-[#22D3EE] border border-[#06B6D4]/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Option Informatique</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Formation Initiale des Enseignants
            </h2>
            <p className="text-white/70 leading-relaxed text-lg max-w-3xl">
              Le CRMEF Marrakech-Safi forme les futurs enseignants du secondaire qualifiant. 
              Notre formation combine théorie pédagogique, didactique disciplinaire et pratique 
              professionnelle intensive en établissements scolaires partenaires.
            </p>
          </div>
        </div>

        {/* Photo CRMEF */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0] dark:border-white/10 mb-10">
          <img
            src="/crmef-building.png"
            alt="CRMEF Marrakech-Safi — المركز الجهوي لمهن التربية والتكوين"
            className="w-full h-auto block"
            style={{ maxHeight: 'none' }}
          />
          <div className="bg-[#0F172A] text-center py-3 px-4">
            <p className="font-arabic text-[#DC2626] text-base font-semibold">
              المركز الجهوي لمهن التربية والتكوين — مراكش تانسيفت الحور
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white dark:bg-[#0F172A]/60 border border-[#E2E8F0] dark:border-white/10 rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 bg-[#DC2626]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-[#DC2626]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0F172A] dark:text-white mb-1">{title}</h3>
                <p className="text-sm text-[#0F172A]/60 dark:text-white/50 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Programme */}
        <div className="bg-white dark:bg-[#0F172A]/60 border border-[#E2E8F0] dark:border-white/10 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold text-[#0F172A] dark:text-white mb-6">Programme de Formation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { sem: 'Semestre 1', color: 'red', items: [
                'Renforcement disciplinaire (Programmation, Systèmes)',
                'Didactique de l\'Informatique',
                'Technologies éducatives (TICE)',
                'Sciences de l\'Éducation',
                'Planification & Gestion de classe',
                'Initiation à la Recherche-Action',
                'Stage d\'observation (3 semaines)',
              ]},
              { sem: 'Semestre 2', color: 'green', items: [
                'Éthique professionnelle (أخلاقيات المهنة)',
                'Vie scolaire (الحياة المدرسية)',
                'Planification avancée & Gestion de classe',
                'Analyse de pratique professionnelle',
                'Atelier de production didactique',
                'Renforcement Réseaux & Développement Web',
                'Stages pratique accompagnée & autonome',
              ]},
            ].map(({ sem, color, items }) => (
              <div key={sem}>
                <div className={`font-semibold text-sm uppercase tracking-wider ${color === 'red' ? 'text-[#DC2626]' : 'text-[#06B6D4]'} mb-3`}>{sem}</div>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#0F172A]/70 dark:text-white/60">
                      <CheckCircle size={14} className={`${color === 'red' ? 'text-[#DC2626]' : 'text-[#06B6D4]'} mt-0.5 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
