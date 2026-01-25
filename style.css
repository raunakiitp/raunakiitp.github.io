:root{
  --bg:#05060a;
  --card:#0b0d12;
  --muted:#9aa6b2;
  --accent:#7ef0e0; /* cyan */
  --accent-2:#9b84ff; /* purple */
  --glass: rgba(255,255,255,0.03);
  --radius:14px;
  --max-width:1100px;
  --ff-sans: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  --ff-display: "Orbitron", system-ui;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:var(--ff-sans);
  background:linear-gradient(180deg, #06070b 0%, #070812 40%), radial-gradient(600px 300px at 10% 10%, rgba(126,240,224,0.04), transparent 10%), radial-gradient(400px 200px at 90% 90%, rgba(155,132,255,0.03), transparent 10%);
  color:#e6eef3;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height:1.5;
}

/* Layout */
.container{max-width:var(--max-width);margin:0 auto;padding:2rem;}

/* Header */
.site-header{position:sticky;top:0;backdrop-filter:blur(6px);background:linear-gradient(180deg, rgba(6,6,9,0.65), rgba(6,6,9,0.35));border-bottom:1px solid rgba(255,255,255,0.02);z-index:40}
.header-inner{display:flex;align-items:center;justify-content:space-between;padding:0.75rem 0}
.brand{font-family:var(--ff-display);letter-spacing:0.06em;color:var(--accent);text-decoration:none;font-weight:600;}
.site-nav{display:flex;gap:1.1rem}
.site-nav a{color:var(--muted);text-decoration:none;padding:0.4rem 0.5rem;border-radius:8px;transition:all .18s}
.site-nav a:hover{color:#fff;background:rgba(126,240,224,0.03)}

/* Mobile menu */
.menu-toggle{display:none;background:none;border:0;color:inherit}
.hamburger{width:22px;height:2px;background:var(--accent);display:block;position:relative}
.hamburger::after,.hamburger::before{content:"";position:absolute;left:0;right:0;height:2px;background:var(--accent);transition:transform .2s}
.hamburger::before{top:-6px}
.hamburger::after{bottom:-6px}

/* Hero */
.hero{padding:6rem 0;min-height:60vh;display:flex;align-items:center}
.hero-grid{display:grid;grid-template-columns:1fr 360px;gap:2rem;align-items:center}
.eyebrow{color:var(--accent);font-weight:600;margin:0 0 .4rem}
h1{font-family:var(--ff-display);font-weight:600;margin:0 0 .6rem;letter-spacing:0.02em}
.lead{color:var(--muted);margin:0 0 1rem}
.cta-row{display:flex;gap:0.75rem;margin-bottom:1rem}
.btn{display:inline-block;padding:.6rem .9rem;border-radius:10px;text-decoration:none;font-weight:600;border:1px solid transparent}
.btn.primary{background:linear-gradient(90deg,var(--accent),var(--accent-2));color:#041018;box-shadow:0 6px 18px rgba(155,132,255,0.08)}
.btn.ghost{background:transparent;border:1px solid rgba(255,255,255,0.04);color:var(--accent)}
.btn.large{padding:1rem 1.2rem}

.quick-links{display:flex;gap:1.2rem;list-style:none;padding:0;margin:1rem 0 0;color:var(--muted)}
.quick-links li{font-size:0.95rem}

/* Hero card */
.hero-card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:1.2rem;border-radius:var(--radius);backdrop-filter: blur(6px);border:1px solid rgba(255,255,255,0.03);display:flex;gap:1rem;align-items:center}
.avatar{width:84px;height:84px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-family:var(--ff-display);font-size:36px;background:linear-gradient(135deg,var(--accent),var(--accent-2));color:#031018;flex-shrink:0}
.card-meta h3{margin:.1rem 0 .3rem}
.muted{color:var(--muted);margin:0}

/* Section styles */
.section{padding:3.2rem 0}
.section-alt{background:linear-gradient(180deg, rgba(255,255,255,0.01), transparent);border-top:1px solid rgba(255,255,255,0.01)}

/* Projects grid */
.projects-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.2rem;margin-top:1rem}
.project{background:var(--card);border-radius:12px;padding:0;overflow:hidden;border:1px solid rgba(255,255,255,0.02);display:flex;flex-direction:column}
.project-media{height:140px;background:linear-gradient(135deg, rgba(126,240,224,0.06), rgba(155,132,255,0.05));display:flex;align-items:center;justify-content:center;color:var(--muted);font-weight:600}
.project-body{padding:1rem}
.project-links{display:flex;gap:.6rem;margin-top:.6rem}
.project-links a{color:var(--accent);text-decoration:none;padding:.35rem .5rem;border-radius:8px;border:1px solid rgba(126,240,224,0.06);background:transparent;font-weight:600}

/* Skills */
.skill-grid{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1rem}
.skill{background:var(--glass);padding:.5rem .7rem;border-radius:999px;color:var(--muted);font-weight:600;border:1px solid rgba(255,255,255,0.02)}

/* CTA section */
.section-cta{display:flex;align-items:center;justify-content:center;padding:4rem 0}
.cta{background:linear-gradient(180deg, rgba(126,240,224,0.03), rgba(155,132,255,0.02));padding:2rem;border-radius:12px;text-align:center;border:1px solid rgba(255,255,255,0.02)}

/* Footer */
.site-footer{padding:1.2rem 0;border-top:1px solid rgba(255,255,255,0.02);color:var(--muted)}
.footer-inner{display:flex;justify-content:space-between;align-items:center}

/* Responsive */
@media (max-width:900px){
  .hero-grid{grid-template-columns:1fr;gap:1.2rem}
  .hero-card{order:-1}
  .site-nav{display:none;position:absolute;top:64px;right:12px;background:var(--card);padding:1rem;border-radius:10px;flex-direction:column}
  .menu-toggle{display:block}
  .container{padding:1.2rem}
}

/* Motion & accessibility */
@media (prefers-reduced-motion: no-preference){
  h1{transition:transform .5s ease}
  .project{transition:transform .18s, box-shadow .18s}
  .project:hover{transform:translateY(-6px);box-shadow:0 12px 30px rgba(2,6,23,0.6)}
}
