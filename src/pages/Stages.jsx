import { useState } from 'react';
import {
  Calendar, MapPin, User, BookOpen, ChevronDown, ChevronUp,
  FileText, Download, Camera, Eye, AlertTriangle, CheckCircle,
  Lightbulb, Clock, Users
} from 'lucide-react';

// ============================================================
//  INFOS DU STAGE
// ============================================================
const stageInfo = {
  etablissement: 'Collège Borj Azzaitoune',
  ville: 'Marrakech',
  niveau: '2ème Année Collège (2AC)',
  encadrant: 'M. Lamime Jaouade',
  encadranteCRMEF: 'Mme Wafae Serrar',
  matiere: 'Informatique — Tableur Excel (Microsoft Office)',
  periode: '2025–2026',
  duree: '7 semaines',
  rapportStage: '/rapports/Rapport_Stage_Borj_Azzaitoune_Yassine_Hafidi.pdf',
  // 4 photos de l'établissement — placez-les dans public/photos-stage/
  photosCollege: [
    { src: '/photos-stage/photo1.jpeg', caption: 'Collège Borj Azzaitoune — Vue extérieure' },
    { src: '/photos-stage/photo2.jpeg', caption: 'Salle informatique' },
    { src: '/photos-stage/photo3.jpeg', caption: 'Classe 2AC' },
    { src: '/photos-stage/photo4.jpeg', caption: 'Séance en cours' },
  ],
};

