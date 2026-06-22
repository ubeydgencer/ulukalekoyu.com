/* Ulukale — aşağı çekince yenileme (pull-to-refresh)
   Yalnızca ana ekrana eklenmiş (standalone) webapp'te ve dokunmatik
   cihazlarda çalışır; normal tarayıcıda Safari'nin kendi yenilemesine karışmaz.
   İkon: ana ekran app ikonuyla aynı (kerpiç kemer). */
(function () {
  var standalone =
    window.navigator.standalone === true ||
    (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
  if (!standalone) return;
  if (!('ontouchstart' in window)) return;

  var ind = document.createElement('div');
  ind.className = 'ptr-indicator';
  ind.innerHTML =
    '<div class="ptr-circle"><svg viewBox="0 0 64 64" aria-hidden="true">' +
    '<rect width="64" height="64" rx="14" fill="#a9542d"/>' +
    '<path d="M16 48 V30 a16 16 0 0 1 32 0 V48" fill="none" stroke="#f4ecdd" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M12 48 H52" stroke="#f4ecdd" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M26 48 V36 a6 6 0 0 1 12 0 V48" fill="#7f3c1d"/>' +
    '</svg></div>';
  document.body.appendChild(ind);
  var circle = ind.firstChild;

  var startY = 0, pulling = false, dist = 0, refreshing = false;
  var THRESHOLD = 72, MAX = 130;

  function resist(d) { return Math.pow(Math.max(d, 0), 0.85); }

  function render(d) {
    var p = Math.min(d, MAX);
    var prog = Math.min(d / THRESHOLD, 1);
    ind.style.transform = 'translateX(-50%) translateY(' + (p - 8) + 'px)';
    ind.style.opacity = String(Math.min(prog + 0.1, 1));
    // pull ilerledikçe ikon döner ve büyür
    circle.style.transform = 'rotate(' + (prog * 280) + 'deg) scale(' + (0.55 + prog * 0.45) + ')';
  }

  document.addEventListener('touchstart', function (e) {
    if (refreshing) return;
    if (window.scrollY <= 0 && e.touches.length === 1) {
      startY = e.touches[0].clientY;
      pulling = true; dist = 0;
      ind.classList.remove('ptr-snap', 'ptr-refreshing');
      circle.style.transition = 'transform .12s linear';
    }
  }, { passive: true });

  document.addEventListener('touchmove', function (e) {
    if (!pulling || refreshing) return;
    dist = e.touches[0].clientY - startY;
    if (dist > 0 && window.scrollY <= 0) {
      render(resist(dist));
    } else {
      pulling = false;
    }
  }, { passive: true });

  document.addEventListener('touchend', function () {
    if (!pulling || refreshing) return;
    pulling = false;
    var d = resist(Math.max(dist, 0));
    if (d >= THRESHOLD) {
      // eşiği geçti → yenile
      refreshing = true;
      ind.classList.add('ptr-refreshing');
      ind.style.transform = 'translateX(-50%) translateY(' + (THRESHOLD - 8) + 'px)';
      ind.style.opacity = '1';
      circle.style.transition = 'none';
      circle.style.transform = '';          // spin animasyonu devralsın
      setTimeout(function () { location.reload(); }, 700);
    } else {
      // eşiğin altında → geri çekil
      ind.classList.add('ptr-snap');
      ind.style.transform = 'translateX(-50%) translateY(-60px)';
      ind.style.opacity = '0';
    }
  });
})();
