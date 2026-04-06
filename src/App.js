import { useState, useEffect, useRef } from "react";
import anshulPhoto from "./anshul.jpeg";
import "./App.css";

const NAV_LINKS = ["About", "Skills", "Projects", "DSA & CP", "Contact"];

const SKILLS = [
  { icon: "🎨", name: "Frontend", tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"] },
  { icon: "⚙️", name: "Backend", tags: ["Node.js", "Express.js", "Python", "REST APIs", "Flask"] },
  { icon: "🧠", name: "AI / ML", tags: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas", "NumPy"] },
  { icon: "🗄️", name: "Database & Tools", tags: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code", "Postman"] },
];

const PROJECTS = [
  { num: "Featured — 001", badge: "AIML · Featured", title: "VitalHealth Monitor", desc: "Multimodal deep learning app predicting stress, fatigue, dehydration & anemia from image, audio & physiological inputs using EfficientNetB0 transfer learning.", stack: ["Python", "TensorFlow", "EfficientNetB0", "React", "Node.js", "MongoDB"], link: "https://github.com/anshulbagal/Vital-Health", featured: true },
  { num: "Featured — 002", badge: "Full Stack · Featured", title: "EggXpresss Food Ordering App", desc: "No need to stand in Queue or wait for waiter, order it directly from the app", stack: ["React", "Node.js", "MongoDB", "Express"], link: "https://github.com/anshulbagal/eggxpress", featured: true },
  { num: "003", title: "Group Chat App", desc: "Group chat app like discord", stack: ["React", "Node", "MongoDB", "Express"], link: "https://github.com/anshulbagal/Group-chat-app" },
  { num: "004", title: "Notes App", desc: "Notes app with AI featured summarization of notes", stack: ["Node", "React", "API", "MongoDB", "Express"], link: "https://github.com/anshulbagal/Notes-app" },
  { num: "005", title: "Currency Converter", desc: "Simple Currency Converter App", stack: ["React", "Node", "Express"], link: "https://github.com/anshulbagal/Currency-converter" },
];

const CP_PLATFORMS = [
  {
    id: "leetcode",
    name: "LeetCode",
    username: "anshul_bagal",
    url: "https://leetcode.com/u/anshul_bagal/",
    color: "#FFA116",
    bgColor: "#FFF8EE",
    borderColor: "#FFE0A3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" fill="#FFA116"/>
      </svg>
    ),
    live: true,
  },
  {
    id: "codechef",
    name: "CodeChef",
    username: "anshul_bagal",
    url: "https://www.codechef.com/users/anshul_bagal",
    color: "#5B4638",
    bgColor: "#F9F5F2",
    borderColor: "#E8D9CE",
    icon: (
      <svg viewBox="0 0 24 24" fill="#5B4638" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.257.004C5.37.085.137 4.819.007 10.705c-.083 3.696 1.677 6.993 4.41 9.116.317.244.332.271.332.533v2.47c0 .648.526 1.174 1.173 1.174h.305c.35 0 .667-.154.883-.397l1.306-1.492 1.298 1.487c.217.248.534.402.883.402h.303c.351 0 .668-.154.884-.397l1.305-1.492 1.299 1.487c.217.248.535.402.884.402h.305c.647 0 1.173-.526 1.173-1.174v-2.47c0-.262.014-.289.333-.533 2.731-2.123 4.49-5.42 4.407-9.116C19.866 4.793 14.609.076 11.257.004zm.535 16.492c-.168.023-.34.034-.512.034-2.578 0-4.671-2.093-4.671-4.672 0-2.576 2.093-4.67 4.671-4.67 2.578 0 4.671 2.094 4.671 4.67 0 2.396-1.8 4.371-4.159 4.638z"/>
      </svg>
    ),
    live: false,
    stats: { label: "Contest Participated", value: "10+" },
    extra: { label: "Rating-max", value: "1147+" },
  },
  {
    id: "codolio",
    name: "Codolio",
    username: "anshul_bagal",
    url: "https://codolio.com/profile/anshul_bagal",
    color: "#6C63FF",
    bgColor: "#F3F2FF",
    borderColor: "#D4D0FF",
    icon: (
      <svg viewBox="0 0 24 24" fill="#6C63FF" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z"/>
      </svg>
    ),
    live: false,
    stats: { label: "Total Solved", value: "500+" },
    extra: { label: "Platforms", value: "5+" },
  },
  {
    id: "codeforces",
    name: "Codeforces",
    username: "anshulbagal05",
    url: "https://codeforces.com/profile/anshulbagal05",
    color: "#1F8DD6",
    bgColor: "#EEF6FD",
    borderColor: "#BAD9F5",
    icon: (
      <svg viewBox="0 0 24 24" fill="#1F8DD6" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 7.5A1.5 1.5 0 0 1 6 6h2.25a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 8.25 18H6a1.5 1.5 0 0 1-1.5-1.5v-9zm6.75 0A1.5 1.5 0 0 1 12.75 6H15a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 15 12h-2.25a1.5 1.5 0 0 1-1.5-1.5v-3zm0 6.75A1.5 1.5 0 0 1 12.75 12.75H15a1.5 1.5 0 0 1 1.5 1.5v.375c0 .621-.504 1.125-1.125 1.125H12.375A1.125 1.125 0 0 1 11.25 14.625v-.375z"/>
      </svg>
    ),
    live: false,
    extra: { label: "Status", value: "Newbie" },  
  },
];

function useFadeUp() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, visible] = useFadeUp();
  return (
    <div ref={ref} className={`fade-up ${visible ? "visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="nav-logo">Anshul<span>.</span></a>
      <ul className="nav-links">
        {NAV_LINKS.map((l) => <li key={l}><a href={`#${l.toLowerCase().replace(" & ", "-")}`}>{l}</a></li>)}
      </ul>
      <a href="https://drive.google.com/file/d/1prHpiy88JxHJQo_FH6VDzk0mYRb5wLDf/view?usp=drive_link" target="_blank" rel="noreferrer" className="nav-cta">Resume ↓</a>
    </nav>
  );
}

// Live LeetCode stats via public GraphQL API
function useLeetCodeStats(username) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/" + username)
      .then(r => r.json())
      .then(data => {
        if (data && data.totalSolved !== undefined) setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);
  return { stats, loading };
}

function CPCard({ platform }) {
  const { stats: lcStats, loading } = useLeetCodeStats(
    platform.live ? platform.username : null
  );

  const total = platform.live
    ? loading ? "..." : lcStats ? lcStats.totalSolved : "—"
    : platform.stats?.value;

  const easy = platform.live && lcStats ? lcStats.easySolved : null;
  const medium = platform.live && lcStats ? lcStats.mediumSolved : null;
  const hard = platform.live && lcStats ? lcStats.hardSolved : null;
  const totalQ = platform.live && lcStats ? lcStats.totalQuestions : null;

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noreferrer"
      className="cp-card"
      style={{ "--cp-color": platform.color, "--cp-bg": platform.bgColor, "--cp-border": platform.borderColor }}
    >
      <div className="cp-card-top">
        <div className="cp-icon-wrap" style={{ background: platform.bgColor, border: `1px solid ${platform.borderColor}` }}>
          {platform.icon}
        </div>
        <div className="cp-card-info">
          <div className="cp-name">{platform.name}</div>
          <div className="cp-username" style={{ color: platform.color }}>@{platform.username}</div>
        </div>
        <div className="cp-arrow">↗</div>
      </div>

      <div className="cp-divider" style={{ background: platform.borderColor }} />

      <div className="cp-stats-row">
        <div className="cp-stat">
          <div className="cp-stat-num" style={{ color: platform.color }}>
            {loading && platform.live ? (
              <span className="cp-loading">loading...</span>
            ) : total}
          </div>
          <div className="cp-stat-lbl">{platform.live ? "Total Solved" : platform.stats?.label}</div>
        </div>

        {platform.live && lcStats ? (
          <>
            <div className="cp-stat">
              <div className="cp-stat-num" style={{ color: "#22c55e" }}>{easy}</div>
              <div className="cp-stat-lbl">Easy</div>
            </div>
            <div className="cp-stat">
              <div className="cp-stat-num" style={{ color: "#f59e0b" }}>{medium}</div>
              <div className="cp-stat-lbl">Medium</div>
            </div>
            <div className="cp-stat">
              <div className="cp-stat-num" style={{ color: "#ef4444" }}>{hard}</div>
              <div className="cp-stat-lbl">Hard</div>
            </div>
          </>
        ) : (
          <div className="cp-stat">
            <div className="cp-stat-num" style={{ color: platform.color }}>{platform.extra?.value}</div>
            <div className="cp-stat-lbl">{platform.extra?.label}</div>
          </div>
        )}
      </div>

    </a>
  );
}

