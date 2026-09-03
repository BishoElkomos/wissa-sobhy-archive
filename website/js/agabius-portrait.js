(function(){
  var hero=document.querySelector('.agabius-hero-grid');
  if(!hero || document.querySelector('.agabius-portrait')) return;
  var figure=document.createElement('figure');
  figure.className='agabius-portrait';
  figure.innerHTML='<img src="https://media.eldyar.net/img/25/02/04/606941.jpg" alt="صورة أرشيفية للأنبا أغابيوس مطران ديرمواس ودلجا" loading="eager" fetchpriority="high"><figcaption>صورة أرشيفية منشورة في جريدة الديار بتاريخ 4 فبراير 2025.</figcaption>';
  hero.insertBefore(figure, hero.firstElementChild);
})();
