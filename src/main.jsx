import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Eye,
  EyeOff,
  FolderGit2,
  GitFork,
  GraduationCap,
  Link,
  LockKeyhole,
  Mail,
  Menu,
  Pencil,
  Plus,
  Save,
  Sparkles,
  Sun,
  Trash2,
  X,
  Moon,
} from 'lucide-react';
import './styles.css';

const initialData = {
  profile: {
    name: 'Dev Parekh',
    role: 'Full Stack Developer',
    intro:
      'Results-driven Full Stack Developer with 3+ years of experience in designing, developing, and maintaining scalable web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Skilled in building RESTful APIs, integrating third-party services, and implementing responsive user interfaces. Adept at collaborating with cross-functional teams to deliver high-quality software solutions on time and within budget.',
    location: 'Surat, India',
    email: 'devparekh2424@gmail.com',
    github: 'https://github.com/devparekh24',
    linkedin: 'https://www.linkedin.com/in/devparekh24',
    availability: 'Open to opportunities',
    photo: './profileImg.jpg',
    photoScale: 1,
    photoX: 0,
    photoY: 0,
  },
  skills: [
    {
      id: 1,
      name: 'JavaScript',
      category: 'Programming',
    },
    {
      id: 2,
      name: 'TypeScript',
      category: 'Programming',
    },
    {
      id: 3,
      name: 'Python',
      category: 'Programming',
    },
    {
      id: 4,
      name: 'Java',
      category: 'Programming',
    },
    {
      id: 5,
      name: 'C/C++',
      category: 'Programming',
    },
    {
      id: 6,
      name: 'PHP',
      category: 'Programming',
    },
    {
      id: 7,
      name: 'React.js',
      category: 'Frontend',
    },
    {
      id: 8,
      name: 'Next.js',
      category: 'Frontend',
    },
    {
      id: 9,
      name: 'Redux',
      category: 'Frontend',
    },
    {
      id: 10,
      name: 'Redux Toolkit',
      category: 'Frontend',
    },
    {
      id: 11,
      name: 'Redux Thunk',
      category: 'Frontend',
    },
    {
      id: 12,
      name: 'Redux Saga',
      category: 'Frontend',
    },
    {
      id: 13,
      name: 'RTK Query',
      category: 'Frontend',
    },
    {
      id: 14,
      name: 'HTML5',
      category: 'Frontend',
    },
    {
      id: 15,
      name: 'CSS3',
      category: 'Frontend',
    },
    {
      id: 16,
      name: 'Tailwind CSS',
      category: 'Frontend',
    },
    {
      id: 17,
      name: 'Bootstrap',
      category: 'Frontend',
    },
    {
      id: 18,
      name: 'React Bootstrap',
      category: 'Frontend',
    },
    {
      id: 19,
      name: 'Material UI',
      category: 'Frontend',
    },
    {
      id: 20,
      name: 'Ant Design',
      category: 'Frontend',
    },
    {
      id: 21,
      name: 'Node.js',
      category: 'Backend',
    },
    {
      id: 22,
      name: 'Express.js',
      category: 'Backend',
    },
    {
      id: 23,
      name: 'NestJS',
      category: 'Backend',
    },
    {
      id: 24,
      name: 'ASP.NET',
      category: 'Backend',
    },
    {
      id: 25,
      name: 'REST APIs',
      category: 'Backend',
    },
    {
      id: 26,
      name: 'GraphQL',
      category: 'Backend',
    },
    {
      id: 27,
      name: 'Socket.IO',
      category: 'Backend',
    },
    {
      id: 28,
      name: 'Webhooks',
      category: 'Backend',
    },
    {
      id: 29,
      name: 'Microservices',
      category: 'Architecture',
    },
    {
      id: 30,
      name: 'Event-Driven Architecture',
      category: 'Architecture',
    },
    {
      id: 31,
      name: 'MongoDB',
      category: 'Database',
    },
    {
      id: 32,
      name: 'Microsoft SQL Server',
      category: 'Database',
    },
    {
      id: 33,
      name: 'PostgreSQL',
      category: 'Database',
    },
    {
      id: 34,
      name: 'AWS',
      category: 'Cloud',
    },
    {
      id: 35,
      name: 'AWS Lambda',
      category: 'Cloud',
    },
    {
      id: 36,
      name: 'API Gateway',
      category: 'Cloud',
    },
    {
      id: 37,
      name: 'Amazon S3',
      category: 'Cloud',
    },
    {
      id: 38,
      name: 'DynamoDB',
      category: 'Cloud',
    },
    {
      id: 39,
      name: 'SNS',
      category: 'Cloud',
    },
    {
      id: 40,
      name: 'SQS',
      category: 'Cloud',
    },
    {
      id: 41,
      name: 'CloudWatch',
      category: 'Cloud',
    },
    {
      id: 42,
      name: 'IAM',
      category: 'Cloud',
    },
    {
      id: 43,
      name: 'GCP',
      category: 'Cloud',
    },
    {
      id: 44,
      name: 'GCP Pub/Sub',
      category: 'Cloud',
    },
    {
      id: 45,
      name: 'GCP Cloud Functions',
      category: 'Cloud',
    },
    {
      id: 46,
      name: 'GCP Cloud Run',
      category: 'Cloud',
    },
    {
      id: 47,
      name: 'Serverless Architecture',
      category: 'Cloud',
    },
    {
      id: 48,
      name: 'Docker',
      category: 'DevOps',
    },
    {
      id: 49,
      name: 'Git',
      category: 'Tools',
    },
    {
      id: 50,
      name: 'GitHub',
      category: 'Tools',
    },
    {
      id: 51,
      name: 'Postman',
      category: 'Tools',
    },
    {
      id: 52,
      name: 'Swagger',
      category: 'Tools',
    },
    {
      id: 53,
      name: 'VS Code',
      category: 'Tools',
    },
    {
      id: 54,
      name: 'WebStorm',
      category: 'Tools',
    },
    {
      id: 55,
      name: 'PyCharm',
      category: 'Tools',
    },
    {
      id: 56,
      name: 'Jest',
      category: 'Testing',
    },
    {
      id: 57,
      name: 'Playwright',
      category: 'Testing',
    },
    {
      id: 58,
      name: 'E2E Testing',
      category: 'Testing',
    },
    {
      id: 59,
      name: 'OpenAI APIs',
      category: 'GenAI',
    },
    {
      id: 60,
      name: 'Claude AI',
      category: 'GenAI',
    },
    {
      id: 61,
      name: 'LangChain',
      category: 'GenAI',
    },
    {
      id: 62,
      name: 'RAG',
      category: 'GenAI',
    },
    {
      id: 63,
      name: 'AI Agents',
      category: 'GenAI',
    },
    {
      id: 64,
      name: 'MCP',
      category: 'GenAI',
    },
    {
      id: 65,
      name: 'MCP Servers',
      category: 'GenAI',
    },
    {
      id: 66,
      name: 'Prompt Engineering',
      category: 'GenAI',
    },
    {
      id: 67,
      name: 'HubSpot APIs',
      category: 'Integrations',
    },
    {
      id: 68,
      name: 'HubSpot Custom Associations',
      category: 'Integrations',
    },
    {
      id: 69,
      name: 'Webflow CMS',
      category: 'Integrations',
    },
    {
      id: 70,
      name: 'Firebase',
      category: 'Cloud',
    },
  ],
  education: [
    {
      id: 1,
      program: 'Computer Engineering',
      school: 'Gujarat Technological University',
      period: '2019 — 2023',
      credential: "Bachelor's",
    },
  ],
  experience: [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'Lanet Team Software Solutions Pvt. Ltd.',
      period: 'July 2023 — Present',
      description:
        'Working on multiple enterprise applications across healthcare, e-commerce, finance, and fitness domains, delivering scalable full-stack solutions using modern web technologies. Experienced with React.js, Next.js, Node.js, NestJS, TypeScript, MongoDB, REST APIs, GraphQL, microservices, AWS, GCP, and event-driven architecture.',
    },
    {
      id: 2,
      role: 'React.js Developer Intern',
      company: 'Modi Software Solutions Pvt. Ltd.',
      period: 'Jan 2023 — Jun 2023',
      description:
        "Built a strong foundation in JavaScript (ES6+), Advanced JavaScript, and React.js by developing a CRUD-based Shopping Cart application, gaining hands-on experience in component-based development, API integration, and responsive UI design. Developed a responsive BYJU'S admin portal for managing employee records and educational courses using React.js and modern UI libraries including Bootstrap, React Bootstrap, Ant Design (AntD), and Material UI (MUI).",
    },
    {
      id: 3,
      role: 'Web Developer Intern',
      company: 'PALSOFT India',
      period: 'Jun 2022 — Dec 2022',
      description:
        'Learned C#, ASP.NET, Visual Studio, and MS SQL Server through hands-on development of a Cafe Management System from scratch. Implemented CRUD operations, database connectivity, SQL queries, and application logic while gaining practical experience in backend and database development.',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'MBSPro',
      type: 'Healthcare / AI Billing Platform',
      description:
        'A healthcare platform for medical consultation, AI-assisted clinical documentation, and MBS billing workflows. Worked primarily on the frontend using Next.js, React, TypeScript, and MUI, including a reusable Design System, UI improvements, new features, and performance optimization through lazy loading.',
      tags: 'Next.js, React, TypeScript, MUI, Redux Toolkit, ASP.NET',
      link: 'https://www.mbspro.com.au',
    },
    {
      id: 2,
      title: 'Restoration Hardware (RH)',
      type: 'E-commerce platform',
      description:
        'Worked on an e-commerce platform, developing features, fixing bugs, and contributing to application modules and components. Worked with React, TypeScript, GraphQL, Context API, Jest, and Playwright.',
      tags: 'React, TypeScript, GraphQL, Context API, Jest, Playwright',
      link: 'https://rh.com',
    },
    {
      id: 3,
      title: 'GetMeJuice',
      type: 'Financial / Loan Processing Platform',
      description:
        'A financial platform focused on loan processing workflows. Developed NestJS microservices and worked with GCP Pub/Sub, Webhooks, HubSpot APIs, Webflow CMS, and Firebase. Implemented event-driven communication for real-time loan processing updates.',
      tags: 'Next.js, NestJS, TypeScript, GCP, Firebase, HubSpot, Webhooks, Webflow',
      link: 'https://getmejuice.com',
    },
    {
      id: 4,
      title: 'Red Belt Gym (RBG)',
      type: 'Fitness platform / Serverless Backend',
      description:
        'Worked on a serverless backend architecture using Node.js and AWS services. Developed backend workflows using Lambda, S3, SNS, SQS, DynamoDB, and CloudWatch with a focus on scalable and event-driven application architecture.',
      tags: 'Node.js, AWS Lambda, S3, DynamoDB, SNS, SQS, CloudWatch, Serverless',
      link: 'https://www.redbeltgym.com',
    },
    {
      id: 5,
      title: 'DriveEasy - Car Rental System',
      type: 'MERN car rental platform',
      description:
        'A MERN-based car rental platform with JWT authentication, car listings, search and filtering, flexible rental pricing, booking and availability management, Razorpay payments, notifications, and an admin dashboard for managing vehicles, users, bookings, and damage reports.',
      tags: 'React, TypeScript, Redux Toolkit, Node.js, Express.js, MongoDB, JWT, Razorpay',
      link: 'https://github.com/devparekh24/DriveEasy-CRS',
    },
    {
      id: 6,
      title: 'CryptoTwits Dashboard',
      type: 'Cryptocurrency analytics dashboard',
      description:
        'A cryptocurrency dashboard built with React.js that integrates the CoinGecko API to display crypto data and market insights, with interactive ApexCharts visualizations and a responsive Bootstrap dark-mode interface.',
      tags: 'React.js, ApexCharts, Bootstrap, CoinGecko API',
      link: 'https://github.com/devparekh24/cryptotwits-dashboard',
    },
    {
      id: 7,
      title: 'Cafe Management System',
      type: 'Desktop CRUD application',
      description:
        'Built a Cafe Management System from scratch as a learning project using ASP.NET, Visual Studio, and MS SQL Server, implementing CRUD functionality.',
      tags: 'ASP.NET, C#, MS SQL Server, Visual Studio',
      link: 'https://github.com/devparekh24/CafeManagementSys',
    },
    {
      id: 8,
      title: "BYJU'S Admin System",
      type: 'Responsive Admin Platform',
      description:
        'Developed a responsive admin system for managing employee records and educational courses while gaining hands-on experience with React and modern UI component libraries.',
      tags: 'React.js, JavaScript, Bootstrap, React Bootstrap, Ant Design, MUI',
      link: 'https://byjus.com',
    },
    {
      id: 9,
      title: 'Shopping Cart System',
      type: 'CRUD learning project',
      description:
        'Built a CRUD-based Shopping Cart application while learning JavaScript and React, with hands-on experience in building interactive user interfaces.',
      tags: 'JavaScript, React.js, HTML, CSS',
      link: 'https://github.com/devparekh24/cart-app',
    },
  ],
};
const uid = () => Date.now();
const apiBase = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || '';
const apiUrl = (path) => `${apiBase}${path}`;

