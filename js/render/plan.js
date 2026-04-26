// Plan tab renderer

const mbMap = { p:'mb-p', c:'mb-c', f:'mb-f', l:'mb-l', fr:'mb-fr' };
const mlMap = { p:'Prot', c:'Carbo', f:'Aceite', l:'Lác', fr:'Fruta' };

// Kcal estimate per portion type
const kcalPP = { proteina:90, carbo:165, aceite:90, lacteo:85, fruta:65, verdura:20 };
// mealSchedule keys → dailyPortions keys (carbo vs carbohidrato)
const portKey = { proteina:'proteina', carbo:'carbohidrato', aceite:'aceite', lacteo:'lacteo', fruta:'fruta', verdura:'verdura' };
// Brief summary label per food badge
const foodSumMap = {
  p:  '~90 kcal · proteína',
  c:  '~160 kcal · carbohidrato',
  f:  '~80 kcal · grasa saludable',
  l:  '~85 kcal · lácteo',
  fr: '~60 kcal · fruta',
};

let activeDay = 0;

function renderDays() {
  document.getElementById('dayBtns').innerHTML = days.map((d, i) => {
    let b = '';
    if (d.sport === 'padel')   b += `<span class="badge b-padel">🏸</span>`;
    if (d.sport === 'fútbol')  b += `<span class="badge b-fut">⚽</span>`;
    if (d.ofic)                b += `<span class="badge b-ofic">💼</span>`;
    return `<button class="day-btn${i === activeDay ? ' active' : ''}" onclick="selDay(${i})">
      <div class="dn">${d.name}</div>
      <div class="dbg">${b}</div>
    </button>`;
  }).join('');
}

function mealContribHTML(type, time) {
  const s = userProfile.mealSchedule.find(e => e.meal === type && e.time === time);
  if (!s) return '';
  const p = s.portions;
  const dp = userProfile.dailyPortions;

  const kcal = Math.round(
    Object.entries(p).reduce((sum, [k, v]) => sum + (kcalPP[k] || 0) * v, 0)
  );
  const kcalPct = Math.round(kcal / userProfile.kcalApprox * 100);

  const chip = (key, label, cls) => {
    const val = p[key] || 0;
    const daily = dp[portKey[key]] || 1;
    if (!val) return `<span class="mc-chip mc-dim">${label} —</span>`;
    const pct = Math.round(val / daily * 100);
    return `<span class="mc-chip ${cls}">${label} ${val} · ${pct}%</span>`;
  };

  return `<div class="meal-contrib">
    <span class="mc-kcal">~${kcal} kcal <span>(${kcalPct}% día)</span></span>
    ${chip('proteina','P','mc-p')}${chip('carbo','C','mc-c')}${chip('lacteo','Lác','mc-l')}${chip('aceite','Ace','mc-f')}
  </div>`;
}

function renderMeals() {
  const d = days[activeDay];
  let h = '';
  d.meals.forEach(m => {
    const tup = m.tupper ? `<span class="tupper">🧊 ${m.tupper === true ? 'tupper' : m.tupper}</span>` : '';
    h += `<div class="meal-card">
      <div class="meal-hd">
        <div class="meal-ic" style="background:${m.bg}">${m.icon}</div>
        <div class="meal-inf">
          <div class="meal-ttl">${m.type} ${tup}</div>
          <div class="meal-time">⏰ ${m.time}</div>
        </div>
      </div>
      ${mealContribHTML(m.type, m.time)}
      <div>`;
    m.foods.forEach(f => {
      const badge = f.b ? `<span class="mb ${mbMap[f.b]}">${mlMap[f.b]}</span>` : '';
      const qty   = f.a ? `<div class="food-q">${f.a}</div>` : '';
      const sum   = f.b ? `<div class="food-sum">${foodSumMap[f.b]}</div>` : '';
      h += `<div class="food-row">
        <div class="food-em">${foodEmoji(f.n)}</div>
        <div class="food-inf">
          <div class="food-nm">${f.n} ${badge}</div>
          ${qty}${sum}
        </div>
      </div>`;
    });
    h += '</div>';
    if (m.note) h += `<div class="meal-note">💡 ${m.note}</div>`;
    h += '</div>';
  });
  document.getElementById('mealView').innerHTML = h;
}

window.selDay = function(i) { activeDay = i; renderDays(); renderMeals(); };
