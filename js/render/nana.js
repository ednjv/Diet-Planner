// Nana tab renderer

function renderNana() {
  const d = nanaData;
  let h = '';

  // Intro card
  h += `<div class="nana-intro">
    <div class="nana-intro-ic">👩‍🍳</div>
    <div class="nana-intro-txt">
      <div class="nana-intro-ttl">${d.intro.title}</div>
      <div class="nana-intro-sub">${d.intro.sub}</div>
      <div class="nana-intro-note">${d.intro.note}</div>
    </div>
  </div>`;

  // Recipe sections
  d.sections.forEach(sec => {
    h += `<div class="nana-card">
      <div class="nana-card-hd">
        <div class="nana-card-ic">${sec.icon}</div>
        <div class="nana-card-hd-txt">
          <div class="nana-card-ttl">${sec.title}</div>
          <div class="nana-badge">${sec.badge}</div>
        </div>
      </div>
      <div class="nana-qty-row">
        <span class="nana-qty-label">Ingredientes</span>
        <span class="nana-qty-val">${sec.qty}</span>
      </div>
      <div class="nana-steps-hd">Pasos</div>`;
    sec.steps.forEach((step, i) => {
      h += `<div class="nana-step">
        <div class="nana-step-num">${i + 1}</div>
        <div class="nana-step-txt">${step}</div>
      </div>`;
    });
    h += `<div class="nana-storage">
        <span class="nana-storage-ic">🧊</span>
        <span>${sec.storage}</span>
      </div>`;
    if (sec.tip) {
      h += `<div class="nana-tip">💡 ${sec.tip}</div>`;
    }
    h += '</div>';
  });

  // Extras section
  h += `<div class="nana-extras-hd">Otras indicaciones</div>`;
  d.extras.forEach(ex => {
    h += `<div class="nana-extra-card">
      <div class="nana-extra-ic">${ex.icon}</div>
      <div class="nana-extra-body">
        <div class="nana-extra-ttl">${ex.title}</div>
        <div class="nana-extra-note">${ex.note}</div>
      </div>
    </div>`;
  });

  document.getElementById('nanaView').innerHTML = h;
}
