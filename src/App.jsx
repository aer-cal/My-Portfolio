import { useEffect, useRef, useState } from 'react'
import MedicastSS from '../assets/MedicastSS.png'
import DTIQueSS from '../assets/DTIQueSS.png'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Featured Work', id: 'featured-work' },
  { label: 'Badges', id: 'badges' },
  { label: 'Contact', id: 'contact' },
]

const skillCards = [
  {
    title: 'Cybersecurity & Risk Monitoring',
    description: 'Implementing threat mitigation protocols and heuristic evaluation for secure environments.',
    levelLabel: 'Portfolio Signal',
    baseValue: 30,
    badgeWeight: 5,
    workWeight: 2,
  },
  {
    title: 'System Administration',
    description: 'Server maintenance, Linux / OS management, and technical hardware / software troubleshooting.',
    levelLabel: 'Portfolio Signal',
    baseValue: 34,
    badgeWeight: 4,
    workWeight: 3,
  },
  {
    title: 'Technical Development',
    description: 'Building efficient tools using Python, Eel frameworks, and managing complex integrations.',
    levelLabel: 'Portfolio Signal',
    baseValue: 32,
    badgeWeight: 3,
    workWeight: 5,
  },
]

const basePath = import.meta.env.BASE_URL

const badges = [
  {
    icon: `${basePath}assets/LinuxBadge.png`,
    title: 'Cisco Linux Essentials',
    description: 'Professional badge verifying fundamental knowledge of Linux systems and the command line.',
    href: 'https://www.credly.com/badges/bdd4ddfc-874a-4561-b96c-58612fc56133/public_url',
  },
  {
    icon: `${basePath}assets/OSBasicsBadge.png`,
    title: 'Cisco OS Basics',
    description: 'Certification covering core operating system concepts, installation, and troubleshooting.',
    href: 'https://www.credly.com/badges/7e033bd7-d843-4f88-b7b6-36d3733c6f5e/public_url',
  },
  {
    icon: `${basePath}assets/ITS-Badges-Cybersecurity.png`,
    title: 'Cybersecurity Specialist',
    description: 'IT Specialist certification demonstrating expertise in cybersecurity threats, risk mitigation, and secure infrastructure.',
    href: 'https://www.credly.com/badges/d3c48501-d376-4259-9355-13dd8ed93b48/public_url',
  },
]

const featuredWorks = [
  {
    title: 'Medicast BJMP',
    href: 'https://github.com/aer-cal/Medicast-BJMP-Web-based-Health-Profiling-and-Forecast-Risk-Monitoring-System',
    summary:
      'A web-based health profiling and forecast risk monitoring platform for BJMP health services, built with a split Laravel backend and React frontend.',
    highlights: ['Centralized profiling', 'Forecast risk monitoring', 'API-driven architecture'],
    stack: ['Laravel', 'React', 'PHP', 'Frontend/Backend Separation'],
    image: MedicastSS,
  },
  {
    title: 'DTI Laguna Queue Management System',
    href: 'https://github.com/aer-cal/DTI-Laguna-Business-Name-Queuing-System',
    summary:
      'A Windows-based dual-display queue solution for service counters with operator controls, public ticket display, and live queue updates.',
    highlights: ['Dual-display workflow', 'Voice announcements', 'Queue status monitoring'],
    stack: ['Python', 'Eel', 'Windows', 'Local App Workflow'],
    image: DTIQueSS,
  },
]

const portfolioSignalCount = badges.length + featuredWorks.length

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aaroncalupitan',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5Zm.02 5.5H3V21h2V9Zm4 0H7v12h2v-6.4c0-3.77 4.9-4.08 4.9 0V21h2v-7.3c0-5.07-5.8-4.88-7-2.39V9Z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/aer.cal',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 8.5V7.2c0-.9.6-1.1 1-1.1h2.5V3h-3.4C10.9 3 9 4.8 9 7.7v.8H6v3h3V21h4.5v-9.5h3.1l.4-3h-3.5Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/aer.cal',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.9a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/aer-cal',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.36-1.15-3.36-1.15-.45-1.17-1.1-1.48-1.1-1.48-.9-.62.07-.61.07-.61 1 .07 1.54 1.03 1.54 1.03.89 1.53 2.34 1.09 2.91.84.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.58 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.59.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
]