const SKILLS_PREVIEW = 4; // how many skills to show before "Show more"

function SkillCard({ category, skills, index, totalCategories }) {
  const [expanded, setExpanded] = useState(false);
  const extraRef = React.useRef(null);
  const hasMore = skills.length > SKILLS_PREVIEW;
  const visible = expanded ? skills : skills.slice(0, SKILLS_PREVIEW);
  const hidden = skills.slice(SKILLS_PREVIEW);

  return (
    <article className={`skill-card tone-${index % 6}`}>
      {/* Header row: counter + count badge + glow dot */}
      <div className="skill-card-top">
        <span>
          {String(index + 1).padStart(2, '0')} / {String(totalCategories).padStart(2, '0')}
        </span>
        <span className="skill-count-badge">{skills.length} skills</span>
        <i />
      </div>

      <h3>{category}</h3>
      <p>
        — {skills.length} {skills.length === 1 ? 'skill' : 'skills'} in this area
      </p>

      {/* Always-visible skills */}
      <div className="skill-list">
        {visible.map((skill) => (
          <div key={skill.id}>
            <span>{skill.name}</span>
            <b>{skill.level || 'Proficient'}</b>
          </div>
        ))}
      </div>

      {/* Collapsible extra skills */}
      {hasMore && (
        <>
          <div
            className={`skill-list-extra ${expanded ? 'expanded' : ''}`}
            ref={extraRef}
            style={{
              maxHeight: expanded ? `${hidden.length * 46}px` : '0px',
            }}
          >
            {hidden.map((skill) => (
              <div key={skill.id}>
                <span>{skill.name}</span>
                <b>{skill.level || 'Proficient'}</b>
              </div>
            ))}
          </div>

          <button
            className="skill-toggle"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
          >
            {expanded ? <>↑ Show less</> : <>↓ Show {hidden.length} more</>}
          </button>
        </>
      )}
    </article>
  );
}

