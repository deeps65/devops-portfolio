(() => {
  const config = window.PORTFOLIO_CONFIG || {};
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  const year = document.getElementById('year');
  const contactActions = document.getElementById('contactActions');

  if (year) year.textContent = new Date().getFullYear();

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  if (contactActions) {
    const links = [];
    if (typeof config.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email.trim())) {
      links.push({ label: 'Send an email', href: `mailto:${config.email.trim()}`, external: false });
    }
    if (typeof config.github === 'string' && /^https:\/\//.test(config.github.trim())) {
      links.push({ label: 'GitHub', href: config.github.trim(), external: true });
    }
    if (typeof config.linkedin === 'string' && /^https:\/\//.test(config.linkedin.trim())) {
      links.push({ label: 'LinkedIn', href: config.linkedin.trim(), external: true });
    }
    if (links.length) {
      contactActions.textContent = '';
      links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.className = 'contact-button';
        anchor.href = link.href;
        anchor.textContent = link.label;
        const arrow = document.createElement('span');
        arrow.textContent = link.external ? '↗' : '→';
        anchor.appendChild(arrow);
        if (link.external) {
          anchor.target = '_blank';
          anchor.rel = 'noopener noreferrer';
        }
        contactActions.appendChild(anchor);
      });
    }
  }

  const revealTargets = document.querySelectorAll('.about-grid, .project-card, .stack-group, .experience-card, .contact-content');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealTargets.forEach(target => {
      target.classList.add('reveal');
      observer.observe(target);
    });
  }
})();