const aboutDetails = [
  {
    value: '23',
    label: 'Years Old',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: 'Open',
    label: 'Current Status',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 4.5A7.5 7.5 0 1 1 4.5 12" strokeLinecap="round" />
        <path d="m4.5 7.5 0-3h3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: 'DTI Laguna',
    label: 'Current Career',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M3.5 8.5h17v10h-17z" />
        <path d="M9 8.5V6.8A1.8 1.8 0 0 1 10.8 5h2.4A1.8 1.8 0 0 1 15 6.8v1.7" />
      </svg>
    ),
  },
  {
    value: 'IT + Dev',
    label: 'Primary Focus',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="m8 9-3 3 3 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m16 9 3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m13.5 7-3 10" strokeLinecap="round" />
      </svg>
    ),
  },
]

const heroPhotos = [
  { src: `${basePath}assets/image_4215ea.png`, position: '52% 30%' },
  { src: `${basePath}assets/1000075972.jpg`, position: '56% 24%' },
  { src: `${basePath}assets/1000079942.png`, position: '50% 12%' },
]

const sectionTitleClass =
  'mb-8 text-2xl font-semibold uppercase tracking-[0.16em] text-textmain sm:text-3xl sm:tracking-[0.22em] md:text-4xl md:tracking-[0.28em]'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [animateSkillBars, setAnimateSkillBars] = useState(false)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const skillsSectionRef = useRef(null)

  useEffect(() => {
    const section = skillsSectionRef.current
    if (!section) {
      return undefined
    }

    let frameA = 0
    let frameB = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateSkillBars(false)
          frameA = window.requestAnimationFrame(() => {
            frameB = window.requestAnimationFrame(() => {
              setAnimateSkillBars(true)
            })
          })
        } else {
          setAnimateSkillBars(false)
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frameA)
      window.cancelAnimationFrame(frameB)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--cursor-x', '50vw')
    root.style.setProperty('--cursor-y', '50vh')
    root.style.setProperty('--cursor-size', '360px')
    root.style.setProperty('--cursor-strength', '0.13')

    const handleMouseMove = (event) => {
      root.style.setProperty('--cursor-x', `${event.clientX}px`)
      root.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    const handleMouseOver = (event) => {
      if (event.target instanceof Element && event.target.closest('a, button, input, textarea, article')) {
        root.style.setProperty('--cursor-size', '520px')
        root.style.setProperty('--cursor-strength', '0.2')
      } else {
        root.style.setProperty('--cursor-size', '360px')
        root.style.setProperty('--cursor-strength', '0.13')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % heroPhotos.length)
    }, 2800)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-textmain selection:bg-neon selection:text-ink">
      <div className="cursor-spotlight" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(63,169,255,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(123,200,255,0.1),transparent_24%),linear-gradient(to_bottom,rgba(5,7,11,0.3),rgba(5,7,11,0.96))]" />
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-ink/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-8 sm:py-5 lg:px-12">
          <a href="#home" className="text-xl font-semibold tracking-[0.2em] text-textmain sm:text-2xl sm:tracking-[0.28em]">
            Aer<span className="text-neon">.Cal</span>
          </a>
          <nav className="w-full overflow-x-auto pb-1 sm:w-auto sm:overflow-visible sm:pb-0">
            <ul className="flex min-w-max flex-nowrap gap-2 text-[0.62rem] uppercase tracking-[0.14em] text-textmuted sm:min-w-0 sm:flex-wrap sm:justify-end sm:gap-4 sm:text-xs sm:tracking-[0.2em]">
              {navLinks.map((link) => {
                const target = link.id
                return (
                  <li key={link.id}>
                    <a
                      className={`rounded-full border px-2.5 py-1.5 transition-all duration-300 sm:px-3 sm:py-2 ${
                        activeSection === target
                          ? 'border-neon/40 bg-neon/10 text-textmain shadow-neon'
                          : 'border-white/5 bg-white/3 hover:-translate-y-0.5 hover:border-neon/30 hover:bg-neon/10 hover:text-textmain hover:shadow-neon'
                      }`}
                      href={`#${target}`}
                      onClick={() => setActiveSection(target)}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section
          id="home"
          className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center gap-10 px-4 pb-14 pt-36 sm:gap-12 sm:px-8 sm:pt-32 lg:flex-row lg:items-center lg:justify-between lg:px-12"
        >
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-neon/20 bg-panel/80 px-3 py-2 text-[0.62rem] uppercase tracking-[0.16em] text-neonSoft shadow-neon backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.28em]">
              <span className="h-2 w-2 rounded-full bg-neon shadow-neon" />
              System Admin & Security Ready
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.06] sm:text-5xl md:text-7xl">
              AARON L. CALUPITAN
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-textmuted sm:text-lg sm:leading-8 md:text-xl">
              IT Professional &amp; Graduating IT Student (Aer.Cal). Specializing in Software Development, IT Infrastructure.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#contact"
                className="w-full rounded-full border border-neon bg-neon px-7 py-3 text-center font-semibold text-ink shadow-neon transition-all duration-300 hover:-translate-y-0.5 hover:bg-neonSoft sm:w-auto"
              >
                Initiate Contact
              </a>
              <a
                href="#skills"
                className="w-full rounded-full border border-white/10 bg-white/5 px-7 py-3 text-center font-semibold text-textmain transition-all duration-300 hover:border-neon/40 hover:bg-neon/10 sm:w-auto"
              >
                View Capabilities
              </a>
            </div>
          </div>

          <div className="w-full max-w-sm sm:max-w-md lg:w-2/5">
            <div className="group relative overflow-hidden rounded-[2rem] border border-neon/20 bg-panel/85 p-3 shadow-neon backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-neon/40 hover:shadow-[0_0_32px_rgba(63,169,255,0.42)]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(63,169,255,0.14),transparent_40%,transparent_60%,rgba(63,169,255,0.08))]" />
              <div className="relative h-[320px] w-full overflow-hidden rounded-[1.5rem] sm:h-[380px] md:h-[420px]">
                {heroPhotos.map((photo, index) => (
                  <img
                    key={photo.src}
                    src={photo.src}
                    alt="Aer.Cal Avatar"
                    className={`absolute inset-0 h-full w-full object-cover object-center grayscale-[0.45] contrast-125 transition-all duration-1000 ${
                      activePhotoIndex === index ? 'opacity-100' : 'opacity-0'
                    } group-hover:scale-[1.03] group-hover:grayscale-[0.15]`}
                    style={{ objectPosition: photo.position }}
                  />
                ))}
              </div>
              <div className="absolute left-4 top-4 rounded-full border border-neon/25 bg-ink/70 px-3 py-1 text-[0.56rem] uppercase tracking-[0.16em] text-neonSoft backdrop-blur sm:left-5 sm:top-5 sm:text-[0.65rem] sm:tracking-[0.22em]">
                Command Profile
              </div>
              <div className="pointer-events-none absolute -inset-x-10 bottom-6 h-8 -rotate-6 bg-neon/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
          <h2 className={sectionTitleClass}>About Me</h2>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[1.75rem] border border-white/5 bg-panel/80 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-10">
              <p className="text-base leading-8 text-textmain md:text-lg">
                Hi, I&apos;m Aer.Cal. I am 23 years old, currently open to opportunities, and working as an IT intern at DTI Laguna.
              </p>
              <p className="mt-5 text-base leading-8 text-textmuted md:text-lg">
                My current focus is on building practical experience in IT infrastructure, software development, and
                professional technical support. I am working toward a stronger career path in systems and development
                while continuing to sharpen the skills that support reliable, modern digital operations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutDetails.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/5 bg-panel/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-neon/30 hover:bg-panelSoft hover:shadow-neon sm:p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-neon/25 bg-neon/10 text-neonSoft">
                    <span className="h-5 w-5">{item.icon}</span>
                  </div>
                  <p className="break-words text-2xl font-semibold text-neonSoft sm:text-3xl">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-textmuted sm:text-sm sm:tracking-[0.22em]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          ref={skillsSectionRef}
          className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-12"
        >
          <h2 className={sectionTitleClass}>Core Capabilities</h2>
          <p className="mb-8 max-w-3xl text-sm leading-7 text-textmuted sm:text-base sm:leading-8">
            These progress bars are tied to your portfolio proof. When you add more badges or featured work,
            the values increase automatically so the section stays in sync with your real output.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {skillCards.map((card, index) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-panel/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/30 hover:bg-panelSoft hover:shadow-neon"
              >
                <div className="pointer-events-none absolute -left-10 top-0 h-full w-10 bg-neon/10 blur-md transition-transform duration-500 group-hover:translate-x-[340px]" />
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold tracking-[0.3em] text-neonSoft">0{index + 1}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-neon shadow-neon" />
                </div>
                <h3 className="mt-10 text-2xl font-semibold text-textmain">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-textmuted">{card.description}</p>
                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-textmuted">
                    <span>{card.levelLabel}</span>
                    <span>
                      {Math.min(
                        95,
                        card.baseValue + badges.length * card.badgeWeight + featuredWorks.length * card.workWeight,
                      )}%
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink/80">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,rgba(63,169,255,0.5),rgba(123,200,255,0.95))] shadow-neon transition-all duration-1000 ease-out group-hover:brightness-110"
                      style={{
                        width: animateSkillBars
                          ? `${Math.min(
                              95,
                              card.baseValue + badges.length * card.badgeWeight + featuredWorks.length * card.workWeight,
                            )}%`
                          : '0%',
                        transitionDelay: `${index * 180}ms`,
                      }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="featured-work" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
          <h2 className={sectionTitleClass}>Featured Work</h2>
          <div className="mb-8">
            <div className="relative mx-auto max-w-5xl">
              <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/6 bg-panel/80 p-4 shadow-neon">
                <div className="flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setCarouselIndex((i) => (i - 1 + featuredWorks.length) % featuredWorks.length)}
                    className="rounded-full border border-white/6 bg-ink/60 p-2 text-textmuted hover:bg-white/3"
                    aria-label="Previous"
                  >
                    ‹
                  </button>

                  <div className="mx-4 flex w-full items-center justify-center">
                    <div className="relative w-full max-w-3xl">
                      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-ink/30 to-panel/40 shadow-lg">
                        <img
                          src={featuredWorks[carouselIndex].image}
                          alt={featuredWorks[carouselIndex].title}
                          className="h-64 w-full object-cover object-center sm:h-80 md:h-[360px] lg:h-[420px]"
                        />
                        <div className="absolute left-4 top-4 rounded-md bg-ink/60 px-3 py-2 text-sm text-neonSoft backdrop-blur-sm">
                          {featuredWorks[carouselIndex].title}
                        </div>
                        <div className="absolute left-4 bottom-4 right-4 rounded-md bg-gradient-to-t from-black/60 via-ink/40 to-transparent p-4 text-sm text-textmuted">
                          {featuredWorks[carouselIndex].summary}
                          <div className="mt-3 flex flex-wrap gap-2">
                            {featuredWorks[carouselIndex].stack.map((s) => (
                              <span key={s} className="rounded-full bg-white/5 px-2 py-1 text-xs text-textmain">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setCarouselIndex((i) => (i + 1) % featuredWorks.length)}
                    className="rounded-full border border-white/6 bg-ink/60 p-2 text-textmuted hover:bg-white/3"
                    aria-label="Next"
                  >
                    ›
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-3">
                {featuredWorks.map((w, i) => (
                  <button
                    key={w.title}
                    onClick={() => setCarouselIndex(i)}
                    className={`h-16 w-28 overflow-hidden rounded-lg border transition-all duration-200 ${
                      i === carouselIndex ? 'border-neon/40 ring-2 ring-neon/10 scale-105' : 'border-white/8'
                    }`}
                    aria-label={`Show ${w.title}`}
                    type="button"
                  >
                    <img src={w.image} alt={w.title} className="h-full w-full object-cover object-center" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {featuredWorks.map((work, index) => (
              <article
                key={work.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-neon/15 bg-[linear-gradient(180deg,rgba(63,169,255,0.08),rgba(13,19,32,0.92))] p-6 shadow-neon transition-all duration-300 hover:-translate-y-1 hover:border-neon/35 hover:shadow-[0_0_34px_rgba(63,169,255,0.34)] sm:p-8"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(123,200,255,0.16),transparent_38%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-neonSoft">0{index + 1}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-textmain sm:text-3xl">{work.title}</h3>
                  </div>
                  <span className="rounded-full border border-neon/20 bg-neon/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-neonSoft">
                    Featured
                  </span>
                </div>

                <p className="relative mt-5 max-w-2xl text-sm leading-7 text-textmuted sm:text-base sm:leading-8">
                  {work.summary}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {work.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-textmain"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
                  {work.highlights.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-ink/55 px-4 py-3 text-sm text-textmain">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="relative mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-neon bg-neon px-6 py-3 text-sm font-semibold text-ink shadow-neon transition-all duration-300 hover:-translate-y-0.5 hover:bg-neonSoft"
                  >
                    View Repository
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-textmain transition-all duration-300 hover:border-neon/40 hover:bg-neon/10"
                  >
                    Discuss Similar Work
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="badges" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
          <h2 className={sectionTitleClass}>Credentials & Works</h2>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {badges.map((badge) => (
              <a
                key={badge.title}
                href={badge.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.75rem] border border-neon/15 bg-[linear-gradient(180deg,rgba(63,169,255,0.08),rgba(13,19,32,0.9))] p-6 shadow-neon transition-all duration-300 hover:-translate-y-1 hover:border-neon/35 hover:shadow-[0_0_34px_rgba(63,169,255,0.35)] sm:p-8 cursor-pointer"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-ink/80 overflow-hidden transition-all duration-300 group-hover:scale-110">
                  <img src={badge.icon} alt={badge.title} className="h-full w-full object-contain p-1" />
                </div>
                <h3 className="text-xl font-semibold text-textmain sm:text-2xl">{badge.title}</h3>
                <p className="mt-3 text-sm leading-7 text-textmuted">{badge.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
          <h2 className={sectionTitleClass}>Contact</h2>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.75rem] border border-white/5 bg-panel/80 p-6 backdrop-blur-sm sm:p-10">
              <p className="text-base leading-8 text-textmuted md:text-lg">
                Looking to fortify your IT infrastructure or need a dedicated professional for your next project?
                This is the place to reach out.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:aaroncalupitan2@gmail.com"
                  className="block break-all rounded-2xl border border-white/8 bg-white/3 px-4 py-4 text-xs uppercase tracking-[0.14em] text-textmain transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/30 hover:bg-neon/10 hover:shadow-neon sm:px-5 sm:text-sm sm:tracking-[0.22em]"
                >
                  aaroncalupitan2@gmail.com
                </a>
                <div className="rounded-2xl border border-white/8 bg-white/3 px-4 py-4 text-xs uppercase tracking-[0.14em] text-textmain sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                  Santa Cruz, Laguna, Philippines
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/3 px-4 py-4 text-xs uppercase tracking-[0.1em] text-textmain transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/30 hover:bg-neon/10 hover:shadow-neon sm:px-5 sm:text-sm sm:tracking-[0.18em]"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neon/20 bg-neon/10 text-neonSoft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <span className="h-5 w-5">{social.icon}</span>
                      </span>
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-neon/15 bg-[radial-gradient(circle_at_top_right,rgba(63,169,255,0.16),transparent_38%),linear-gradient(180deg,rgba(17,25,42,0.95),rgba(7,10,16,0.95))] p-6 shadow-neon sm:p-10">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-neonSoft sm:text-xs sm:tracking-[0.28em]">Ready for collaboration</p>
              <h3 className="mt-4 text-2xl font-semibold text-textmain sm:text-3xl md:text-4xl">
                Ready to build a cleaner digital identity?
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-textmuted sm:text-base sm:leading-8 md:text-lg">
                If you are looking for serious opportunities and need a project that feels focused, modern, and technically credible, I'd love to help. Let's collaborate to bring the same precision, depth, and professional finish you see here to your next venture. Reach out below to get started.
              </p>

              <form
                className="mt-8 grid gap-4"
                action="https://formsubmit.co/aaroncalupitan2@gmail.com"
                method="POST"
              >
                <input type="hidden" name="_subject" value="New portfolio contact submission" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://aer-cal.github.io/My-Portfolio/" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full rounded-2xl border border-white/8 bg-ink/70 px-4 py-3.5 text-sm text-textmain outline-none transition-all duration-300 hover:border-neon/40 focus:border-neon/50 focus:shadow-neon sm:px-5 sm:py-4 sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-2xl border border-white/8 bg-ink/70 px-4 py-3.5 text-sm text-textmain outline-none transition-all duration-300 hover:border-neon/40 focus:border-neon/50 focus:shadow-neon sm:px-5 sm:py-4 sm:text-base"
                />
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Message"
                  required
                  className="w-full rounded-2xl border border-white/8 bg-ink/70 px-4 py-3.5 text-sm text-textmain outline-none transition-all duration-300 hover:border-neon/40 focus:border-neon/50 focus:shadow-neon sm:px-5 sm:py-4 sm:text-base"
                />
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-neon bg-neon px-7 py-3 font-semibold text-ink shadow-neon transition-all duration-300 hover:-translate-y-0.5 hover:bg-neonSoft"
                >
                  Send to Email
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 px-4 py-6 text-center text-sm text-textmuted sm:px-8">
        <p>&copy; 2026 Aer.Cal. All systems operational.</p>
      </footer>
    </div>
  )
}
