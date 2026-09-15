import Scene3D from "./components/Scene3D";
import SkillVisual3D from "./components/SkillVisual3D";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      {/* ================= NAVIGATION ================= */}
<nav className="navbar">

  <div className="nav-brand">
    <img
      src="/profile.jpg"
      alt="Shubhangi Khule"
      className="nav-profile"
    />

    <div className="logo">SHUBHANGI.DEV</div>
  </div>

 <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>

  <button
  className="menu-button"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>

</nav>


      {/* ================= HERO SECTION ================= */}
      <section className="hero">

        <div className="hero-content">

          <p className="intro">Hello, I'm</p>

          <h1>Shubhangi Khule</h1>

          <h2>Java Full Stack & AI Developer</h2>

          <p className="hero-description">
            Computer Science Engineering undergraduate focused on
            building practical full-stack applications with Java,
            Spring Boot, and modern web technologies, with an
            interest in AI/GenAI.
          </p>

          <div className="buttons">
           <button onClick={() => {
              document.getElementById("projects").scrollIntoView({
              behavior: "smooth",
           });
        }}>
              View Projects
       </button>

            <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="outline-button"
>
  Download Resume
</a>
          </div>

        </div>


        {/* ================= 3D HERO ================= */}
        <div className="hero-visual">
         <img
           src="/profile.jpg"
           alt="Shubhangi Khule"
           className="profile-photo"
        />
             <Scene3D />
          </div>

      </section>


     <section id="about" className="about-section">

  <div className="about-container">

    {/* LEFT */}
    <div className="about-title">
      <h2>
      About
       <br />
    <span>My Vision</span>
   </h2>
    </div>

    {/* RIGHT */}
    <div className="about-content">

      <p className="about-intro">
        I’m a Computer Science Engineering student focused on Java Full Stack
        development and modern web technologies. I enjoy building practical
        applications using Java, Spring Boot, REST APIs, databases, and React.
      </p>

      <p className="about-description">
        I’m passionate about solving real-world problems through software
        development. Along with full-stack development, I’m exploring AI and
        GenAI technologies and continuously strengthening my programming and
        problem-solving skills.
      </p>

      <div className="about-highlights">

        <div className="about-stat">
          <h3>2</h3>
          <p>Projects Built</p>
        </div>

        <div className="about-stat">
          <h3>Java</h3>
          <p>Full Stack Focus</p>
        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= EXPERIENCE & TRAINING ================= */}

<section id="experience" className="experience-section">
  <div className="experience-container">

    <div className="experience-heading">
      <p>EXPERIENCE & TRAINING</p>

      <h2>
        Practical <span>Experience</span>
      </h2>

      <div className="experience-line"></div>
    </div>

    <div className="experience-list">

      {/* Anudip Foundation */}
      <div className="experience-card">
        <div className="experience-top">
          <div>
            <h3>Advanced Java Intern / Trainee</h3>
            <h4>Anudip Foundation</h4>
          </div>

          <span className="experience-date">
            JAN 2025 — MAR 2025
          </span>
        </div>

 <p>
  Gained practical experience in Advanced Java and backend application development.
  Applied object-oriented programming, JDBC, and database connectivity concepts in practical development tasks.
  Strengthened Java programming, problem-solving, and backend development skills.
</p>

        <div className="experience-tags">
          <span>Java</span>
          <span>Advanced Java</span>
          <span>JDBC</span>
          <span>Database</span>
        </div>
      </div>

      {/* Mountreach Solution */}
      <div className="experience-card">
        <div className="experience-top">
          <div>
            <h3>Android Development Trainee</h3>
            <h4>Mountreach Solution Pvt. Ltd.</h4>
          </div>

          <span className="experience-date">
            JUN 2023 — JUL 2023
          </span>
        </div>

 <p>
  Gained hands-on experience in Android application development using Java.
  Applied Android development concepts to build functional and user-focused mobile applications.
  Developed a Women Safety Application as part of the practical development experience.
</p>

        <div className="experience-tags">
          <span>Java</span>
          <span>Android</span>
          <span>Mobile Development</span>
        </div>
      </div>

    </div>

  </div>
</section>

<section id="skills" className="skills-section">

  <div className="skills-heading">

   

    <h2>
      Technical <span>Core</span>
    </h2>

  </div>

  <div className="skills-grid">
    {/* CARD 1 */}
    <div className="skill-card">

     <div className="corner-icon">⌘</div>

      <SkillVisual3D type="backend" />

      <h3>Backend Development</h3>

      <div className="skill-tags">
        <span>Java</span>
        <span>Python</span>
        <span>JavaScript</span>
        <span>Spring Boot</span>
        <span>Spring Security</span>
        <span>REST APIs</span>
      </div>

    </div>


    {/* CARD 2 */}
    <div className="skill-card">

     <div className="corner-icon">✧</div>

      <SkillVisual3D type="ai" />

      <h3>AI & GenAI</h3>

      <div className="skill-tags">
        <span>RAG</span>
        <span>LangChain</span>
        <span>Embeddings</span>
        <span>ChromaDB</span>
        <span>LLM APIs</span>
        <span>Vector Search</span>
      </div>

    </div>


    {/* CARD 3 */}
    <div className="skill-card">

      <div className="corner-icon">◫</div>

      <SkillVisual3D type="database" />

      <h3>Data & Tools</h3>

      <div className="skill-tags">
        <span>PostgreSQL</span>
        <span>MySQL</span>
        <span>Hibernate/JPA</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>Postman</span>
        <span>Swagger</span>
      </div>

    </div>

  </div>

