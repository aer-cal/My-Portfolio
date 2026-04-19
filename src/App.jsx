import { useEffect, useRef, useState } from 'react'

const navLinks = ['Home', 'About', 'Skills', 'Badges', 'Contact']

const skillCards = [
  {
    title: 'Cybersecurity & Risk Monitoring',
    description: 'Implementing threat mitigation protocols and heuristic evaluation for secure environments.',
    levelLabel: 'Beginner',
    levelValue: 35,
  },
  {
    title: 'System Administration',
    description: 'Server maintenance, Linux / OS management, and technical hardware / software troubleshooting.',
    levelLabel: 'Beginner',
    levelValue: 40,
  },
  {
    title: 'Technical Development',
    description: 'Building efficient tools using Python, Eel frameworks, and managing complex integrations.',
    levelLabel: 'Beginner',
    levelValue: 38,
  },
]

const badges = [
  {
    icon: '🛡️',
    title: 'Cisco Linux Essentials',
    description: 'Professional badge verifying fundamental knowledge of Linux systems and the command line.',
  },
  {
    icon: '⚙️',
    title: 'Cisco OS Basics',
    description: 'Certification covering core operating system concepts, installation, and troubleshooting.',
  },
  {
    icon: '💻',
    title: 'MediCast Capstone',
    description: 'Health profiling and forecast risk monitoring system developed with structured black-box testing.',
  },
]

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
  { src: '/assets/image_4215ea.jpg', position: '52% 30%' },
  { src: '/assets/1000075972.jpg', position: '56% 24%' },
  { src: '/assets/1000075973.jpg', position: '54% 20%' },
]

