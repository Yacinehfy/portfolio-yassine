import { Link } from 'react-router-dom';
import { Mail, MapPin, Heart } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="h-0.5 bg-gradient-to-r from-[#DC2626] to-[#06B6D4]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-display text-2xl font-semibold text-white mb-2">{personalInfo.name}</div>
            <div className="text-[#64748B] text-sm mb-4">{personalInfo.title}</div>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
              <MapPin size={14} className="text-[#DC2626]" />
              {personalInfo.location}
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Mail size={14} className="text-[#DC2626]" />
              {personalInfo.email}
            </div>
          </div>
          <div>
            <div className="text-[#64748B] font-semibold text-sm uppercase tracking-wider mb-4">Navigation</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { to: '/', label: 'Accueil' },
                { to: '/about', label: 'À Propos' },
                { to: '/crmef', label: 'CRMEF' },
                { to: '/modules', label: 'Modules' },
                { to: '/stages', label: 'Stages' },
                { to: '/projets', label: 'Projets' },
              ].map(link => (
                <Link key={link.to} to={link.to}
                  className="text-white/60 hover:text-[#64748B] text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[#64748B] font-semibold text-sm uppercase tracking-wider mb-4">Formation</div>
            <div className="text-white/60 text-sm space-y-1">
              <div>CRMEF Marrakech-Safi</div>
              <div>Promotion 2025–2026</div>
              <div>Option : Informatique</div>
              <div className="mt-4 text-[#06B6D4] font-arabic text-lg">المملكة المغربية</div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-white/40 text-xs">
            © 2026 {personalInfo.name} · CRMEF Marrakech
          </div>
          <div className="flex items-center gap-1.5 text-white/40 text-xs">
            Fait avec <Heart size={12} className="text-[#DC2626] fill-current" /> pour l'éducation marocaine
          </div>
        </div>
      </div>
    </footer>
  );
}