// ============================================================
//  SÉANCES — données exactes du tableau
// ============================================================
const seances = [
  {
    numero: 1,
    semaine: 1,
    animateur: 'M. Jaouade',
    contenu: 'Accueil, introduction au tableur, interface Excel',
    theme: 'Découverte du tableur Excel',
    objectifs: [
      'Accueillir les élèves et présenter le programme',
      'Découvrir l\'interface Microsoft Excel',
      'Comprendre les notions de classeur, feuille de calcul et cellule',
      'Effectuer les premières saisies de données',
    ],
    deroulement: [
      'Accueil et présentation du programme du cours',
      'Mise en situation : pourquoi utiliser un tableur ?',
      'Présentation de l\'interface Excel (ruban, cellules, barre de formule)',
      'Exercice de saisie et navigation dans le classeur',
    ],
    bilan: 'Bonne réception par les élèves. Introduction bien menée, objectifs atteints.',
    difficultes: 'Quelques élèves peu familiers avec l\'outil informatique.',
    fiche: '/rapports/seances/Seance1.pdf',
  },
  {
    numero: 2,
    semaine: 2,
    animateur: 'M. Jaouade',
    contenu: 'Manipulation des cellules, saisie et mise en forme des données',
    theme: 'Manipulation et mise en forme',
    objectifs: [
      'Sélectionner, copier, couper et coller des cellules',
      'Appliquer une mise en forme (police, couleur, bordure)',
      'Redimensionner les colonnes et les lignes',
      'Fusionner des cellules',
    ],
    deroulement: [
      'Rappel de la séance 1',
      'Démonstration : sélection multiple, copier-coller',
      'Mise en forme d\'un tableau de données',
      'Atelier pratique et correction collective',
    ],
    bilan: 'Bonne progression. Hétérogénéité notable entre les groupes.',
    difficultes: 'Différence de niveau entre les élèves nécessite une différenciation.',
    fiche: '/rapports/seances/Seance2.pdf',
  },
  {
    numero: 3,
    semaine: 2,
    animateur: 'M. Jaouade',
    contenu: 'Adresses de cellules et introduction aux formules',
    theme: 'Adresses et premières formules',
    objectifs: [
      'Comprendre la notion d\'adresse de cellule (A1, B2...)',
      'Écrire une première formule simple',
      'Distinguer valeur et formule dans une cellule',
    ],
    deroulement: [
      'Explication de la notion d\'adresse de cellule',
      'Introduction à la syntaxe des formules (=)',
      'Exercices d\'écriture de formules simples',
      'Mise en commun et correction',
    ],
    bilan: 'Concept des adresses bien assimilé. Les formules simples maîtrisées en fin de séance.',
    difficultes: 'Confusion initiale entre adresse et valeur.',
    fiche: '/rapports/seances/Seance3.pdf',
  },
  {
    numero: 4,
    semaine: 3,
    animateur: 'Khadija Ezzangati',
    contenu: 'Adresses et formules (Groupe 2)',
    theme: 'Adresses et formules — Groupe 2',
    objectifs: [
      'Consolider la notion d\'adresse de cellule',
      'Pratiquer les formules de base',
      'Différencier références relatives pour le Groupe 2',
    ],
    deroulement: [
      'Reprise des notions d\'adresses avec le Groupe 2',
      'Exercices guidés adaptés au niveau du groupe',
      'Correction et remédiation individualisée',
      'Bilan de progression',
    ],
    bilan: 'Séance de consolidation réussie. Le Groupe 2 a bien rattrapé son retard.',
    difficultes: 'Rythme différent entre les deux groupes à gérer.',
    fiche: '/rapports/seances/Seance4.pdf',
  },
  {
    numero: 5,
    semaine: 3,
    animateur: 'M. Jaouade',
    contenu: 'Références relatives et absolues — Calcul de la TVA',
    theme: 'Références relatives et absolues',
    objectifs: [
      'Distinguer référence relative et référence absolue',
      'Utiliser le symbole $ pour figer une cellule',
      'Appliquer dans un calcul de TVA concret',
    ],
    deroulement: [
      'Explication : différence entre référence relative et absolue',
      'Démonstration du symbole $ (F4)',
      'Exercice applicatif : tableau de calcul de TVA',
      'Discussion sur les erreurs fréquentes',
    ],
    bilan: 'Concept progressivement assimilé grâce à l\'exemple concret de la TVA.',
    difficultes: 'Concept abstrait qui nécessite plusieurs exemples.',
    fiche: '/rapports/seances/Seance5.pdf',
  },
  {
    numero: 6,
    semaine: 4,
    animateur: 'Mahmoud Baiban',
    contenu: 'Références relatives et absolues (Groupe 2)',
    theme: 'Références — Groupe 2',
    objectifs: [
      'Appliquer les références absolues avec le Groupe 2',
      'Consolider l\'utilisation du $',
      'Exercices de remédiation ciblés',
    ],
    deroulement: [
      'Rappel et quiz rapide sur les références',
      'Exercices adaptés au Groupe 2',
      'Correction collective et remédiation',
      'Bilan de compréhension',
    ],
    bilan: 'Bonne maîtrise atteinte en fin de séance pour la majorité des élèves.',
    difficultes: 'Quelques élèves encore en difficulté avec le $ en fin de colonne.',
    fiche: '/rapports/seances/Seance6.pdf',
  },
  {
    numero: 7,
    semaine: 4,
    animateur: 'M. Jaouade',
    contenu: 'Références (Groupe 1, version ajustée)',
    theme: 'Références — Groupe 1 ajusté',
    objectifs: [
      'Consolider les références pour le Groupe 1',
      'Approfondir avec des exercices plus complexes',
      'Préparer la séance sur les fonctions SOMME et MOYENNE',
    ],
    deroulement: [
      'Révision des références avec le Groupe 1',
      'Exercices ajustés selon les retours de la séance 5',
      'Introduction aux fonctions de calcul (aperçu)',
      'Bilan et préparation de la suite',
    ],
    bilan: 'Le Groupe 1 a bien consolidé ses acquis. Prêt pour les fonctions.',
    difficultes: 'Gestion du rythme entre élèves rapides et lents.',
    fiche: '/rapports/seances/Seance7.pdf',
  },
  {
    numero: 8,
    semaine: 5,
    animateur: 'Yassine Hafidi',
    contenu: 'Fonctions SOMME et MOYENNE (Groupe 1)',
    theme: 'Fonctions SOMME et MOYENNE — Groupe 1',
    objectifs: [
      'Utiliser la fonction SOMME pour additionner une plage',
      'Calculer une moyenne avec la fonction MOYENNE',
      'Appliquer sur un tableau de notes de classe',
    ],
    deroulement: [
      'Introduction aux fonctions prédéfinies',
      'Syntaxe de SOMME et MOYENNE',
      'Exercice : tableau de notes d\'une classe fictive',
      'Correction et discussion sur les résultats',
    ],
    bilan: 'Très bonne séance. Les élèves ont apprécié l\'application sur des notes concrètes. Objectifs pleinement atteints.',
    difficultes: 'Quelques confusions entre l\'opérateur + et la fonction SOMME.',
    fiche: '/rapports/seances/Seance8.pdf',
  },
  {
    numero: 9,
    semaine: 5,
    animateur: 'Khadija Ezzangati',
    contenu: 'Fonctions SOMME et MOYENNE (Groupe 2)',
    theme: 'Fonctions SOMME et MOYENNE — Groupe 2',
    objectifs: [
      'Maîtriser SOMME et MOYENNE avec le Groupe 2',
      'Appliquer les fonctions sur des exercices variés',
      'Assurer une progression homogène entre les deux groupes',
    ],
    deroulement: [
      'Présentation des fonctions SOMME et MOYENNE',
      'Exercices guidés adaptés au Groupe 2',
      'Application sur un cas pratique (bulletins)',
      'Mise en commun et correction',
    ],
    bilan: 'Séance réussie. Le Groupe 2 est maintenant au même niveau que le Groupe 1.',
    difficultes: 'Sélection de plages parfois incorrecte.',
    fiche: '/rapports/seances/Seance9.pdf',
  },
  {
    numero: 10,
    semaine: 6,
    animateur: 'Équipe complète',
    contenu: 'Contrôle pratique sur poste informatique',
    theme: 'Évaluation — Contrôle pratique',
    objectifs: [
      'Évaluer les compétences acquises sur 5 semaines',
      'Réaliser un exercice complet sur poste informatique',
      'Appliquer formules, mise en forme et références',
    ],
    deroulement: [
      'Distribution du sujet d\'évaluation',
      'Travail individuel sur poste (durée : 1h30)',
      'Supervision par l\'équipe complète',
      'Ramassage et correction différée',
    ],
    bilan: 'Bons résultats globaux. Les notions de base sont bien maîtrisées par la majorité.',
    difficultes: 'Quelques élèves en difficulté sur les références absolues.',
    fiche: '/rapports/seances/Seance10.pdf',
  },
  {
    numero: 11,
    semaine: 6,
    animateur: 'Mahmoud Baiban',
    contenu: 'Création et personnalisation de graphiques (Groupe 1)',
    theme: 'Graphiques — Groupe 1',
    objectifs: [
      'Sélectionner des données pour créer un graphique',
      'Choisir le type de graphique adapté aux données',
      'Personnaliser titre, axes, couleurs et légende',
    ],
    deroulement: [
      'Pourquoi visualiser les données ?',
      'Démonstration : créer un graphique en barres',
      'Atelier : graphique circulaire sur les résultats du contrôle',
      'Présentation et correction des productions',
    ],
    bilan: 'Grand enthousiasme des élèves. Séance très dynamique et créative.',
    difficultes: 'Sélection des données source parfois incorrecte.',
    fiche: '/rapports/seances/Seance11.pdf',
  },
  {
    numero: 12,
    semaine: 7,
    animateur: 'Yassine Hafidi',
    contenu: 'Graphiques (Groupe 2), exercice bilan',
    theme: 'Graphiques — Groupe 2 & Exercice bilan',
    objectifs: [
      'Créer et personnaliser des graphiques avec le Groupe 2',
      'Réaliser un exercice bilan intégrant toutes les compétences',
      'Présenter et évaluer les productions finales',
    ],
    deroulement: [
      'Création de graphiques avec le Groupe 2',
      'Exercice bilan : tableau complet avec formules, graphique et mise en forme',
      'Présentation de 3 productions devant la classe',
      'Bilan final du stage et remerciements',
    ],
    bilan: 'Excellente séance de clôture. Les élèves ont montré une réelle progression depuis la séance 1. Exercice bilan très satisfaisant.',
    difficultes: 'Gestion du temps lors des présentations finales.',
    fiche: '/rapports/seances/Seance12.pdf',
  },
];

