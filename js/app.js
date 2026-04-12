// App init + routing

window.showTab = function(t) {
  const tabs = ['plan', 'shop', 'nana', 'ofic', 'prog'];
  document.querySelectorAll('.tab').forEach((b, i) => {
    b.classList.toggle('active', tabs[i] === t);
  });
  document.querySelectorAll('.pane').forEach(p => p.classList.remove('active'));
  document.getElementById('pane-' + t).classList.add('active');
};

// Init on load
renderDays();
renderMeals();
renderShop();
renderNana();
renderOfic();
renderProgress();
