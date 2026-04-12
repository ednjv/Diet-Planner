// Plan tab renderer

const mbMap = { p:'mb-p', c:'mb-c', f:'mb-f', l:'mb-l', fr:'mb-fr' };
const mlMap = { p:'Prot', c:'Carbo', f:'Aceite', l:'Lác', fr:'Fruta' };

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

function renderMeals() {
  const d = days[activeDay];
  let h = '';
  d.meals.forEach(m => {
    const tup = m.tupper ? `<span class="tupper">🧊 tupper</span>` : '';
    h += `<div class="meal-card">
      <div class="meal-hd">
        <div class="meal-ic" style="background:${m.bg}">${m.icon}</div>
        <div class="meal-inf">
          <div class="meal-ttl">${m.type} ${tup}</div>
          <div class="meal-time">⏰ ${m.time}</div>
        </div>
      </div><div>`;
    m.foods.forEach(f => {
      const badge = f.b ? `<span class="mb ${mbMap[f.b]}">${mlMap[f.b]}</span>` : '';
      const qty   = f.a ? `<div class="food-q">${f.a}</div>` : '';
      h += `<div class="food-row">
        <div class="food-em">${foodEmoji(f.n)}</div>
        <div class="food-inf">
          <div class="food-nm">${f.n} ${badge}</div>
          ${qty}
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
