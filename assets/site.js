document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.toggle-all');
const roles = document.querySelectorAll('#experience details.org');
const sync = () => {
  const allOpen = [...roles].every(d => d.open);
  toggle.textContent = allOpen ? 'collapse all' : 'expand all';
  toggle.setAttribute('aria-pressed', allOpen);
};
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-pressed') !== 'true';
  roles.forEach(d => { d.open = open; });
  sync();
});
roles.forEach(d => d.addEventListener('toggle', sync));