function App() {
  const [data, setData] = useState(initialData);
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') || 'dark';
    } catch {
      return 'dark';
    }
  });
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const deploymentPath = new URLSearchParams(window.location.search).get('path');
  if (deploymentPath)
    window.history.replaceState(
      null,
      '',
      `${import.meta.env.BASE_URL.replace(/\/$/, '')}${deploymentPath}`
    );
  useEffect(() => {
    fetch(apiUrl('/api/portfolio'))
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setData)
      .catch(() => {});
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);
  const appPath = window.location.pathname.startsWith(basePath)
    ? window.location.pathname.slice(basePath.length) || '/'
    : window.location.pathname;
  if (appPath === '/admin' || appPath.startsWith('/admin/'))
    return <AdminGate data={data} setData={setData} theme={theme} setTheme={setTheme} />;
  const p = data.profile;
  return (
    <div>
      <header>
        <a className="brand-name" href="#top">
          <span className="first-name">{p.name.split(' ')[0]}</span>
          <span className="first-name">{p.name.split(' ')[1]}</span>
        </a>
        <div className="header-actions">
          <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        <nav className={menu ? 'open' : ''}>
          <a className="nav-link" href="#work">
            Work & Projects
          </a>
          <a className="nav-link" href="#skills">
            Skills
          </a>
          <a className="nav-link" href="#experience">
            Experience
          </a>
          {/* <a className="nav-link" href="#about">
            About
          </a> */}
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main id="top">
        <section className="hero">
          <div>
            <p className="eyebrow">
              <span /> {p.availability}
            </p>
            <h1>
              Building scalable
              <br />
              <em>Applications </em> with Modern Tech.
            </h1>
            {/* <p className="lede">{p.intro}</p> */}
            <div className="actions">
              <a className="button" href="#work">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href={`mailto:${p.email}`}>
                Let’s work together <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="hero-mark">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            {p.photo ? (
              <div className="profile-photo-frame">
                <img
                  className="profile-photo"
                  src={p.photo}
                  alt={`Portrait of ${p.name}`}
                  style={{
                    transform: `translate(${p.photoX || 0}px, ${p.photoY || 0}px) scale(${p.photoScale || 1})`,
                  }}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </section>
        <section className="strip">
          <span>
            <Sparkles size={18} /> {p.role}
          </span>
          <span>
            <span className="dot" /> {p.location}
          </span>
        </section>
        <section className="intro-section">
          <p className="intro-text">{p.intro}</p>
        </section>
        <section id="work" className="section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Ideas brought to life.</h2>
            <p>Each project is an exercise in clarity, utility, and a little bit of delight.</p>
          </div>
          <div className="projects">
            {data.projects.map((x, i) => (
              <article className={`project p${i % 3}`} key={x.id}>
                <div className="project-visual">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <FolderGit2 size={46} />
                </div>
                <div className="project-copy">
                  <p>{x.type}</p>
                  <h3>{x.title}</h3>
                  <div className="project-bottom">
                    <span>{x.description}</span>
                    <a
                      href={x.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${x.title}`}
                    >
                      <ArrowUpRight />
                    </a>
                  </div>
                  <div className="tags">
                    {x.tags.split(',').map((t) => (
                      <i key={t}>{t.trim()}</i>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="skills" className="skills-section section">
          <div className="section-heading skills-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>
              Tools I use to make
              <br />
              <em>things work.</em>
            </h2>
          </div>
          <div className="skill-cards">
            {[...new Set(data.skills.map((skill) => skill.category))].map((category, index) => {
              const skills = data.skills.filter((skill) => skill.category === category);
              const totalCategories = new Set(data.skills.map((s) => s.category)).size;
              return (
                <SkillCard
                  key={category}
                  category={category}
                  skills={skills}
                  index={index}
                  totalCategories={totalCategories}
                />
              );
            })}
          </div>
        </section>
        {/* <section id="about" className="about section">
          <div className="section-heading">
            <p className="eyebrow">A little about me</p>
            <h2>
              Human at the
              <br />
              heart of the work.
            </h2>
          </div>
          <div className="about-content">
            <p>
              I’m a developer who cares as much about the feeling of a product as the code behind
              it. I enjoy collaborating with ambitious people to make useful things feel effortless.
            </p>
            <div className="skill-groups">
              {[...new Set(data.skills.map((s) => s.category))].map((c) => (
                <div key={c}>
                  <b>{c}</b>
                  <p>
                    {data.skills
                      .filter((s) => s.category === c)
                      .map((s) => s.name)
                      .join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        <section id="experience" className="experience section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Places I’ve learned.</h2>
          </div>
          <div className="timeline">
            {data.experience.map((x) => (
              <article key={x.id}>
                <p>{x.period}</p>
                <div>
                  <h3>{x.role}</h3>
                  <h4>{x.company}</h4>
                  <span>{x.description}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="education-section section">
          <div className="section-heading credentials-heading">
            <p className="eyebrow">Credentials</p>
            <h2>
              Where I <em>studied.</em>
            </h2>
          </div>
          <div className="education-grid">
            {(data.education || []).map((item, index) => (
              <article className={`education-card tone-${index % 6}`} key={item.id}>
                <div>
                  <h3>{item.program}</h3>
                  <p>{item.school}</p>
                  <span>{item.period}</span>
                </div>
                <b>{item.credential}</b>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="contact">
          <p className="eyebrow">Have a project in mind?</p>
          <div className="contact-section-heading">
            <h2>
              Let’s build it
              <br />
              <em>together.</em>
            </h2>
            <a className="button light" href={`mailto:${p.email}`}>
              Start a conversation <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>
      <footer>
        <span>
          © {new Date().getFullYear()} {p.name}
        </span>
        <div>
          <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitFork size={18} />
          </a>
          <a href={p.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Link size={18} />
          </a>
          <a href={`mailto:${p.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

function AdminGate({ data, setData, theme, setTheme }) {
  const [token, setToken] = useState(() => sessionStorage.getItem('portfolio-admin-token'));
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const login = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError('');
    try {
      const response = await fetch(apiUrl('/api/auth/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error);
      sessionStorage.setItem('portfolio-admin-token', body.token);
      setToken(body.token);
    } catch (err) {
      setError(err.message || 'Could not sign in.');
    } finally {
      setBusy(false);
    }
  };
  if (!token)
    return (
      <main className="login-page">
        <div className="login-actions">
          <a className="brand-name" href={import.meta.env.BASE_URL}>
            <span className="first-name">Dev</span>
            <span className="first-name">Parekh</span>
          </a>
        </div>
        <form className="login-card" onSubmit={login}>
          <LockKeyhole size={24} />
          <p className="eyebrow">Restricted access</p>
          <h1>Admin sign in</h1>
          <p>Sign in to manage your portfolio content.</p>
          <label>
            Email
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>
          <label>
            Password
            <span className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </span>
          </label>
          {error && <span className="error">{error}</span>}
          <button className="button" disabled={busy}>
            {busy ? 'Signing in…' : 'Sign in'} <ArrowUpRight size={17} />
          </button>
        </form>
      </main>
    );
  return (
    <Admin
      data={data}
      setData={setData}
      token={token}
      theme={theme}
      setTheme={setTheme}
      logout={() => {
        sessionStorage.removeItem('portfolio-admin-token');
        setToken('');
      }}
    />
  );
}

function Admin({ data, setData, token, theme, setTheme, logout }) {
  const [tab, setTab] = useState('profile');
  const [saved, setSaved] = useState(false);
  const [draft, setDraft] = useState(data);
  const [error, setError] = useState('');
  const save = async () => {
    setError('');
    const response = await fetch(apiUrl('/api/portfolio'), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(draft),
    });
    if (!response.ok) {
      setError('Your session has expired. Please sign in again.');
      return;
    }
    setData(draft);
    setSaved(true);
    setTimeout(() => setSaved(false), 1600);
  };
  const uploadPhoto = async (event) => {
    const photo = event.target.files?.[0];
    if (!photo) return;
    setError('');
    const form = new FormData();
    form.append('photo', photo);
    const response = await fetch(apiUrl('/api/uploads/profile-photo'), {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    });
    const body = await response.json();
    if (!response.ok) {
      setError(body.error || 'Photo upload failed.');
      return;
    }
    set('profile', { ...draft.profile, photo: body.url });
  };
  const set = (section, value) => setDraft((d) => ({ ...d, [section]: value }));
  const field = (obj, k, v) => ({ ...obj, [k]: v });
  const remove = (section, id) =>
    set(
      section,
      draft[section].filter((x) => x.id !== id)
    );
  const tabs = [
    ['profile', 'Profile'],
    ['skills', 'Skills'],
    ['experience', 'Experience'],
    ['education', 'Education'],
    ['projects', 'Projects'],
  ];
  return (
    <div className="admin">
      <aside>
        <a className="brand-name">
          <span className="first-name">{draft.profile.name.split(' ')[0]}</span>
          <span className="last-name">{draft.profile.name.split(' ')[1]}</span>
        </a>
        <p>CONTENT STUDIO</p>
        {tabs.map(([id, label]) => (
          <button className={tab === id ? 'active' : ''} onClick={() => setTab(id)} key={id}>
            {id === 'skills' ? (
              <Sparkles />
            ) : id === 'experience' ? (
              <BriefcaseBusiness />
            ) : id === 'education' ? (
              <GraduationCap />
            ) : id === 'projects' ? (
              <FolderGit2 />
            ) : (
              <Pencil />
            )}
            {label}
          </button>
        ))}
        <a className="back" href={import.meta.env.BASE_URL}>
          ← View portfolio
        </a>
        <button className="logout" onClick={logout}>
          Sign out
        </button>
      </aside>
      <div className="admin-main">
        <div className="admin-head">
          <div>
            <p className="eyebrow">Portfolio editor</p>
            <h1>{tabs.find((x) => x[0] === tab)[1]}</h1>
          </div>
          <div className="admin-head-actions">
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <button className="button" onClick={save}>
              <Save size={17} />
              {saved ? 'Saved!' : 'Save changes'}
            </button>
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        {tab === 'profile' && (
          <div className="form-card grid">
            <div className="photo-control">
              <div className="photo-preview">
                {draft.profile.photo ? (
                  <img
                    src={draft.profile.photo}
                    alt="Current profile"
                    style={{
                      transform: `translate(${draft.profile.photoX || 0}px, ${draft.profile.photoY || 0}px) scale(${draft.profile.photoScale || 1})`,
                    }}
                  />
                ) : (
                  <span>
                    {draft.profile.name
                      .split(' ')
                      .map((x) => x[0])
                      .join('')}
                  </span>
                )}
              </div>
              <label>
                Profile photo
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={uploadPhoto}
                />
              </label>
              <small>JPEG, PNG, WebP, or GIF · up to 5 MB</small>
              <div className="image-adjustments">
                <b>Image adjustment</b>
                <label>
                  Zoom <output>{Number(draft.profile.photoScale || 1).toFixed(2)}×</output>
                  <input
                    type="range"
                    min="1"
                    max="2.5"
                    step="0.05"
                    value={draft.profile.photoScale || 1}
                    onChange={(e) =>
                      set('profile', { ...draft.profile, photoScale: Number(e.target.value) })
                    }
                  />
                </label>
                <label>
                  Move left / right
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    step="1"
                    value={draft.profile.photoX || 0}
                    onChange={(e) =>
                      set('profile', { ...draft.profile, photoX: Number(e.target.value) })
                    }
                  />
                </label>
                <label>
                  Move up / down
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    step="1"
                    value={draft.profile.photoY || 0}
                    onChange={(e) =>
                      set('profile', { ...draft.profile, photoY: Number(e.target.value) })
                    }
                  />
                </label>
                <button
                  type="button"
                  className="reset-image"
                  onClick={() =>
                    set('profile', { ...draft.profile, photoScale: 1, photoX: 0, photoY: 0 })
                  }
                >
                  Reset crop
                </button>
              </div>
            </div>
            {Object.entries(draft.profile)
              .filter(([k]) => !['photo', 'photoScale', 'photoX', 'photoY'].includes(k))
              .map(([k, v]) => (
                <label key={k}>
                  {k.replace(/([A-Z])/g, ' $1')}
                  <input
                    value={v}
                    onChange={(e) => set('profile', field(draft.profile, k, e.target.value))}
                  />
                </label>
              ))}
          </div>
        )}
        {tab === 'skills' && (
          <Editor
            items={draft.skills}
            fields={['name', 'category', 'level']}
            onChange={(v) => set('skills', v)}
            onRemove={(id) => remove('skills', id)}
            onAdd={() =>
              set('skills', [
                ...draft.skills,
                { id: uid(), name: 'New skill', category: 'General', level: 'Proficient' },
              ])
            }
          />
        )}
        {tab === 'experience' && (
          <Editor
            items={draft.experience}
            fields={['role', 'company', 'period', 'description']}
            onChange={(v) => set('experience', v)}
            onRemove={(id) => remove('experience', id)}
            onAdd={() =>
              set('experience', [
                ...draft.experience,
                {
                  id: uid(),
                  role: 'New role',
                  company: 'Company',
                  period: '2026 — Present',
                  description: 'Describe your work.',
                },
              ])
            }
          />
        )}
        {tab === 'education' && (
          <Editor
            items={draft.education || []}
            fields={['program', 'school', 'period', 'credential']}
            onChange={(v) => set('education', v)}
            onRemove={(id) => remove('education', id)}
            onAdd={() =>
              set('education', [
                ...(draft.education || []),
                {
                  id: uid(),
                  program: 'New program',
                  school: 'Institution',
                  period: '2026',
                  credential: 'Certificate',
                },
              ])
            }
          />
        )}
        {tab === 'projects' && (
          <Editor
            items={draft.projects}
            fields={['title', 'type', 'description', 'tags', 'link']}
            onChange={(v) => set('projects', v)}
            onRemove={(id) => remove('projects', id)}
            onAdd={() =>
              set('projects', [
                ...draft.projects,
                {
                  id: uid(),
                  title: 'New project',
                  type: 'Project type',
                  description: 'Describe your project.',
                  tags: 'React, TypeScript',
                  link: 'https://github.com',
                },
              ])
            }
          />
        )}
      </div>
    </div>
  );
}
function Editor({ items, fields, onChange, onRemove, onAdd }) {
  const change = (id, k, v) => onChange(items.map((x) => (x.id === id ? { ...x, [k]: v } : x)));
  return (
    <div className="editor">
      <button className="add" onClick={onAdd}>
        <Plus size={17} /> Add new
      </button>
      {items.map((x, n) => (
        <div className="form-card item" key={x.id}>
          <div className="item-title">
            <span>0{n + 1}</span>
            <button onClick={() => onRemove(x.id)} title="Delete">
              <Trash2 size={17} />
            </button>
          </div>
          <div className="grid">
            {fields.map((k) => (
              <label key={k}>
                {k}
                <textarea
                  rows={k === 'description' ? 3 : 1}
                  value={x[k]}
                  onChange={(e) => change(x.id, k, e.target.value)}
                />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
createRoot(document.getElementById('root')).render(<App />);