</section>
      {/* ================= PROJECTS ================= */}

<section id="projects" className="projects-section">

  <div className="projects-heading">


    <h2>
      Featured <span>Projects</span>
    </h2>

    <div className="projects-line"></div>
  </div>


  <div className="projects-grid">

    {/* ================= ASK MY DOCS ================= */}

    <article className="project-card">

      <div className="project-visual askdocs-visual">

        <div className="visual-glow"></div>

        <div className="doc-window">

          <div className="window-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="doc-content">

            <div className="doc-sidebar">
              <div className="sidebar-line"></div>
              <div className="sidebar-line short"></div>
              <div className="sidebar-line"></div>
              <div className="sidebar-line short"></div>
            </div>

            <div className="doc-main">

              <div className="doc-title-line"></div>

              <div className="doc-text-line"></div>
              <div className="doc-text-line"></div>
              <div className="doc-text-line short"></div>

              <div className="answer-box">
                <span>AI RESPONSE</span>
                <div></div>
                <div></div>
                <div className="short"></div>
              </div>

            </div>

          </div>

        </div>

        <div className="project-badge">
          MAY 2026
        </div>

      </div>


      <div className="project-content">

        <div className="project-tags">
          <span>Python</span>
          <span>FastAPI</span>
          <span>React.js</span>
          <span>ChromaDB</span>
          <span>LangChain</span>
        </div>

        <h3>AskMyDocs — RAG Document QA</h3>

        <p>
          Built a RAG-based document question-answering system that
          combines PDF processing, hybrid retrieval, reranking, and
          LLM-powered responses for context-aware answers.
        </p>

        <div className="project-actions">

          <a
            href="https://github.com/Shubhangikhule/Ask-my-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            GitHub ↗
          </a>

          <span className="project-type">
            AI / GenAI
          </span>

        </div>

      </div>

    </article>


    {/* ================= FUTURE FLAGS ================= */}

    <article className="project-card">

      <div className="project-visual flags-visual">

        <div className="visual-glow"></div>

        <div className="dashboard-window">

          <div className="dashboard-header">
            <span>FEATURE CONTROL</span>
            <div className="status-dot"></div>
          </div>

          <div className="flag-row">
            <div className="flag-name">
              Dark Mode
            </div>
            <div className="toggle active"></div>
          </div>

          <div className="flag-row">
            <div className="flag-name">
              AI Assistant
            </div>
            <div className="toggle active"></div>
          </div>

          <div className="flag-row">
            <div className="flag-name">
              Analytics
            </div>
            <div className="toggle"></div>
          </div>

          <div className="dashboard-chart">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

        </div>

        <div className="project-badge">
          FEB 2026
        </div>

      </div>


      <div className="project-content">

        <div className="project-tags">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>PostgreSQL</span>
          <span>Spring Security</span>
          <span>JPA</span>
        </div>

        <h3>Future Flags — SaaS Platform</h3>

        <p>
          Developed a multi-tenant feature flag platform with secure
          authentication, role-based access control, subscription-based
          features, and company-wise configuration.
        </p>

        <div className="project-actions">

          <a
            href="https://github.com/Shubhangikhule/feature-flag-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            GitHub ↗
          </a>

          <span className="project-type">
            Java / Full Stack
          </span>

        </div>

      </div>

    </article>

  </div>

</section>

{/* ================= CONTACT ================= */}

<section id="contact" className="contact-section">
  <div className="contact-container">

    <div className="contact-heading">
      <p>GET IN TOUCH</p>

      <h2>
        Let's<span> Connect</span>
      </h2>

      <div className="contact-line"></div>
    </div>

    <div className="contact-content">

      <p className="contact-intro">
        I'm open to opportunities where I can contribute as a
        Java Full Stack & AI Developer and continue growing
        through real-world software development.
      </p>

      <div className="contact-links">

        {/* GitHub */}
        <a
          href="https://github.com/Shubhangikhule"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">
            <svg className="contact-symbol" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
</svg>
          </div>

          <div>
            <span>GitHub</span>
            <strong>View my projects ↗</strong>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shubhangi-khule/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">
            <svg className="contact-symbol" viewBox="0 0 24 24" fill="currentColor">
  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"/>
</svg>
          </div>

          <div>
            <span>LinkedIn</span>
            <strong>Connect with me ↗</strong>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:+919518336637"
          className="contact-card"
        >
          <div className="contact-icon">
            <svg className="contact-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/>
</svg>
          </div>

          <div>
            <span>Phone</span>
            <strong>+91 9518336637</strong>
          </div>
        </a>


      </div>

            <a
        href="mailto:shubhangikhule25@gmail.com"
        className="email-button"
      >
        Email Me →
      </a>

    </div>
  </div>
</section>

{/* ================= FOOTER ================= */}

<footer className="portfolio-footer">
  <div className="footer-left">
    <h3>SHUBHANGI.DEV</h3>
    <p>Software Developer • Full Stack & AI Enthusiast</p>
  </div>

  <div className="footer-right">
    <a
      href="https://github.com/Shubhangikhule"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>

    <span>•</span>

    <a
      href="https://www.linkedin.com/in/shubhangi-khule/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>

    <span>•</span>

    <a href="mailto:shubhangikhule25@gmail.com">
      Email
    </a>
  </div>
</footer>

  </div>
);
}

export default App;