import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { useDarkMode } from '../../hooks/usePortfolio';

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À Propos' },
  { to: '/crmef', label: 'CRMEF' },
  {
    label: 'Formation',
    children: [
      { to: '/modules', label: 'Tous les modules' },
      { to: '/modules?s=1', label: 'Semestre 1' },
      { to: '/modules?s=2', label: 'Semestre 2' },
    ]
  },
  { to: '/stages', label: 'Stages' },
  { to: '/projets', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [dark, setDark] = useDarkMode();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md shadow-lg border-b border-[#64748B]/20'
        : 'bg-transparent'
    }`}>
      {/* Top stripe - Moroccan flag colors */}
      <div className="h-0.5 bg-gradient-to-r from-[#DC2626] to-[#06B6D4]" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-[#DC2626] to-[#7F1D1D] rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="text-white font-display font-bold text-lg leading-none">Y</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-semibold text-[#0F172A] dark:text-white text-base leading-tight">
                {personalInfo.name}
              </div>
              <div className="text-[10px] text-[#64748B] font-medium tracking-wider uppercase">
                CRMEF Marrakech 2026
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.label} className="relative"
                  onMouseEnter={() => setDropdown(item.label)}
                  onMouseLeave={() => setDropdown(null)}>
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#0F172A] dark:text-white/80 hover:text-[#DC2626] transition-colors">
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${dropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 bg-white dark:bg-[#0F172A] border border-[#64748B]/20 rounded-xl shadow-xl overflow-hidden min-w-[180px]">
                      {item.children.map(child => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className="block px-4 py-2.5 text-sm text-[#0F172A] dark:text-white/80 hover:bg-[#DC2626]/5 hover:text-[#DC2626] transition-colors"
                          onClick={() => setDropdown(null)}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium transition-colors group ${
                      isActive ? 'text-[#DC2626]' : 'text-[#0F172A] dark:text-white/80 hover:text-[#DC2626]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-[#DC2626] transition-transform origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                    </>
                  )}
                </NavLink>
              )
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[#0F172A] dark:text-white/80 hover:bg-[#DC2626]/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[#0F172A] dark:text-white hover:bg-[#DC2626]/10 transition-colors"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white dark:bg-[#0F172A] border-t border-[#64748B]/20 shadow-xl">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.label}>
                  <div className="px-3 py-2 text-xs font-semibold text-[#64748B] uppercase tracking-wider">{item.label}</div>
                  {item.children.map(child => (
                    <NavLink key={child.to} to={child.to}
                      className="block px-6 py-2 text-sm text-[#0F172A] dark:text-white/80 hover:text-[#DC2626]"
                      onClick={() => setOpen(false)}>
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} end={item.to === '/'}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? 'bg-[#DC2626]/10 text-[#DC2626]' : 'text-[#0F172A] dark:text-white/80 hover:text-[#DC2626]'
                    }`
                  }
                  onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
