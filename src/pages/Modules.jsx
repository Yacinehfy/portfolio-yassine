import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, BookOpen, Target, List, Code, ClipboardCheck, User, FileText, Download } from 'lucide-react';
import { modulesSemestre1, modulesSemestre2 } from '../data/portfolio';
import { useInView } from '../hooks/usePortfolio';

const colorMap = {
  red: { bg: 'bg-[#DC2626]/10', text: 'text-[#DC2626]', border: 'border-[#DC2626]/30', dot: 'bg-[#DC2626]', badge: 'bg-[#DC2626]' },
  green: { bg: 'bg-[#06B6D4]/10', text: 'text-[#06B6D4]', border: 'border-[#06B6D4]/30', dot: 'bg-[#06B6D4]', badge: 'bg-[#06B6D4]' },
  gold: { bg: 'bg-[#64748B]/10', text: 'text-[#64748B]', border: 'border-[#64748B]/30', dot: 'bg-[#64748B]', badge: 'bg-[#64748B]' },
  navy: { bg: 'bg-[#0F172A]/10', text: 'text-[#0F172A] dark:text-blue-300', border: 'border-[#0F172A]/20', dot: 'bg-[#0F172A]', badge: 'bg-[#0F172A]' },
};

function ModuleCard({ mod, index }) {
  const [expanded, setExpanded] = useState(false);
  const [ref, inView] = useInView();
  const c = colorMap[mod.color] || colorMap.navy;

  return (
    <div ref={ref}
      className={`transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 60}ms` }}>
      <div className={`bg-white dark:bg-[#0F172A]/60 border ${c.border} rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow`}>
        {/* Card header */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left"
        >
          <div className={`${c.bg} px-5 py-4 flex items-center justify-between gap-3`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{mod.icon}</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]/40 dark:text-white/30">{mod.code}</div>
                <h3 className={`font-semibold text-[#0F172A] dark:text-white text-base`}>{mod.title}</h3>
                {mod.professeur && (
                  <div className={`flex items-center gap-1 text-xs ${c.text} mt-0.5`}>
                    <User size={11} />
                    {mod.professeur}
                  </div>
                )}
              </div>
            </div>
            <div className={`w-7 h-7 rounded-full ${c.bg} ${c.text} flex items-center justify-center flex-shrink-0 border ${c.border}`}>
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </div>
          </div>
        </button>

        {/* Description (always visible) */}
        <div className="px-5 py-3">
          <p className="text-sm text-[#0F172A]/60 dark:text-white/50 leading-relaxed mb-2">{mod.description}</p>
          {mod.professeur && (
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0F172A]/50 dark:text-white/40">
              <User size={12} className={c.text} />
              {mod.professeur}
            </div>
          )}
        </div>

        {/* Competences badges (always visible) */}
        <div className="px-5 pb-3 flex flex-wrap gap-1.5">
          {mod.competences.map((comp, i) => (
            <span key={i} className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
              {comp}
            </span>
          ))}
        </div>

        {/* Expanded content */}
        {expanded && (
          <div className="border-t border-[#E2E8F0]/40 dark:border-white/10 px-5 py-5 space-y-5 animate-fade-up">
            {/* Objectifs */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <Target size={14} className={c.text} />
                <h4 className="text-sm font-semibold text-[#0F172A] dark:text-white">Objectifs</h4>
              </div>
              <ul className="space-y-1.5">
                {mod.objectifs.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#0F172A]/65 dark:text-white/55">
                    <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 flex-shrink-0`} />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contenu */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <List size={14} className={c.text} />
                <h4 className="text-sm font-semibold text-[#0F172A] dark:text-white">Contenu du module</h4>
              </div>
              <ul className="space-y-1.5">
                {mod.contenu.map((ct, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#0F172A]/65 dark:text-white/55">
                    <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 flex-shrink-0`} />
                    {ct}
                  </li>
                ))}
              </ul>
            </div>

            {/* Évaluation */}
            <div className={`${c.bg} rounded-xl px-4 py-3 flex items-start gap-2`}>
              <ClipboardCheck size={14} className={`${c.text} mt-0.5`} />
              <div>
                <div className={`text-xs font-bold uppercase tracking-wider ${c.text} mb-0.5`}>Évaluation</div>
                <div className="text-sm text-[#0F172A]/70 dark:text-white/60">{mod.evaluation}</div>
              </div>
            </div>

            {/* Rapport du module */}
            {mod.rapportPdf && (
              <a href={mod.rapportPdf} download target="_blank" rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`mt-3 inline-flex items-center gap-2 ${c.bg} ${c.text} border ${c.border} text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-80 transition-opacity`}>
                <FileText size={15} /> Télécharger le rapport (Word) <Download size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function SemestreSection({ semestre, modules, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const color = semestre === 1 ? 'text-[#DC2626]' : 'text-[#06B6D4]';
  const bg = semestre === 1 ? 'bg-[#DC2626]' : 'bg-[#06B6D4]';
  const bgLight = semestre === 1 ? 'bg-[#DC2626]/10' : 'bg-[#06B6D4]/10';
  const border = semestre === 1 ? 'border-[#DC2626]/20' : 'border-[#06B6D4]/20';

  return (
    <div className={`border-2 ${border} rounded-3xl overflow-hidden mb-8`}>
      {/* Semestre header - clickable */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full ${bgLight} px-6 sm:px-8 py-5 flex items-center justify-between gap-4 hover:opacity-90 transition-opacity`}
      >
        <div className="flex items-center gap-4">
          <div className={`${bg} text-white w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xl shadow-md`}>
            S{semestre}
          </div>
          <div className="text-left">
            <div className={`font-display text-2xl font-bold ${color}`}>
              Semestre {semestre}
            </div>
            <div className="text-sm text-[#0F172A]/50 dark:text-white/40">
              {modules.length} modules · {semestre === 1 ? 'Sep–Jan 2025–2026' : 'Jan–Jun 2026'}
            </div>
          </div>
        </div>
        <div className={`${color} flex-shrink-0`}>
          {open ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </div>
      </button>

      {/* Modules grid */}
      {open && (
        <div className="px-6 sm:px-8 py-6 bg-[#F8FAFC]/50 dark:bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((mod, i) => (
              <ModuleCard key={mod.id} mod={mod} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Modules() {
  const [searchParams] = useSearchParams();
  const sParam = searchParams.get('s');

  return (
    <div className="min-h-screen pt-20 pb-16 zellige-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-divider w-24 mx-auto mb-4" />
          <h1 className="font-display text-5xl font-bold text-[#0F172A] dark:text-white mb-3">
            Modules de Formation
          </h1>
          <p className="text-[#0F172A]/60 dark:text-white/50 text-lg">
            CRMEF Marrakech · {modulesSemestre1.length + modulesSemestre2.length} modules · 2 semestres
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-[#DC2626]/10 border border-[#DC2626]/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-sm font-medium text-[#DC2626]">{modulesSemestre1.length} modules · Semestre 1</span>
            </div>
            <div className="flex items-center gap-2 bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
              <span className="text-sm font-medium text-[#06B6D4]">{modulesSemestre2.length} modules · Semestre 2</span>
            </div>
          </div>
        </div>

        {/* Semestres */}
        <SemestreSection semestre={1} modules={modulesSemestre1} defaultOpen={!sParam || sParam === '1'} />
        <SemestreSection semestre={2} modules={modulesSemestre2} defaultOpen={sParam === '2'} />
      </div>
    </div>
  );
}
