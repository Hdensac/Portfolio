<script setup>
import {
  ArrowRight,
  BookOpen,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Shield,
  Sparkles,
  TerminalSquare,
  Download,
  Layers3,
} from 'lucide-vue-next'

const stackGroups = [
  {
    label: 'Frameworks & Core Stack',
    items: ['Laravel', 'Vue.js', 'Inertia.js'],
  },
  {
    label: 'Langages',
    items: ['PHP', 'JavaScript', 'Python'],
  },
  {
    label: 'Systèmes & Sécurité',
    items: ['Linux (Ubuntu, Debian)', 'Sécurité des SI', 'Hacking éthique'],
  },
  {
    label: 'Écosystèmes étudiés',
    items: ['Web3', 'Distributed Ledgers', 'Hedera Hashgraph'],
  },
]

const projectTechs = ['Laravel', 'Vue.js', 'Inertia.js', 'PostgreSQL']

const languages = [
  'Français · Natif',
  'Anglais · Technique',
  'Japonais · Notions — Préparation JLPT N5',
]

const links = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'GitHub', href: '#', icon: Github },
  { label: 'Email', href: 'mailto:contact@isaclussie.dev?subject=Contact%20professionnel', icon: Mail },
]
</script>

<template>
  <main class="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),transparent_30%)]"></div>
    <div class="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]"></div>
    <div class="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/15 via-sky-500/10 to-transparent blur-3xl"></div>

    <section class="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
      <header class="mb-10 flex flex-col gap-4 text-center sm:text-left">
        <span class="inline-flex items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300 backdrop-blur-sm">
          <span class="mr-2 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_8px_rgba(16,185,129,0.15)] animate-pulse"></span>
          Disponible pour opportunités & Projets
        </span>
        <div class="mx-auto max-w-3xl sm:mx-0">
          <p class="text-xs uppercase tracking-[0.3em] text-zinc-500">Portfolio / Home</p>
          <h1 class="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
            <span class="inline-flex items-center gap-2">
              Isac Dénis Hounsinou
              <Sparkles class="h-5 w-5 text-sky-300/90 animate-glowPulse" />
            </span>
            <span class="block bg-gradient-to-r from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent animate-text-shimmer">
              Isac Lussie
            </span>
          </h1>
          <p class="mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Étudiant en Master en Sécurité Informatique & Développeur Full-Stack
          </p>
        </div>
      </header>

      <div class="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
        <article class="relative overflow-hidden rounded-[2rem] border border-zinc-800/70 bg-zinc-900/70 p-8 shadow-[0_32px_120px_-48px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-[0_40px_150px_-40px_rgba(59,130,246,0.22)] lg:col-span-2">
          <div class="absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-sky-500/20 to-transparent blur-3xl"></div>
          <div class="absolute left-0 bottom-0 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/20 to-transparent blur-3xl"></div>

          <div class="relative z-10 flex flex-col gap-7">
            <div class="flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-400">
              <span class="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-sky-200 backdrop-blur-sm">
                <MapPin class="h-4 w-4" />
                Cotonou, Bénin
              </span>
              <span class="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1 text-xs text-zinc-300">
                <span class="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_0_6px_rgba(56,189,248,0.15)] animate-pulse"></span>
                Disponible pour opportunités & Projets
              </span>
            </div>

            <div class="space-y-5">
              <p class="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-[15px]">
                Passionné par l'alliance entre le développement d'applications web robustes et la cybersécurité. J'allie la rigueur de l'ingénierie logicielle à la vigilance de la sécurité des systèmes d'information pour concevoir des plateformes performantes, scalables et hautement sécurisées.
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <a href="#projets" class="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_16px_70px_-32px_rgba(59,130,246,0.78)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.01]">
                Voir les projets
                <ArrowRight class="h-4 w-4" />
              </a>
              <a href="#contact" class="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/50 px-5 py-3 text-sm font-semibold text-zinc-100 transition-all duration-300 ease-out hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-zinc-50 hover:-translate-y-0.5 hover:scale-[1.01]">
                Télécharger le CV
                <Download class="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>

        <article class="group rounded-[2rem] border border-zinc-800/70 bg-zinc-900/70 p-6 shadow-[0_28px_90px_-34px_rgba(0,0,0,0.68)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-[0_32px_100px_-20px_rgba(99,102,241,0.18)]">
          <div class="flex items-center gap-3">
            <div class="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-3 text-indigo-300">
              <Code2 class="h-5 w-5" />
            </div>
            <div>
              <p class="text-xs uppercase tracking-[0.24em] text-zinc-500">Stack & Outils</p>
              <h2 class="text-xl font-semibold text-zinc-50">Tech Stack</h2>
            </div>
          </div>

          <div class="mt-6 space-y-4">
            <template v-for="group in stackGroups" :key="group.label">
              <div class="space-y-3">
                <p class="text-xs uppercase tracking-[0.18em] text-zinc-500">{{ group.label }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="item in group.items" :key="item" class="rounded-full border border-zinc-800 bg-zinc-950/50 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all duration-300 hover:border-sky-400/40 hover:text-zinc-50 hover:shadow-[0_0_0_6px_rgba(59,130,246,0.08)]">
                    {{ item }}
                  </span>
                </div>
              </div>
            </template>
          </div>
        </article>

        <article id="projets" class="group rounded-[2rem] border border-zinc-800/70 bg-zinc-900/70 p-6 shadow-[0_28px_90px_-34px_rgba(0,0,0,0.68)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-[0_32px_100px_-20px_rgba(99,102,241,0.18)] lg:col-span-2">
          <div class="flex flex-wrap items-center gap-3">
            <span class="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
              <Layers3 class="h-3.5 w-3.5" />
              Projet de Master / Institutionnel
            </span>
            <span class="text-xs uppercase tracking-[0.18em] text-zinc-500">Mémoire</span>
          </div>

          <div class="mt-5 space-y-4">
            <h2 class="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">Plateforme de Dématérialisation et Suivi des Stages</h2>
            <p class="max-w-3xl text-sm leading-7 text-zinc-400 sm:text-[15px]">
              Conception et réalisation complète d'une plateforme web centralisée visant à dématérialiser, traiter et suivre les demandes de stages pour le Ministère de l'Économie et des Finances (DSI-FINANCES). Un projet d'envergure alliant gestion stricte des droits d'accès, traitement de documents et flux de travail administratifs.
            </p>

            <div class="flex flex-wrap gap-2">
              <span v-for="tech in projectTechs" :key="tech" class="rounded-full border border-zinc-800 bg-zinc-950/50 px-3 py-1 text-xs text-zinc-300 transition-all duration-300 hover:border-sky-400/40 hover:text-zinc-50 hover:shadow-[0_0_0_6px_rgba(59,130,246,0.08)]">
                {{ tech }}
              </span>
            </div>
          </div>
        </article>

        <article class="group rounded-[2rem] border border-zinc-800/70 bg-zinc-900/70 p-6 shadow-[0_28px_90px_-34px_rgba(0,0,0,0.68)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_32px_100px_-20px_rgba(16,185,129,0.18)]">
          <div class="flex items-center gap-3">
            <div class="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-emerald-300">
              <Shield class="h-5 w-5" />
            </div>
            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-zinc-500">Focus</p>
              <h2 class="text-xl font-semibold text-zinc-50">Sécurité, Recherche & Tech</h2>
            </div>
          </div>

          <div class="mt-5 space-y-3 text-sm leading-7 text-zinc-400">
            <p>Étudiant chercheur à l'IFRI (Institut de Formation et de Recherche en Informatique) du Bénin.</p>
            <p>Centres d'intérêt : Audit de code, durcissement de systèmes Linux, et exploration des technologies de registres distribués (Hashgraph Developer Course).</p>
            <p>Lab personnel : passion pour l'analyse de structures de fichiers et le modding de moteurs de jeux vidéo, avec une approche de reverse engineering appliqué.</p>
          </div>
        </article>

        <article class="group rounded-[2rem] border border-zinc-800/70 bg-zinc-900/70 p-6 shadow-[0_28px_90px_-34px_rgba(0,0,0,0.68)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_32px_100px_-20px_rgba(6,182,212,0.18)]">
          <div class="flex items-center gap-3">
            <div class="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3 text-cyan-300">
              <TerminalSquare class="h-5 w-5" />
            </div>
            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-zinc-500">Micro-projets</p>
              <h2 class="text-xl font-semibold text-zinc-50">K-Track & Applications</h2>
            </div>
          </div>

          <div class="mt-5 space-y-4 text-sm leading-7 text-zinc-400">
            <div class="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
              <p class="font-semibold text-zinc-200">K-Track</p>
              <p class="mt-2">Système de suivi et de traçabilité en temps réel avec authentification avancée basée sur les rôles et intégration de cartes interactives.</p>
            </div>
            <div class="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
              <p class="font-semibold text-zinc-200">Data</p>
              <p class="mt-2">Travaux pratiques en Big Data et automatisation avec Python (INSTI Lokossa).</p>
            </div>
          </div>
        </article>

        <article id="contact" class="group relative overflow-hidden rounded-[2rem] border border-zinc-800/70 bg-zinc-900/70 p-8 shadow-[0_35px_120px_-44px_rgba(14,23,42,0.8)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-[0_40px_120px_-32px_rgba(56,189,248,0.25)] lg:col-span-2">
          <div class="absolute right-6 top-6 h-24 w-24 rounded-full bg-gradient-to-br from-sky-500/15 to-transparent blur-3xl"></div>
          <div class="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div class="max-w-2xl">
              <div class="flex items-center gap-3">
                <div class="rounded-2xl border border-zinc-700 bg-zinc-950/60 p-3 text-zinc-200">
                  <BookOpen class="h-5 w-5" />
                </div>
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-zinc-500">Langues</p>
                  <h2 class="text-xl font-semibold text-zinc-50">Contact & Ouverture Internationale</h2>
                </div>
              </div>

              <div class="mt-5 flex flex-wrap gap-2">
                <span v-for="language in languages" :key="language" class="rounded-full border border-zinc-800 bg-zinc-950/50 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all duration-300 hover:border-sky-400/40 hover:text-zinc-50 hover:shadow-[0_0_0_6px_rgba(59,130,246,0.08)]">
                  {{ language }}
                </span>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <a v-for="link in links" :key="link.label" :href="link.href" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/45 px-4 py-3 text-sm font-semibold text-zinc-100 transition-all duration-300 ease-out hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-zinc-50 hover:-translate-y-0.5">
                <component :is="link.icon" class="h-4 w-4" />
                {{ link.label }}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
