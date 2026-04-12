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
  let h = '';
  shopData.forEach(cat => {
    const cm = catMeta[cat.cat] || { ic:'🛒', bg:'#F5F5F5' };
    h += `<div class="shop-sec">
      <div class="shop-cat-hd">
        <div class="shop-cat-ic" style="background:${cm.bg}">${cm.ic}</div>
        <span class="shop-cat-nm">${cat.cat}</span>
        <span class="shop-cnt">(${cat.rows.length})</span>
      </div>
      <div class="shop-cards">`;
    cat.rows.forEach(r => {
      h += `<div class="shop-row">
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