// ============================================================
//  COMPOSANTS
// ============================================================

function RapportButton({ href, label }) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#B91C1C] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
    >
      <FileText size={15} /> {label} <Download size={13} />
    </a>
  );
}

function PhotoGallery({ photos }) {
  const [broken, setBroken] = useState({});

  const visible = photos.filter((_, i) => !broken[i]);

  if (photos.length === 0 || visible.length === 0) {
    return (
      <div className="border-2 border-dashed border-[#E2E8F0] dark:border-white/10 rounded-xl p-8 text-center">
        <Camera size={36} className="text-[#DC2626]/20 mx-auto mb-3" />
        <p className="text-sm font-medium text-[#0F172A]/40 dark:text-white/30 mb-1">Photos à ajouter</p>
        <p className="text-xs text-[#0F172A]/30 dark:text-white/20">
          Placez vos photos dans{' '}
          <code className="bg-[#F8FAFC] dark:bg-white/10 px-1.5 py-0.5 rounded text-[#DC2626]">
            public/photos-stage/
          </code>
        </p>
        <p className="text-xs text-[#0F172A]/25 dark:text-white/15 mt-1">
          Nommez-les : <code className="text-[#DC2626]">photo1.jpg, photo2.jpg, photo3.jpg, photo4.jpg</code>
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {photos.map((p, i) => (
        !broken[i] && (
          <div key={i} className="rounded-xl overflow-hidden border border-[#E2E8F0] dark:border-white/10 shadow-sm group">
            <img
              src={p.src}
              alt={p.caption}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setBroken(b => ({ ...b, [i]: true }))}
            />
            <div className="bg-[#0F172A]/80 text-white text-xs text-center py-1.5 px-2 leading-tight">
              {p.caption}
            </div>
          </div>
        )
      ))}
    </div>
  );
}