const sectionTitleClass =
  'mb-8 text-3xl font-semibold uppercase tracking-[0.28em] text-textmain md:text-4xl'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [animateSkillBars, setAnimateSkillBars] = useState(false)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-8 lg:px-12">
          <a href="#home" className="text-2xl font-semibold tracking-[0.28em] text-textmain">
            Aer<span className="text-neon">.Cal</span>
          </a>
          <nav>
            <ul className="flex flex-wrap justify-end gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-textmuted sm:gap-4 sm:text-xs">
              {navLinks.map((link) => {
                const target = link.toLowerCase()
                return (
                  <li key={link}>
                    <a
                      className={`rounded-full border px-3 py-2 transition-all duration-300 ${
                        activeSection === target
                          ? 'border-neon/40 bg-neon/10 text-textmain shadow-neon'
                          : 'border-white/5 bg-white/3 hover:-translate-y-0.5 hover:border-neon/30 hover:bg-neon/10 hover:text-textmain hover:shadow-neon'
                      }`}
                      href={`#${target}`}
                      onClick={() => setActiveSection(target)}
                    >
                      {link}
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
          className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center gap-12 px-4 pb-16 pt-28 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12"
        >
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-neon/20 bg-panel/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-neonSoft shadow-neon backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-neon shadow-neon" />
              System Admin & Security Ready
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
              AARON L. CALUPITAN
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-textmuted md:text-xl">
              IT Professional &amp; Graduating IT Student (Aer.Cal). Specializing in Software Development, IT Infrastructure.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full border border-neon bg-neon px-7 py-3 font-semibold text-ink shadow-neon transition-all duration-300 hover:-translate-y-0.5 hover:bg-neonSoft"
              >
                Initiate Contact
              </a>
              <a
                href="#skills"
                className="rounded-full border border-white/10 bg-white/5 px-7 py-3 font-semibold text-textmain transition-all duration-300 hover:border-neon/40 hover:bg-neon/10"
              >
                View Capabilities
              </a>
            </div>
          </div>

          <div className="w-full max-w-sm md:max-w-md lg:w-2/5">
            <div className="group relative overflow-hidden rounded-[2rem] border border-neon/20 bg-panel/85 p-3 shadow-neon backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-neon/40 hover:shadow-[0_0_32px_rgba(63,169,255,0.42)]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(63,169,255,0.14),transparent_40%,transparent_60%,rgba(63,169,255,0.08))]" />
              <div className="relative h-[420px] w-full overflow-hidden rounded-[1.5rem]">
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
              <div className="absolute left-5 top-5 rounded-full border border-neon/25 bg-ink/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-neonSoft backdrop-blur">
                Command Profile
              </div>
              <div className="pointer-events-none absolute -inset-x-10 bottom-6 h-8 -rotate-6 bg-neon/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 lg:px-12">
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
                  className="rounded-2xl border border-white/5 bg-panel/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-neon/30 hover:bg-panelSoft hover:shadow-neon"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-neon/25 bg-neon/10 text-neonSoft">
                    <span className="h-5 w-5">{item.icon}</span>
                  </div>
                  <p className="text-3xl font-semibold text-neonSoft">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-textmuted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          ref={skillsSectionRef}
          className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 lg:px-12"
        >
          <h2 className={sectionTitleClass}>Core Capabilities</h2>
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
                    <span>{card.levelValue}%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink/80">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,rgba(63,169,255,0.5),rgba(123,200,255,0.95))] shadow-neon transition-all duration-1000 ease-out group-hover:brightness-110"
                      style={{
                        width: animateSkillBars ? `${card.levelValue}%` : '0%',
                        transitionDelay: `${index * 180}ms`,
                      }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="badges" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 lg:px-12">
          <h2 className={sectionTitleClass}>Credentials & Works</h2>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {badges.map((badge) => (
              <div
                key={badge.title}
                className="group rounded-[1.75rem] border border-neon/15 bg-[linear-gradient(180deg,rgba(63,169,255,0.08),rgba(13,19,32,0.9))] p-8 shadow-neon transition-all duration-300 hover:-translate-y-1 hover:border-neon/35 hover:shadow-[0_0_34px_rgba(63,169,255,0.35)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-ink/80 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-neon group-hover:text-ink">
                  {badge.icon}
                </div>
                <h3 className="text-2xl font-semibold text-textmain">{badge.title}</h3>
                <p className="mt-3 text-sm leading-7 text-textmuted">{badge.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 lg:px-12">
          <h2 className={sectionTitleClass}>Contact</h2>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.75rem] border border-white/5 bg-panel/80 p-7 backdrop-blur-sm sm:p-10">
              <p className="text-base leading-8 text-textmuted md:text-lg">
                Looking to fortify your IT infrastructure or need a dedicated professional for your next project?
                This is the place to reach out.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:aaroncalupitan2@gmail.com"
                  className="block rounded-2xl border border-white/8 bg-white/3 px-5 py-4 text-sm uppercase tracking-[0.22em] text-textmain transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/30 hover:bg-neon/10 hover:shadow-neon"
                >
                  aaroncalupitan2@gmail.com
                </a>
                <div className="rounded-2xl border border-white/8 bg-white/3 px-5 py-4 text-sm uppercase tracking-[0.22em] text-textmain">
                  Santa Cruz, Laguna, Philippines
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/3 px-5 py-4 text-sm uppercase tracking-[0.18em] text-textmain transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/30 hover:bg-neon/10 hover:shadow-neon"
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

            <div className="rounded-[1.75rem] border border-neon/15 bg-[radial-gradient(circle_at_top_right,rgba(63,169,255,0.16),transparent_38%),linear-gradient(180deg,rgba(17,25,42,0.95),rgba(7,10,16,0.95))] p-7 shadow-neon sm:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-neonSoft">Ready for collaboration</p>
              <h3 className="mt-4 text-3xl font-semibold text-textmain md:text-4xl">
                A cleaner digital identity for serious opportunities.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-textmuted md:text-lg">
                If you want a portfolio that feels focused, modern, and technically credible, the monochrome blue-black
                direction gives it precision, depth, and a stronger professional finish.
              </p>

              <form className="mt-8 grid gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-2xl border border-white/8 bg-ink/70 px-5 py-4 text-textmain outline-none transition-all duration-300 hover:border-neon/40 focus:border-neon/50 focus:shadow-neon"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-2xl border border-white/8 bg-ink/70 px-5 py-4 text-textmain outline-none transition-all duration-300 hover:border-neon/40 focus:border-neon/50 focus:shadow-neon"
                />
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full rounded-2xl border border-white/8 bg-ink/70 px-5 py-4 text-textmain outline-none transition-all duration-300 hover:border-neon/40 focus:border-neon/50 focus:shadow-neon"
                />
                <button
                  type="button"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-neon bg-neon px-7 py-3 font-semibold text-ink shadow-neon transition-all duration-300 hover:-translate-y-0.5 hover:bg-neonSoft"
                >
                  Submit Protocol
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
