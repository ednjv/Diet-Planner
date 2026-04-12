// Progress tab renderer
// Tracks: weight, muscle kg, fat kg → auto-calculates %s
// Persistence: localStorage via js/utils/storage.js

const GOAL_FAT_PCT = 20; // doctor's target

// ── Helpers ───────────────────────────────────────────────────────────────────

function calcFatPct(fat, weight) {
  if (!fat || !weight) return null;
  return (fat / weight) * 100;
}
function calcMusclePct(muscle, weight) {
  if (!muscle || !weight) return null;
  return (muscle / weight) * 100;
}
function fmt1(v)   { return v != null ? v.toFixed(1) : '—'; }
function fmtP(v)   { return v != null ? v.toFixed(1) + '%' : '—'; }
function fmtKg(v)  { return v != null ? v + ' kg' : '—'; }

function fatColor(v) {
  if (v == null)  return 'var(--t3)';
  if (v > 25)     return 'var(--red)';
  if (v > 20)     return 'var(--ora)';
  return 'var(--grn)';
}
function fmtDate(s) {
  if (!s) return '';
  const [y, m, d] = s.split('-');
  return `${d}/${m}/${y}`;
}

// ── Section: latest stats card ────────────────────────────────────────────────

function renderLatestStats(entries) {
  if (!entries.length) {
    return `<div class="prog-empty">
      <div class="prog-empty-ic">📊</div>
      <div class="prog-empty-txt">Sin mediciones aún.<br>Añade la primera para ver tu progreso.</div>
    </div>`;
  }

  const last     = entries[entries.length - 1];
  const first    = entries[0];
  const fatP     = calcFatPct(last.fat, last.weight);
  const musP     = calcMusclePct(last.muscle, last.weight);
  const fc       = fatColor(fatP);
  const diff     = fatP != null ? fatP - GOAL_FAT_PCT : null;

  // Progress bar: fat% on a 0–40% scale, goal marker at 50%
  const barW    = fatP != null ? Math.min(100, (fatP / 40) * 100).toFixed(1) : 0;
  const goalMkW = (GOAL_FAT_PCT / 40) * 100; // 50%

  // Journey label (from first measurement toward goal)
  let journeyHtml = '';
  const firstFatP = calcFatPct(first.fat, first.weight);
  if (firstFatP != null && fatP != null && firstFatP > GOAL_FAT_PCT && entries.length > 1) {
    const pct = Math.max(0, Math.min(100, ((firstFatP - fatP) / (firstFatP - GOAL_FAT_PCT)) * 100));
    journeyHtml = `<div class="prog-journey">${pct.toFixed(0)}% del camino a la meta (desde ${fmtP(firstFatP)})</div>`;
  }

  return `<div class="prog-latest">
    <div class="prog-latest-hd">
      <span>📅 Última medición: ${fmtDate(last.date)}</span>
      ${last.inbodyScore ? `<span class="prog-inbody-badge">InBody ${last.inbodyScore}/100</span>` : ''}
    </div>

    <div class="prog-stats-grid">
      <div class="prog-stat">
        <div class="prog-stat-v" style="color:${fc}">${fmtP(fatP)}</div>
        <div class="prog-stat-l">% Grasa</div>
        ${diff != null ? `<div class="prog-stat-sub" style="color:${diff > 0 ? 'var(--red)' : 'var(--grn)'}">
          ${diff > 0 ? '+' : ''}${fmt1(diff)}% vs meta
        </div>` : ''}
      </div>
      <div class="prog-stat">
        <div class="prog-stat-v" style="color:var(--blu)">${fmtKg(last.muscle)}</div>
        <div class="prog-stat-l">Músculo</div>
        <div class="prog-stat-sub" style="color:var(--blu)">${fmtP(musP)}</div>
      </div>
      <div class="prog-stat">
        <div class="prog-stat-v">${fmtKg(last.weight)}</div>
        <div class="prog-stat-l">Peso total</div>
        <div class="prog-stat-sub">${last.fat ? last.fat + ' kg grasa' : ''}</div>
      </div>
    </div>

    <div class="prog-goal-wrap">
      <div class="prog-goal-label">Meta: ${GOAL_FAT_PCT}% grasa corporal</div>
      <div class="prog-goal-track">
        <div class="prog-goal-fill" style="width:${barW}%;background:${fc}"></div>
        <div class="prog-goal-line" style="left:${goalMkW}%"></div>
      </div>
      <div class="prog-goal-row">
        <span>0%</span>
        <span style="color:var(--grn);font-weight:600">Meta 20%</span>
        <span style="color:${fc};font-weight:600">${fmtP(fatP)}</span>
      </div>
      ${journeyHtml}
    </div>
  </div>`;
}

