(function () {
  'use strict';

  /* ===== Menú móvil ===== */
  var menuOpenBtn = document.getElementById('menuOpenBtn');
  var menuCloseBtn = document.getElementById('menuCloseBtn');
  var mobileMenu = document.getElementById('mobileMenu');

  function openMenu() {
    mobileMenu.hidden = false;
    menuOpenBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.hidden = true;
    menuOpenBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  menuOpenBtn.addEventListener('click', openMenu);
  menuCloseBtn.addEventListener('click', closeMenu);
  mobileMenu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ===== Slider del hero ===== */
  var slideData = [
    { tag: '01 · La flota', cap: 'Hasta 12 personas', dur: '4 – 8 horas' },
    { tag: '02 · Día en la bahía', cap: 'Hasta 12 personas', dur: '4 – 8 horas' },
    { tag: '03 · Eventos privados', cap: 'Hasta 12 personas', dur: 'A medida' },
    { tag: '04 · Sunset cruise', cap: 'Hasta 12 personas', dur: '2 – 3 horas' }
  ];
  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.dot'));
  var heroTag = document.getElementById('heroTag');
  var heroCap = document.getElementById('heroCap');
  var heroDur = document.getElementById('heroDur');
  var current = 0;
  var autoplayMs = 7000;
  var timer = null;

  function renderSlide(i) {
    slides.forEach(function (el, k) {
      el.classList.toggle('is-active', k === i);
      if (k === i) el.removeAttribute('aria-hidden');
      else el.setAttribute('aria-hidden', 'true');
    });
    dots.forEach(function (el, k) {
      el.classList.toggle('is-active', k === i);
      var bar = el.querySelector('.dot-bar span');
      if (bar) bar.style.width = k === i ? '100%' : '0%';
    });
    heroTag.textContent = slideData[i].tag;
    heroCap.textContent = slideData[i].cap;
    heroDur.textContent = slideData[i].dur;
    current = i;
  }
  function startAutoplay() {
    clearInterval(timer);
    timer = setInterval(function () {
      renderSlide((current + 1) % slideData.length);
    }, autoplayMs);
  }
  dots.forEach(function (el, k) {
    el.addEventListener('click', function () {
      renderSlide(k);
      startAutoplay();
    });
  });
  startAutoplay();

  /* ===== Preselección de paquete al hacer clic en "Cotizar" ===== */
  var pkSelect = document.getElementById('f-pk');
  var contactoSection = document.getElementById('contacto');

  document.querySelectorAll('[data-pick]').forEach(function (el) {
    el.addEventListener('click', function () {
      var pk = el.getAttribute('data-pick');
      if (pkSelect) pkSelect.value = pk;
      contactoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ===== Formulario de contacto ===== */
  var form = document.getElementById('quoteForm');
  var successBox = document.getElementById('formSuccess');
  var resetBtn = document.getElementById('resetFormBtn');

  var fields = {
    name: document.getElementById('f-name'),
    phone: document.getElementById('f-phone'),
    date: document.getElementById('f-date'),
    pk: document.getElementById('f-pk'),
    msg: document.getElementById('f-msg')
  };
  var errors = {
    name: document.getElementById('err-name'),
    phone: document.getElementById('err-phone'),
    date: document.getElementById('err-date'),
    pk: document.getElementById('err-pk')
  };
  var pkLabels = {
    'medio-dia': 'Medio día (4 h)',
    'dia-completo': 'Día completo (8 h)',
    'sunset': 'Sunset cruise',
    'evento': 'Evento privado',
    'pesca': 'Pesca deportiva',
    'otro': 'No estoy seguro'
  };

  fields.date.min = new Date().toISOString().slice(0, 10);

  function validate() {
    var e = {};
    if (!fields.name.value.trim()) e.name = 'Escribe tu nombre.';
    if (fields.phone.value.replace(/\D/g, '').length < 10) e.phone = 'Teléfono de al menos 10 dígitos.';
    if (!fields.date.value) e.date = 'Elige una fecha.';
    if (!fields.pk.value) e.pk = 'Elige un paquete.';
    return e;
  }

  function clearFieldErrors() {
    Object.keys(errors).forEach(function (k) {
      errors[k].textContent = '';
      fields[k].classList.remove('has-error');
    });
  }

  function showFieldErrors(errs) {
    clearFieldErrors();
    Object.keys(errs).forEach(function (k) {
      errors[k].textContent = errs[k];
      fields[k].classList.add('has-error');
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var errs = validate();
    if (Object.keys(errs).length) {
      showFieldErrors(errs);
      return;
    }
    clearFieldErrors();

    var lead = {
      name: fields.name.value.trim(),
      phone: fields.phone.value.trim(),
      date: fields.date.value,
      pk: fields.pk.value,
      msg: fields.msg.value.trim(),
      at: new Date().toISOString()
    };
    try {
      var key = 'bajomardemo_leads';
      var list = JSON.parse(localStorage.getItem(key) || '[]');
      list.push(lead);
      localStorage.setItem(key, JSON.stringify(list));
    } catch (_) { /* localStorage no disponible: seguimos igual, es una demo */ }

    document.getElementById('successName').textContent = lead.name;
    document.getElementById('successPhone').textContent = lead.phone;
    document.getElementById('successPkg').textContent = pkLabels[lead.pk] || lead.pk;
    document.getElementById('successDate').textContent = lead.date;

    form.hidden = true;
    successBox.hidden = false;
  });

  resetBtn.addEventListener('click', function () {
    form.reset();
    clearFieldErrors();
    fields.date.min = new Date().toISOString().slice(0, 10);
    successBox.hidden = true;
    form.hidden = false;
  });
})();
