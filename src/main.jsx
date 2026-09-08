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
    name: 'Alex Morgan',
    role: 'Full-stack developer & product builder',
    intro:
      'I design and build thoughtful digital experiences where clean engineering meets human-centered design.',
    location: 'Bengaluru, India',
    email: 'hello@alexmorgan.dev',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    availability: 'Open to opportunities',
    photo: 'https://api.dicebear.com/9.x/personas/svg?seed=Alex&backgroundColor=b6e3f4',
    photoScale: 1,
    photoX: 0,
    photoY: 0,
  },
  skills: [
    { id: 1, name: 'React', category: 'Interface', level: 'Advanced' },
    { id: 2, name: 'TypeScript', category: 'Interface', level: 'Advanced' },
    { id: 3, name: 'Next.js', category: 'Interface', level: 'Proficient' },
    { id: 4, name: 'Node.js', category: 'Server & APIs', level: 'Advanced' },
    { id: 5, name: 'PostgreSQL', category: 'Databases', level: 'Advanced' },
    { id: 6, name: 'Figma', category: 'Design systems', level: 'Proficient' },
  ],
  education: [
    {
      id: 1,
      program: 'Applied Computer Science',
      school: 'Concordia University',
      period: '2024 — 2025',
      credential: "Master's",
    },
    {
      id: 2,
      program: 'Computer Engineering',
      school: 'Gujarat Technological University',
      period: '2019 — 2023',
      credential: "Bachelor's",
    },
  ],
  experience: [
    {
      id: 1,
      role: 'Senior Product Engineer',
      company: 'Northstar Labs',
      period: '2023 — Present',
      description:
        'Leading end-to-end product development for a fast-moving B2B platform used by teams around the world.',
    },
    {
      id: 2,
      role: 'Frontend Engineer',
      company: 'Canvas Collective',
      period: '2021 — 2023',
      description:
        'Built accessible design systems and high-performance customer-facing web experiences.',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Signal',
      type: 'Analytics platform',
      description:
        'A calm, collaborative analytics workspace that turns noisy business data into decisions.',
      tags: 'React, TypeScript, Node.js',
      link: 'https://github.com',
    },
    {
      id: 2,
      title: 'Kindred',
      type: 'Community product',
      description:
        'A modern platform for communities to gather, share resources, and make meaningful connections.',
      tags: 'Next.js, PostgreSQL, Figma',
      link: 'https://github.com',
    },
    {
      id: 3,
      title: 'Atlas',
      type: 'Travel companion',
      description:
        'A beautifully simple itinerary planner built for curious travellers and their favourite places.',
      tags: 'React, Maps, API',
      link: 'https://github.com',
    },
  ],
};
const uid = () => Date.now();
const apiBase = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || '';
const apiUrl = (path) => `${apiBase}${path}`;

function App() {
  const [data, setData] = useState(initialData);
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
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
    return <AdminGate data={data} setData={setData} />;
  const p = data.profile;
  return (
    <div>
      <header>
        <a className="brand" href="#top">
          {p.name
            .split(' ')
            .map((x) => x[0])
            .join('')}
        </a>
        <div className="header-actions">
          <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        <nav className={menu ? 'open' : ''}>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>
        </nav>
      </header>
      <main id="top">
        <section className="hero">
          <div>
            <p className="eyebrow">
              <span /> {p.availability}
            </p>
            <h1>
              Building digital
              <br />
              <em>things</em> with care.
            </h1>
            <p className="lede">{p.intro}</p>
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
              <Code2 size={78} />
            )}
          </div>
        </section>
        <section className="strip">
          <span>
            <Sparkles size={17} /> {p.role}
          </span>
          <span>
            <span className="dot" /> {p.location}
          </span>
        </section>
        <section id="work" className="section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Ideas brought to life.</h2>
            <p>Each project is an exercise in clarity, utility, and a little bit of delight.</p>
          </div>
          <div className="projects">
            {data.projects.map((x, i) => (
              <article className={`project p${i}`} key={x.id}>
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
            <p className="eyebrow">02 / Capabilities</p>
            <h2>
              Tools I use to make
              <br />
              <em>things work.</em>
            </h2>
          </div>
          <div className="skill-cards">
            {[...new Set(data.skills.map((skill) => skill.category))].map((category, index) => {
              const skills = data.skills.filter((skill) => skill.category === category);
              return (
                <article className={`skill-card tone-${index % 6}`} key={category}>
                  <div className="skill-card-top">
                    <span>
                      {String(index + 1).padStart(2, '0')} /{' '}
                      {String(new Set(data.skills.map((skill) => skill.category)).size).padStart(
                        2,
                        '0'
                      )}
                    </span>
                    <i />
                  </div>
                  <h3>{category}</h3>
                  <p>
                    —{' '}
                    {category === 'Interface'
                      ? 'Frontend'
                      : category === 'Server & APIs'
                        ? 'Backend'
                        : 'Technical craft'}
                  </p>
                  <div className="skill-list">
                    {skills.map((skill) => (
                      <div key={skill.id}>
                        <span>{skill.name}</span>
                        <b>{skill.level || 'Proficient'}</b>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section id="about" className="about section">
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
        </section>
        <section className="experience section">
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
            <p className="eyebrow">04 / Credentials</p>
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
          <h2>
            Let’s make something
            <br />
            <em>meaningful.</em>
          </h2>
          <a className="button light" href={`mailto:${p.email}`}>
            Start a conversation <ArrowUpRight size={17} />
          </a>
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

function AdminGate({ data, setData }) {
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
        <a className="brand" href={import.meta.env.BASE_URL}>
          AM
        </a>
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
      logout={() => {
        sessionStorage.removeItem('portfolio-admin-token');
        setToken('');
      }}
    />
  );
}

function Admin({ data, setData, token, logout }) {
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
        <a className="brand">
          {draft.profile.name
            .split(' ')
            .map((x) => x[0])
            .join('')}
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
          <button className="button" onClick={save}>
            <Save size={17} />
            {saved ? 'Saved!' : 'Save changes'}
          </button>
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
