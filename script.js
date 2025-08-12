/* Minimal JS for nav and partial injection */
(function(){
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

  // Mobile menu
  const toggle = $('.menu-toggle');
  const nav = $('.nav-links');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? 'none' : 'flex';
    });
  }

  // Dropdowns (hover/focus for desktop, click for mobile/a11y)
  $$('.dropdown').forEach(d => {
    const btn = d.querySelector('button');
    const menu = d.querySelector('.dropdown-menu');
    if(btn && menu){
      const open = (v)=>{ menu.style.display = v ? 'block' : 'none'; btn.setAttribute('aria-expanded', String(v)); };
      btn.addEventListener('click', e => { e.preventDefault(); open(menu.style.display!=='block'); });
      btn.addEventListener('blur', ()=> setTimeout(()=> open(false), 150));
      menu.addEventListener('mouseleave', ()=> open(false));
    }
  });

  // Inject header/footer partials if placeholders exist
  const inject = async (sel, url) => {
    const host = '';
    try {
      const res = await fetch(url, { credentials: 'same-origin' });
      if(!res.ok) return;
      const html = await res.text();
      const el = $(sel);
      if(el){ el.innerHTML = html; }
    } catch(e){ /* no-op for file:// previews */ }
  };

  // When pages are loaded directly (not index), include partials
  // Note: For GitHub Pages, same-origin fetch works.
  inject('#header-partial', 'partials/header.html');
  inject('#footer-partial', 'partials/footer.html');

  // Simple filter on /bios.html
  const chips = $$('.filter-chip');
  const cards = $$('.story-card');
  if(chips.length){
    chips.forEach(ch => ch.addEventListener('click', ()=>{
      const trade = ch.dataset.trade;
      chips.forEach(c => c.classList.remove('active'));
      ch.classList.add('active');
      cards.forEach(card => {
        const match = trade==='all' || card.dataset.trade.includes(trade);
        card.style.display = match ? '' : 'none';
      });
    }));
  }
})();
