import { Mail, Phone, MapPin, FileText } from 'lucide-react';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const experience = [
  {
    company: 'State Farm Insurance',
    role: 'Lead Software Engineer',
    period: 'May 2025 – Present',
    bullets: [
      'Amazon Prime ad integration — 20% conversion lift via data-prefill automation; cross-functional collaboration across eng, product, and creative teams',
      'Championed AI-driven development — trained team on OpenCode, MCP, and Subagents; built automated vulnerability resolution agent cutting fix time by 2.5 hrs per issue',
      '6 microservices at 99.9% uptime handling 10M daily requests; lead team of 4 engineers',
    ],
  },
  {
    company: 'State Farm Insurance',
    role: 'Software Engineer 2',
    period: 'Mar 2022 – May 2025',
    bullets: [
      'Led migration of 5 services on-prem → AWS; rewrote Java → TypeScript; deployed via Terraform, Docker, and Kubernetes',
      'Rearchitected 2 cloud-native Lambda services processing 3M daily requests in under 500ms',
      'Security champion: migrated LDAP → OIDC; integrated Snyk scans into GitLab CI/CD; built Dynatrace + Splunk observability',
      'Mentored 2 mid-level engineers and 1 intern',
    ],
  },
  {
    company: 'State Farm Insurance',
    role: 'Software Engineer 1',
    period: 'Apr 2021 – Mar 2022',
    bullets: [
      'Reduced lost leads by 96% via scored string-matching algorithm (Java) matching vendor vehicle data to internal values',
      'Parallelized GitLab CI/CD pipelines across 4 microservices, cutting run time by 12% (3:20 min); 2nd place company hackathon',
      'Built Splunk + Grafana dashboards reducing MTTR across 6 services',
    ],
  },
  {
    company: 'Argo Data Resource Group',
    role: 'Software Dev Intern',
    period: 'Jun 2020 – Aug 2020',
    bullets: [
      'SQL scripts eliminated manual redeployment steps; modernized IE9 → Chromium UI (JavaScript, HTML, CSS)',
    ],
  },
];

const skills = {
  Languages: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'Go'],
  Frameworks: ['Spring Boot', 'React', 'Angular', 'Express'],
  'Cloud & Ops': ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitLab CI/CD'],
  'Obs & Security': ['Splunk', 'Dynatrace', 'Grafana', 'Snyk', 'OIDC'],
  'AI & Workflows': ['OpenCode', 'MCP', 'Subagents', 'AI Agent Development', 'Prompt Engineering'],
};

const certs = ['AWS Cloud Practitioner (Jul 2022)', 'AWS Developer – Associate (in progress)'];

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 font-sans antialiased transition-colors">
      <div className="max-w-5xl mx-auto p-5 md:p-8 min-h-screen flex flex-col">

        {/* CONTACT STRIP */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl px-4 py-3 mb-5 text-sm">
          <a href="mailto:raujimenez@outlook.com" className="inline-flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
            <Mail size={14} /> Email
          </a>
          <a href="tel:4695168856" className="inline-flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
            <Phone size={14} /> Call
          </a>
          <a href="https://www.linkedin.com/in/raujimenez/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="https://github.com/raujimenez" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
            <GitHubIcon /> GitHub
          </a>
          <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
            <MapPin size={14} /> Dallas, TX
          </span>
        </div>

        {/* HEADER */}
        <header className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-5">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-1">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Raul Jimenez</h1>
              <p className="text-base md:text-lg text-blue-600 dark:text-blue-400 font-semibold">Lead Software Engineer</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Full-stack · Cloud-native · AI workflow champion · Team leadership · 5+ years
              </p>
            </div>
            <div className="hidden md:block text-sm text-gray-500 dark:text-gray-400">
              <a href="mailto:raujimenez@outlook.com" className="hover:text-blue-600 dark:hover:text-blue-400 block">raujimenez@outlook.com</a>
              <a href="tel:4695168856" className="hover:text-blue-600 dark:hover:text-blue-400 block">(469) 516-8856</a>
            </div>
          </div>
        </header>

        {/* BODY */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-1">

          {/* LEFT — Experience */}
          <div className="md:flex-[2]">
            <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Experience</h2>
            <div className="space-y-4">
              {experience.map((job) => (
                <div key={job.role}>
                  <div className="flex items-baseline justify-between flex-wrap gap-1">
                    <p className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                      {job.role} <span className="font-normal text-gray-500 dark:text-gray-400">— {job.company}</span>
                    </p>
                    <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">{job.period}</span>
                  </div>
                  <ul className="mt-1 space-y-0.5">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-300 pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-400">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Skills + Education */}
          <div className="md:flex-1 flex flex-col gap-6">
            {/* SKILLS */}
            <div>
              <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Skills</h2>
              <div className="space-y-2">
                {Object.entries(skills).map(([cat, items]) => (
                  <div key={cat}>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">{cat}</p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {items.map((s) => (
                        <span key={s} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-0.5 rounded-md font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div>
              <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Certifications</h2>
              <ul className="space-y-1">
                {certs.map((c) => (
                  <li key={c} className="text-sm text-gray-600 dark:text-gray-300">{c}</li>
                ))}
              </ul>
            </div>

            {/* EDUCATION */}
            <div>
              <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Education</h2>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">UT Arlington — B.S. Computer Science</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Dec 2020 · GPA 4.0 · Summa Cum Laude · Dean's List</p>
            </div>

            {/* RESUME LINK */}
            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
              <a href="/resume.pdf" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                <FileText size={16} />
                Download resume (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="border-t border-gray-200 dark:border-gray-800 pt-3 mt-6 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
          <span>© {new Date().getFullYear()} Raul Jimenez</span>
          <span>React + Tailwind</span>
        </footer>

      </div>
    </div>
  );
}