// ── Section: trend chart (SVG, no deps) ──────────────────────────────────────

function renderTrendChart(entries) {
  if (entries.length < 2) return '';

  const W = 290, H = 120, PL = 22, PR = 12, PT = 22, PB = 24;
  const cW = W - PL - PR, cH = H - PT - PB;

  const fatPcts = entries.map(e => calcFatPct(e.fat, e.weight));
  const valid   = fatPcts.filter(v => v != null);
  const minY    = Math.floor(Math.min(...valid, GOAL_FAT_PCT) - 1);
  const maxY    = Math.ceil(Math.max(...valid, GOAL_FAT_PCT) + 2);
  const rng     = maxY - minY;

  const xOf = i => PL + (entries.length > 1 ? (i / (entries.length - 1)) * cW : cW / 2);
  const yOf = v => PT + cH - ((v - minY) / rng) * cH;
  const goalY = yOf(GOAL_FAT_PCT);

  // Fat% polyline
  const pts   = fatPcts.map((v, i) => v != null ? `${xOf(i).toFixed(1)},${yOf(v).toFixed(1)}` : null).filter(Boolean);
  const line  = `M ${pts.join(' L ')}`;
  const lastX = xOf(entries.length - 1), firstX = xOf(0);
  const area  = `${line} L ${lastX.toFixed(1)},${(PT + cH).toFixed(1)} L ${firstX.toFixed(1)},${(PT + cH).toFixed(1)} Z`;

  // Dots + value labels
  let dots = '';
  fatPcts.forEach((v, i) => {
    if (v == null) return;
    const x = xOf(i), y = yOf(v);
    const isLast  = i === entries.length - 1;
    const isFirst = i === 0;
    dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}"
      r="${isLast ? 4.5 : 3}" fill="${isLast ? fatColor(v) : '#E65100'}"
      stroke="#fff" stroke-width="1.5"/>`;
    if (isFirst || isLast) {
      const anchor = isFirst ? 'start' : 'end';
      dots += `<text x="${x.toFixed(1)}" y="${(y - 8).toFixed(1)}"
        text-anchor="${anchor}" font-size="9.5" font-weight="700" fill="${fatColor(v)}">${v.toFixed(1)}%</text>`;
    }
  });

  // X-axis date labels
  const xLabels = `
    <text x="${PL}" y="${H - 4}" text-anchor="start" font-size="8" fill="#bbb">${fmtDate(entries[0].date)}</text>
    <text x="${W - PR}" y="${H - 4}" text-anchor="end" font-size="8" fill="#bbb">${fmtDate(entries[entries.length - 1].date)}</text>`;

  // Y-axis label
  const yLbl = `<text x="10" y="${(PT + cH / 2).toFixed(1)}" text-anchor="middle"
    font-size="8" fill="#ccc" transform="rotate(-90,10,${(PT + cH / 2).toFixed(1)})">%Grasa</text>`;

  return `<div class="prog-chart-card">
    <div class="prog-chart-ttl">Evolución Grasa Corporal</div>
    <svg viewBox="0 0 ${W} ${H}" style="width:100%;display:block;overflow:visible">
      ${yLbl}
      <line x1="${PL}" y1="${goalY.toFixed(1)}" x2="${W - PR}" y2="${goalY.toFixed(1)}"
        stroke="#2E7D32" stroke-width="1.2" stroke-dasharray="5,4"/>
      <text x="${PL + 4}" y="${(goalY - 4).toFixed(1)}" font-size="8" fill="#2E7D32" font-weight="600">Meta 20%</text>
      <path d="${area}" fill="rgba(230,81,0,.08)"/>
      <path d="${line}" fill="none" stroke="#E65100" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
      ${dots}
      ${xLabels}
    </svg>
  </div>`;
}

// ── Section: history list ─────────────────────────────────────────────────────

function renderHistory(entries) {
  if (!entries.length) return '';
  const sorted = [...entries].reverse();

  const rows = sorted.map(e => {
    const fatP = calcFatPct(e.fat, e.weight);
    const musP = calcMusclePct(e.muscle, e.weight);
    const fc   = fatColor(fatP);
    const noteHtml = e.notes
      ? `<div class="prog-hist-note">${e.notes}</div>` : '';
    return `<div class="prog-hist-row">
      <div class="prog-hist-left">
        <div class="prog-hist-date">${fmtDate(e.date)}</div>
        ${e.inbodyScore ? `<div class="prog-hist-ib">IB ${e.inbodyScore}</div>` : ''}
        ${noteHtml}
      </div>
      <div class="prog-hist-vals">
        <div class="prog-hist-chip" style="color:${fc};background:${fc}1a">${fmtP(fatP)}</div>
        <div class="prog-hist-chip" style="color:var(--blu);background:#E3F2FD">${fmtKg(e.muscle)}</div>
        <div class="prog-hist-chip">${fmtKg(e.weight)}</div>
      </div>
      <div class="prog-hist-actions">
        <button class="prog-action-btn" onclick="openProgressForm('${e.id}')" title="Editar">✏️</button>
        <button class="prog-action-btn" onclick="confirmDelete('${e.id}')" title="Eliminar">🗑</button>
      </div>
    </div>`;
  }).join('');

  return `<div class="prog-section-hd">Historial</div>
    <div class="prog-hist-card">
      <div class="prog-hist-thead">
        <span>Fecha</span>
        <div style="display:flex;gap:6px">
          <span style="min-width:54px;text-align:center">Grasa</span>
          <span style="min-width:54px;text-align:center">Músculo</span>
          <span style="min-width:54px;text-align:center">Peso</span>
        </div>
        <span style="width:56px"></span>
      </div>
      ${rows}
    </div>`;
}

// ── Section: import / export ──────────────────────────────────────────────────

function renderImportExport() {
  return `<div class="prog-io">
    <button class="prog-io-btn" onclick="exportProgress()">⬇ Exportar JSON</button>
    <label class="prog-io-btn prog-io-import">
      ⬆ Importar JSON
      <input type="file" accept=".json" style="display:none" onchange="handleImport(this)">
    </label>
  </div>`;
}

// ── Modal (form) ──────────────────────────────────────────────────────────────

function injectModal() {
  if (document.getElementById('prog-modal')) return;
  document.body.insertAdjacentHTML('beforeend', `
    <div id="prog-modal" class="prog-overlay" style="display:none" onclick="if(event.target===this)closeProgressForm()">
      <div class="prog-sheet">
        <div class="prog-sheet-hd">
          <span class="prog-sheet-ttl" id="pf-title">Nueva medición</span>
          <button class="prog-sheet-close" onclick="closeProgressForm()">✕</button>
        </div>
        <div class="prog-form">
          <input type="hidden" id="pf-id">

          <label class="pf-lbl">Fecha
            <input type="date" id="pf-date" class="pf-inp">
          </label>

          <div class="pf-row">
            <label class="pf-lbl pf-half">Peso (kg)
              <input type="number" id="pf-weight" class="pf-inp" step="0.1" min="40" max="200" placeholder="70.5" oninput="livePcts()">
            </label>
            <label class="pf-lbl pf-half">InBody score
              <input type="number" id="pf-inbody" class="pf-inp" step="1" min="0" max="100" placeholder="72 (opcional)">
            </label>
          </div>

          <div class="pf-row">
            <label class="pf-lbl pf-half">Músculo (kg)
              <input type="number" id="pf-muscle" class="pf-inp" step="0.1" min="0" max="100" placeholder="29.4" oninput="livePcts()">
              <span class="pf-hint" id="pf-muscle-hint"></span>
            </label>
            <label class="pf-lbl pf-half">Grasa (kg)
              <input type="number" id="pf-fat" class="pf-inp" step="0.1" min="0" max="100" placeholder="19.3" oninput="livePcts()">
              <span class="pf-hint" id="pf-fat-hint"></span>
            </label>
          </div>

          <div class="pf-live" id="pf-live" style="display:none">
            <span id="pf-live-fat">—</span>
            <span id="pf-live-muscle">—</span>
            <span id="pf-live-remain"></span>
          </div>

          <label class="pf-lbl">Notas (opcional)
            <textarea id="pf-notes" class="pf-inp pf-textarea" placeholder="Ej: post-control con Dra. Laura, sin cambios de medicamentos…"></textarea>
          </label>

          <button class="pf-save" onclick="saveProgressForm()">Guardar medición</button>
        </div>
      </div>
    </div>`);
}

// ── Main render ───────────────────────────────────────────────────────────────

function renderProgress() {
  const entries = getProgressEntries();
  let h = '';
  h += renderLatestStats(entries);
  if (entries.length >= 2) h += renderTrendChart(entries);
  h += `<button class="prog-add-btn" onclick="openProgressForm()">+ Añadir medición</button>`;
  h += renderImportExport();
  h += renderHistory(entries);
  document.getElementById('progressView').innerHTML = h;
  injectModal();
}

// ── Window-level actions ──────────────────────────────────────────────────────

window.openProgressForm = function(id) {
  injectModal();
  const today = new Date().toISOString().slice(0, 10);
  document.getElementById('pf-id').value     = id || '';
  document.getElementById('pf-title').textContent = id ? 'Editar medición' : 'Nueva medición';
  document.getElementById('pf-date').value   = today;
  document.getElementById('pf-weight').value = '';
  document.getElementById('pf-muscle').value = '';
  document.getElementById('pf-fat').value    = '';
  document.getElementById('pf-inbody').value = '';
  document.getElementById('pf-notes').value  = '';
  document.getElementById('pf-live').style.display = 'none';
  document.getElementById('pf-fat-hint').textContent    = '';
  document.getElementById('pf-muscle-hint').textContent = '';

  if (id) {
    const e = getProgressEntries().find(x => x.id === id);
    if (e) {
      document.getElementById('pf-date').value   = e.date;
      document.getElementById('pf-weight').value = e.weight ?? '';
      document.getElementById('pf-muscle').value = e.muscle ?? '';
      document.getElementById('pf-fat').value    = e.fat ?? '';
      document.getElementById('pf-inbody').value = e.inbodyScore ?? '';
      document.getElementById('pf-notes').value  = e.notes ?? '';
      livePcts();
    }
  }
  document.getElementById('prog-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
};

window.closeProgressForm = function() {
  document.getElementById('prog-modal').style.display = 'none';
  document.body.style.overflow = '';
};

window.livePcts = function() {
  const w = parseFloat(document.getElementById('pf-weight').value);
  const m = parseFloat(document.getElementById('pf-muscle').value);
  const f = parseFloat(document.getElementById('pf-fat').value);
  const live = document.getElementById('pf-live');

  if (!w) { live.style.display = 'none'; return; }

  const fatP = f ? ((f / w) * 100) : null;
  const musP = m ? ((m / w) * 100) : null;

  document.getElementById('pf-fat-hint').textContent    = fatP ? `→ ${fatP.toFixed(1)}%` : '';
  document.getElementById('pf-muscle-hint').textContent = musP ? `→ ${musP.toFixed(1)}%` : '';

  const remain = fatP != null ? fatP - GOAL_FAT_PCT : null;

  document.getElementById('pf-live-fat').textContent    = fatP ? `🔴 Grasa: ${fatP.toFixed(1)}%` : '—';
  document.getElementById('pf-live-muscle').textContent = musP ? `🔵 Músculo: ${musP.toFixed(1)}%` : '—';
  document.getElementById('pf-live-remain').textContent = remain != null
    ? (remain > 0 ? `Faltan ${fmt1(remain)}% para meta` : `✅ Meta alcanzada`)
    : '';

  live.style.display = 'flex';
};

window.saveProgressForm = function() {
  const date   = document.getElementById('pf-date').value;
  const weight = parseFloat(document.getElementById('pf-weight').value);
  if (!date || !weight) { alert('Fecha y peso son obligatorios.'); return; }

  const entry = {
    id:          document.getElementById('pf-id').value || String(Date.now()),
    date,
    weight,
    muscle:      parseFloat(document.getElementById('pf-muscle').value) || null,
    fat:         parseFloat(document.getElementById('pf-fat').value) || null,
    inbodyScore: parseInt(document.getElementById('pf-inbody').value) || null,
    notes:       document.getElementById('pf-notes').value.trim() || null,
  };

  saveEntry(entry);
  closeProgressForm();
  renderProgress();
};

window.confirmDelete = function(id) {
  if (confirm('¿Eliminar esta medición? No se puede deshacer.')) {
    deleteEntry(id);
    renderProgress();
  }
};

window.handleImport = function(input) {
  if (!input.files[0]) return;
  importProgress(input.files[0], () => renderProgress());
  input.value = '';
};
