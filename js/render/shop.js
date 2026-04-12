// Shopping tab renderer

const catMeta = {
  'Proteínas':               { ic:'🥩', bg:'#FFEBEE' },
  'Carbohidratos':           { ic:'🌾', bg:'#FFF8E1' },
  'Verduras (sin restricción)': { ic:'🥦', bg:'#E8F5E9' },
  'Frutas':                  { ic:'🍎', bg:'#FCE4EC' },
  'Lácteos':                 { ic:'🥛', bg:'#E3F2FD' },
  'Aceites y Grasas':        { ic:'🫒', bg:'#F3E5F5' },
  'Condimentos y extras':    { ic:'🧂', bg:'#FFF3E0' },
};

function renderShop() {
  let h = `<div class="shop-search-wrap">
    <input
      id="shopSearch"
      class="shop-search"
      type="search"
      placeholder="Buscar producto o marca…"
      autocomplete="off"
      oninput="filterShop(this.value)"
    >
  </div>`;

  shopData.forEach(cat => {
    const cm = catMeta[cat.cat] || { ic:'🛒', bg:'#F5F5F5' };
    h += `<div class="shop-sec" data-cat="${cat.cat}">
      <div class="shop-cat-hd">
        <div class="shop-cat-ic" style="background:${cm.bg}">${cm.ic}</div>
        <span class="shop-cat-nm">${cat.cat}</span>
        <span class="shop-cnt">(${cat.rows.length})</span>
      </div>
      <div class="shop-cards">`;
    cat.rows.forEach(r => {
      h += `<div class="shop-row" data-search="${(r.p + ' ' + r.br + ' ' + r.n).toLowerCase()}">
        <div class="shop-em">${foodEmoji(r.p)}</div>
        <div class="shop-inf">
          <div class="shop-prod">${r.p}</div>
          <div class="shop-br">${r.br}</div>
          <div class="shop-nt">${r.n}</div>
        </div>
        <div class="shop-qty">${r.q}</div>
      </div>`;
    });
    h += '</div></div>';
  });
  document.getElementById('shopView').innerHTML = h;
}

function filterShop(query) {
  const q = query.trim().toLowerCase();
  document.querySelectorAll('#shopView .shop-sec').forEach(sec => {
    let visibleRows = 0;
    sec.querySelectorAll('.shop-row').forEach(row => {
      const match = !q || row.dataset.search.includes(q);
      row.style.display = match ? '' : 'none';
      if (match) visibleRows++;
    });
    sec.style.display = visibleRows === 0 ? 'none' : '';
  });
}
