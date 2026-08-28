(() => {
  const input = document.querySelector('#search');
  const status = document.querySelector('#search-status');
  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.menu-toggle');
  const items = [...document.querySelectorAll('.searchable')];

  const normalize = (value) => value
    .toLowerCase()
    .normalize('NFKC')
    .replace(/[إأآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .trim();

  const updateSearch = () => {
    const query = normalize(input?.value || '');
    if (!query) {
      document.body.classList.remove('searching');
      items.forEach((item) => item.classList.remove('search-hit', 'search-dim'));
      if (status) status.textContent = '';
      return;
    }

    document.body.classList.add('searching');
    let hits = 0;
    items.forEach((item) => {
      const haystack = normalize(`${item.innerText} ${item.dataset.keywords || ''}`);
      const hit = haystack.includes(query);
      item.classList.toggle('search-hit', hit);
      item.classList.toggle('search-dim', !hit);
      if (hit) hits += 1;
    });
    if (status) status.textContent = hits ? `تم العثور على ${hits} نتيجة مطابقة.` : 'لا توجد نتيجة مطابقة في الصفحة الحالية.';
  };

  input?.addEventListener('input', updateSearch);
  input?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      input.value = '';
      updateSearch();
      input.blur();
    }
  });

  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('#main-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu?.setAttribute('aria-expanded', 'false');
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.feature,.panel,.timeline article,.place-grid article,.evidence-grid>div').forEach((item) => observer.observe(item));
})();
