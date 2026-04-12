// Office tips renderer

const tipMeta = [
  { ic:'🎒', bg:'#E3F2FD' },
  { ic:'🔧', bg:'#FFF3E0' },
  { ic:'🏢', bg:'#E8F5E9' },
  { ic:'🚫', bg:'#FFEBEE' },
];

function renderOfic() {
  let h = '';
  oficTips.forEach((sec, i) => {
    const tm = tipMeta[i] || { ic:'💡', bg:'#F5F5F5' };
    h += `<div class="tip-card">
      <div class="tip-hd">
        <div class="tip-hd-ic" style="background:${tm.bg}">${tm.ic}</div>
        <div class="tip-hd-ttl">${sec.title}</div>
      </div>`;
    sec.items.forEach(it => {
      h += `<div class="tip-row">
        <div class="tip-dot"></div>
        <div class="tip-bd">
          <div class="tip-ttl">${it.t}</div>
          <div class="tip-sub">${it.s}</div>
        </div>
      </div>`;
    });
    h += '</div>';
  });
  document.getElementById('oficView').innerHTML = h;
}
