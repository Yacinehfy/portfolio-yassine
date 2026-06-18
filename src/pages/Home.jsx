import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Briefcase, Award, Star } from 'lucide-react';
import { personalInfo, modulesSemestre1, modulesSemestre2, stages } from '../data/portfolio';

// Moroccan geometric star SVG
function MoroccanStar({ className = '', size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,5 61,35 95,35 67,57 79,91 50,70 21,91 33,57 5,35 39,35" fill="currentColor" opacity="0.15"/>
      <polygon points="50,15 58,38 83,38 62,52 71,76 50,62 29,76 38,52 17,38 42,38" fill="currentColor" opacity="0.3"/>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center zellige-bg overflow-hidden pt-16">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 opacity-10 animate-spin-slow">
          <MoroccanStar size={200} className="text-[#DC2626]" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}>
          <MoroccanStar size={150} className="text-[#06B6D4]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
          <MoroccanStar size={500} className="text-[#64748B]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] dark:text-[#22D3EE] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-up">
                <Star size={10} className="fill-current" />
                CRMEF Marrakech · Promotion 2025–2026
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0F172A] dark:text-white leading-[1.05] mb-4 animate-fade-up delay-100">
                {personalInfo.name}
              </h1>

              <div className="font-arabic text-xl text-[#64748B] mb-4 animate-fade-up delay-200">
                {personalInfo.nameAr}
              </div>

              <p className="text-lg text-[#0F172A]/70 dark:text-white/60 leading-relaxed mb-8 max-w-lg animate-fade-up delay-300">
                {personalInfo.bio}
              </p>

              <div className="flex flex-wrap gap-3 animate-fade-up delay-400">
                <Link to="/stages"
                  className="inline-flex items-center gap-2 bg-[#DC2626] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#B91C1C] transition-all hover:scale-105 shadow-lg shadow-[#DC2626]/25">
                  Voir mes stages <ArrowRight size={16} />
                </Link>
                <Link to="/modules"
                  className="inline-flex items-center gap-2 border-2 border-[#0F172A]/20 dark:border-white/20 text-[#0F172A] dark:text-white px-6 py-3 rounded-xl font-semibold text-sm hover:border-[#DC2626] hover:text-[#DC2626] transition-all">
                  Mes modules <BookOpen size={16} />
                </Link>
              </div>
            </div>

            {/* Photo side */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up delay-200">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute -inset-6 border-2 border-[#64748B]/20 rounded-full" />
                <div className="absolute -inset-12 border border-[#DC2626]/10 rounded-full" />

                {/* Photo frame */}
                <div className="photo-frame w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl animate-float">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personalInfo.name)}&size=400&background=DC2626&color=fff&font-size=0.4&bold=true`;
                    }}
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-[#0F172A] border border-[#64748B]/30 rounded-xl px-4 py-2.5 shadow-xl">
                  <div className="text-[#64748B] font-bold text-lg leading-none">2026</div>
                  <div className="text-[#0F172A]/60 dark:text-white/50 text-xs">Promotion</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
          <div className="w-px h-8 bg-[#64748B]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#64748B]" />
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-20 bg-white dark:bg-[#0F172A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider w-24 mx-auto mb-4" />
            <h2 className="font-display text-4xl font-bold text-[#0F172A] dark:text-white">Mon Portfolio</h2>
            <p className="text-[#0F172A]/60 dark:text-white/50 mt-2">Explorez ma formation et mes expériences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Modules de Formation',
                desc: `${modulesSemestre1.length + modulesSemestre2.length} modules répartis sur 2 semestres`,
                link: '/modules',
                color: 'red',
                count: modulesSemestre1.length + modulesSemestre2.length,
              },
              {
                icon: Briefcase,
                title: 'Stages en Établissement',
                desc: `${stages.length} stages : observation, pratique accompagnée et autonome`,
                link: '/stages',
                color: 'green',
                count: stages.length,
              },
              {
                icon: Award,
                title: 'Projets Pédagogiques',
                desc: 'Recherche-action, productions didactiques et outils numériques',
                link: '/projets',
                color: 'gold',
                count: 1,
              },
            ].map((item, i) => (
              <Link key={i} to={item.link}
                className="card-hover group relative bg-[#F8FAFC] dark:bg-[#0F172A]/60 border border-[#E2E8F0] dark:border-white/10 rounded-2xl p-8 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 ${
                  item.color === 'red' ? 'text-[#DC2626]' : item.color === 'green' ? 'text-[#06B6D4]' : 'text-[#64748B]'
                }`}>
                  <MoroccanStar size={128} className="w-full h-full" />
                </div>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  item.color === 'red' ? 'bg-[#DC2626]/10 text-[#DC2626]' :
                  item.color === 'green' ? 'bg-[#06B6D4]/10 text-[#06B6D4]' :
                  'bg-[#64748B]/10 text-[#64748B]'
                }`}>
                  <item.icon size={22} />
                </div>
                <div className={`text-3xl font-display font-bold mb-1 ${
                  item.color === 'red' ? 'text-[#DC2626]' : item.color === 'green' ? 'text-[#06B6D4]' : 'text-[#64748B]'
                }`}>{item.count}</div>
                <h3 className="font-semibold text-[#0F172A] dark:text-white text-lg mb-2">{item.title}</h3>
                <p className="text-[#0F172A]/60 dark:text-white/50 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#DC2626] group-hover:gap-2.5 transition-all">
                  Voir plus <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