// Badge animateur color
function animateurBadge(animateur) {
  if (animateur === 'Yassine Hafidi')
    return 'bg-[#DC2626] text-white';
  if (animateur === 'Équipe complète')
    return 'bg-[#0F172A] text-white';
  if (animateur === 'Khadija Ezzangati')
    return 'bg-[#7C3AED] text-white';
  if (animateur === 'Mahmoud Baiban')
    return 'bg-[#0369A1] text-white';
  return 'bg-[#64748B] text-white'; // M. Jaouade
}

function SeanceRow({ seance, onClick, open }) {
  return (
    <>
      <tr
        className={`cursor-pointer transition-colors ${open ? 'bg-[#DC2626]/5 dark:bg-[#DC2626]/10' : 'hover:bg-[#F8FAFC] dark:hover:bg-white/5'}`}
        onClick={onClick}
      >
        <td className="px-4 py-4 font-bold text-[#DC2626] text-center">{seance.numero}</td>
        <td className="px-4 py-4 text-center text-[#0F172A]/60 dark:text-white/50 text-sm">{seance.semaine}</td>
        <td className="px-4 py-4">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${animateurBadge(seance.animateur)}`}>
            {seance.animateur}
          </span>
        </td>
        <td className="px-4 py-4 text-sm text-[#0F172A] dark:text-white/80 max-w-xs">{seance.contenu}</td>
        <td className="px-4 py-4 text-right">
          <div className="flex items-center justify-end gap-2">
            {seance.fiche && (
              <a
                href={seance.fiche}
                download
                onClick={e => e.stopPropagation()}
                title="Télécharger la fiche"
                className="w-8 h-8 bg-[#DC2626] text-white rounded-lg flex items-center justify-center hover:bg-[#B91C1C] transition-colors"
              >
                <Download size={14} />
              </a>
            )}
            <button
              onClick={onClick}
              className="flex items-center gap-1 text-xs font-medium text-[#DC2626] border border-[#DC2626]/30 rounded-lg px-2.5 py-1.5 hover:bg-[#DC2626]/5 transition-colors"
            >
              <Eye size={12} /> Voir
            </button>
          </div>
        </td>
      </tr>
      {open && (
        <tr className="bg-[#DC2626]/3 dark:bg-[#DC2626]/5">
          <td colSpan={5} className="px-6 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Objectifs */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={14} className="text-[#DC2626]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]/60 dark:text-white/50">Objectifs</h4>
                </div>
                <ul className="space-y-1.5">
                  {seance.objectifs.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#0F172A]/70 dark:text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 flex-shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Déroulement */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen size={14} className="text-[#DC2626]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]/60 dark:text-white/50">Déroulement</h4>
                </div>
                <ol className="space-y-1.5">
                  {seance.deroulement.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#0F172A]/70 dark:text-white/60">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626]/10 text-[#DC2626] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {d}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            {/* Bilan + Difficultés */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Lightbulb size={13} className="text-green-600" />
                  <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wider">Bilan</span>
                </div>
                <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">{seance.bilan}</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <AlertTriangle size={13} className="text-orange-500" />
                  <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">Difficultés</span>
                </div>
                <p className="text-xs text-orange-700 dark:text-orange-300 leading-relaxed">{seance.difficultes}</p>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

// ============================================================
//  PAGE PRINCIPALE
// ============================================================
export default function Stages() {
  const [openSeance, setOpenSeance] = useState(null);
  const [showPhotos, setShowPhotos] = useState(true);

  const toggle = (n) => setOpenSeance(openSeance === n ? null : n);

  return (
    <div className="min-h-screen pt-20 pb-16 zellige-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center mb-10">
          <div className="section-divider w-24 mx-auto mb-4" />
          <h1 className="font-display text-5xl font-bold text-[#0F172A] dark:text-white mb-2">Mon Stage</h1>
          <p className="text-[#0F172A]/60 dark:text-white/50 text-lg">
            Pratique Professionnelle · Collège Borj Azzaitoune · Marrakech
          </p>
        </div>

        {/* ── INFOS GÉNÉRALES ── */}
        <div className="bg-white dark:bg-[#0F172A]/60 border border-[#E2E8F0] dark:border-white/10 rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-[#DC2626] mb-5">Informations générales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
            {[
              { icon: MapPin, label: 'Établissement', value: `${stageInfo.etablissement}, ${stageInfo.ville}` },
              { icon: BookOpen, label: 'Niveau', value: stageInfo.niveau },
              { icon: User, label: 'Encadrant terrain', value: stageInfo.encadrant },
              { icon: User, label: 'Encadrante CRMEF', value: stageInfo.encadranteCRMEF },
              { icon: Calendar, label: 'Période', value: stageInfo.periode },
              { icon: Clock, label: 'Durée', value: `${stageInfo.duree} · 12 séances · 24h` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 p-3 bg-[#F8FAFC] dark:bg-white/5 rounded-xl border border-[#E2E8F0] dark:border-white/5">
                <Icon size={15} className="text-[#DC2626] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A]/40 dark:text-white/30">{label}</div>
                  <div className="text-sm font-medium text-[#0F172A] dark:text-white">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#DC2626]/5 border border-[#DC2626]/15 rounded-xl p-4 mb-5">
            <div className="text-xs font-bold text-[#DC2626] uppercase tracking-wider mb-1">Thème du stage</div>
            <div className="text-sm font-semibold text-[#0F172A] dark:text-white">{stageInfo.matiere}</div>
          </div>

          <RapportButton href={stageInfo.rapportStage} label="Rapport général du stage" />
        </div>

        {/* ── PHOTOS DE L'ÉTABLISSEMENT ── */}
        <div className="bg-white dark:bg-[#0F172A]/60 border border-[#E2E8F0] dark:border-white/10 rounded-2xl p-6 mb-6 shadow-sm">
          <button
            onClick={() => setShowPhotos(!showPhotos)}
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#DC2626]/10 rounded-xl flex items-center justify-center">
                <Camera size={18} className="text-[#DC2626]" />
              </div>
              <div className="text-left">
                <h2 className="font-display text-xl font-bold text-[#0F172A] dark:text-white">
                  Photos de l'établissement et des classes
                </h2>
                <p className="text-xs text-[#0F172A]/50 dark:text-white/40">
                  photo1.jpg · photo2.jpg · photo3.jpg · photo4.jpg
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center text-[#DC2626]">
              {showPhotos ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </button>

          {showPhotos && (
            <div className="mt-5 animate-fade-up">
              <PhotoGallery photos={stageInfo.photosCollege} />
            </div>
          )}
        </div>

        {/* ── TABLEAU DES SÉANCES ── */}
        <div className="bg-white dark:bg-[#0F172A]/60 border border-[#E2E8F0] dark:border-white/10 rounded-2xl overflow-hidden shadow-sm mb-6">
          <div className="px-6 py-5 border-b border-[#E2E8F0] dark:border-white/10 flex items-center justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#0F172A] dark:text-white">Tableau des séances</h2>
              <p className="text-xs text-[#0F172A]/50 dark:text-white/40 mt-1">Cliquez sur une ligne ou sur "Voir" pour les détails</p>
            </div>
            <span className="bg-[#DC2626]/10 text-[#DC2626] text-sm font-bold px-3 py-1 rounded-full">
              12 séances
            </span>
          </div>

          {/* Légende animateurs */}
          <div className="px-6 py-3 border-b border-[#E2E8F0] dark:border-white/10 flex flex-wrap gap-2">
            {[
              { nom: 'M. Jaouade', color: 'bg-[#64748B] text-white' },
              { nom: 'Khadija Ezzangati', color: 'bg-[#7C3AED] text-white' },
              { nom: 'Mahmoud Baiban', color: 'bg-[#0369A1] text-white' },
              { nom: 'Yassine Hafidi', color: 'bg-[#DC2626] text-white' },
              { nom: 'Équipe complète', color: 'bg-[#0F172A] text-white' },
            ].map(a => (
              <span key={a.nom} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${a.color}`}>
                {a.nom}
              </span>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-center w-16">Séance</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-center w-20">Semaine</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-left w-40">Animateur</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-left">Contenu</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-right w-28">Fiche</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] dark:divide-white/5">
                {seances.map((seance) => (
                  <SeanceRow
                    key={seance.numero}
                    seance={seance}
                    open={openSeance === seance.numero}
                    onClick={() => toggle(seance.numero)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── ÉQUIPE DU STAGE ── */}
        <div className="bg-white dark:bg-[#0F172A]/60 border border-[#E2E8F0] dark:border-white/10 rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-[#0F172A] dark:text-white mb-4">
            <Users size={20} className="inline-block text-[#DC2626] mr-2 mb-1" />
            Équipe du stage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { nom: 'M. Lamime Jaouade', role: 'Encadrant terrain', seances: '1,2,3,5,7', color: 'bg-[#64748B]' },
              { nom: 'Khadija Ezzangati', role: 'Stagiaire co-animatrice', seances: '4,9', color: 'bg-[#7C3AED]' },
              { nom: 'Mahmoud Baiban', role: 'Stagiaire co-animateur', seances: '6,11', color: 'bg-[#0369A1]' },
              { nom: 'Yassine Hafidi', role: 'Stagiaire animateur principal', seances: '8,12', color: 'bg-[#DC2626]' },
              { nom: 'Équipe complète', role: 'Supervision collective', seances: '10', color: 'bg-[#0F172A]' },
            ].map(m => (
              <div key={m.nom} className="flex items-center gap-3 p-3 bg-[#F8FAFC] dark:bg-white/5 rounded-xl border border-[#E2E8F0] dark:border-white/5">
                <div className={`w-9 h-9 ${m.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {m.nom[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0F172A] dark:text-white">{m.nom}</div>
                  <div className="text-xs text-[#0F172A]/50 dark:text-white/40">{m.role}</div>
                  <div className="text-xs text-[#DC2626] mt-0.5">Séances : {m.seances}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BILAN FINAL ── */}
        <div className="bg-[#0F172A] text-white rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Bilan du stage</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Séances', value: '12' },
              { label: 'Semaines', value: '7' },
              { label: 'Heures pratique', value: '24h' },
              { label: 'Animateurs', value: '4' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 rounded-xl p-4 text-center">
                <div className="font-display text-3xl font-bold text-[#DC2626] mb-1">{value}</div>
                <div className="text-xs text-white/50">{label}</div>
              </div>
            ))}
          </div>
          <p className="text-white/70 leading-relaxed text-sm">
            Ce stage en milieu scolaire au Collège Borj Azzaitoune a représenté une expérience formatrice essentielle. Les 12 séances progressives sur Excel, animées en équipe, m'ont permis de développer ma planification pédagogique, ma gestion de classe et ma capacité d'adaptation. Chaque séance conduite en autonomie a renforcé ma confiance et ma vocation d'enseignant en informatique.
          </p>
        </div>

      </div>
    </div>
  );
}