export default function App() {
  const featured = PROJECTS.filter(p => p.featured);
  const rest = PROJECTS.filter(p => !p.featured);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section id="hero" className="hero">
        <FadeUp className="hero-left">
          <div className="hero-eyebrow">Available for opportunities</div>
          <h1 className="hero-h1">Anshul<br />Bagal<br /><em>developer.</em></h1>
          <p className="hero-desc">Web developer & AIML enthusiast building thoughtful full-stack products and intelligent systems that solve real problems.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View Projects →</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/anshulbagal" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/anshul-bagal-080173203/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="mailto:anshulbagal5@gmail.com">Email ↗</a>
          </div>
          <div className="hero-stats">
            <div className="hstat"><span className="hstat-num">10+</span><span className="hstat-lbl">Projects Built</span></div>
            <div className="hstat"><span className="hstat-num">5+</span><span className="hstat-lbl">ML Models</span></div>
            <div className="hstat"><span className="hstat-num">2+</span><span className="hstat-lbl">Years Coding</span></div>
            <div className="hstat"><span className="hstat-num"><span className="avail-dot" />Open</span><span className="hstat-lbl">To Internships</span></div>
          </div>
        </FadeUp>
        <FadeUp delay={200} className="hero-right">
          <div className="photo-tag">Web Dev · AIML 🤖</div>
          <div className="photo-wrapper">
            <div className="photo-bg-shape" />
            <img className="photo-img" src={anshulPhoto} alt="Anshul Bagal" />
            <div className="photo-badge"><div className="photo-badge-dot" /> Available for hire</div>
          </div>
        </FadeUp>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <FadeUp>
          <div className="section-header">
            <span className="section-num">01</span>
            <h2 className="section-title">About me</h2>
            <div className="section-line" />
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>I'm a <strong>web developer and AIML enthusiast</strong> passionate about building products at the intersection of clean design and intelligent technology.</p>
              <p>I work across the full stack — crafting polished frontends, designing scalable backends, and training ML models that solve real-world problems.</p>
              <p>When I'm not coding, I'm exploring new frameworks, sharpening my <strong>competitive programming</strong> skills, and contributing to projects I care about.</p>
            </div>
            <div className="about-facts">
              {[
                { icon: "💻", title: "Full Stack Dev", desc: "MERN stack, REST APIs, responsive UI" },
                { icon: "🤖", title: "AI / ML Engineering", desc: "Deep learning, computer vision, NLP" },
                { icon: "🏆", title: "DSA & CP", desc: "LeetCode, CodeChef, Codeforces" },
                { icon: "📍", title: "Nagpur, India", desc: "Open to remote & on-site roles" },
              ].map(f => (
                <div className="fact" key={f.title}>
                  <div className="fact-icon">{f.icon}</div>
                  <div><div className="fact-title">{f.title}</div><div className="fact-desc">{f.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* SKILLS */}
      <div className="section-alt" id="skills">
        <div className="section-alt-inner">
          <FadeUp>
            <div className="section-header">
              <span className="section-num">02</span>
              <h2 className="section-title">Skills & Tech</h2>
              <div className="section-line" />
            </div>
            <div className="skills-wrapper">
              {SKILLS.map(g => (
                <div className="skill-group" key={g.name}>
                  <div className="skill-group-header">
                    <div className="skill-group-icon">{g.icon}</div>
                    <span className="skill-group-name">{g.name}</span>
                  </div>
                  <div className="skill-tags">
                    {g.tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <FadeUp>
          <div className="section-header">
            <span className="section-num">03</span>
            <h2 className="section-title">Projects</h2>
            <div className="section-line" />
          </div>
          <div className="projects-featured">
            {featured.map(p => (
              <div className="proj" key={p.title}>
                <div className="proj-header">
                  <span className="proj-num">{p.num}</span>
                  <a href={p.link} target="_blank" rel="noreferrer" className="proj-link-icon">↗</a>
                </div>
                {p.badge && <div className="proj-badge">{p.badge}</div>}
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="projects-rest">
            {rest.map(p => (
              <div className="proj small" key={p.title}>
                <div className="proj-header">
                  <span className="proj-num">{p.num}</span>
                  <a href={p.link} target="_blank" rel="noreferrer" className="proj-link-icon">↗</a>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* DSA & CP */}
      <div className="section-alt" id="dsa-cp">
        <div className="section-alt-inner">
          <FadeUp>
            <div className="section-header">
              <span className="section-num">04</span>
              <h2 className="section-title">DSA & CP</h2>
              <div className="section-line" />
            </div>
            <p className="cp-intro">I actively practice Data Structures & Algorithms and Competitive Programming across multiple platforms. LeetCode stats are fetched live ⚡</p>
            <div className="cp-grid">
              {CP_PLATFORMS.map(p => <CPCard key={p.id} platform={p} />)}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* RESUME */}
      <section className="section" style={{ paddingTop: 0 }}>
        <FadeUp>
          <div className="resume-bar">
            <div>
              <h3>Want to know more?</h3>
              <p>Download my resume for a full look at my experience, education & achievements.</p>
            </div>
            <div className="resume-btns">
              <a href="https://drive.google.com/file/d/1prHpiy88JxHJQo_FH6VDzk0mYRb5wLDf/view?usp=drive_link" target="_blank" rel="noreferrer" className="btn-download">
                <svg viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zm7-18v10.59l-3.3-3.3-1.41 1.41L12 15l4.71-4.3-1.41-1.41L13 12.59V2h-1z" /></svg>
                Download CV
              </a>
              <a href="https://drive.google.com/file/d/1prHpiy88JxHJQo_FH6VDzk0mYRb5wLDf/view?usp=drive_link" target="_blank" rel="noreferrer" className="btn-view">View Online ↗</a>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* CONTACT */}
      <div className="section-alt" id="contact">
        <div className="section-alt-inner">
          <FadeUp>
            <div className="section-header">
              <span className="section-num">05</span>
              <h2 className="section-title">Let's connect</h2>
              <div className="section-line" />
            </div>
            <div className="contact-grid">
              <div className="contact-left">
                <h3>Open to opportunities & collaborations</h3>
                <p>Whether it's an internship, freelance project, or just a chat about tech — my inbox is always open. Let's build something great together.</p>
                <div className="contact-items">
                  {[
                    { href: "mailto:anshulbagal5@gmail.com", label: "Email", val: "anshulbagal5@gmail.com" },
                    { href: "https://www.linkedin.com/in/anshul-bagal-080173203/", label: "LinkedIn", val: "linkedin.com/in/anshul-bagal" },
                    { href: "https://github.com/anshulbagal", label: "GitHub", val: "github.com/anshulbagal" },
                  ].map(item => (
                    <a href={item.href} target={item.label !== "Email" ? "_blank" : undefined} rel="noreferrer" className="contact-item" key={item.label}>
                      <div className="ci-icon">
                        <svg viewBox="0 0 24 24">
                          {item.label === "Email" && <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>}
                          {item.label === "LinkedIn" && <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>}
                          {item.label === "GitHub" && <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>}
                        </svg>
                      </div>
                      <div><div className="ci-label">{item.label}</div><div className="ci-val">{item.val}</div></div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="contact-info-card">
                <div>
                  <div className="map-label">Based in</div>
                  <div className="map-location">Nagpur, India</div>
                  <div className="map-subloc">Maharashtra · IST (UTC +5:30)</div>
                </div>
                <div className="divider" />
                <div className="avail-badge"><span className="avail-dot" /> Available for opportunities</div>
                <div className="avail-note">Open to remote roles worldwide & on-site in India.</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      <footer className="footer">
        <span>© 2025 Anshul Bagal</span>
        <span>Designed & built with React </span>
      </footer>
    </>
  );
}
