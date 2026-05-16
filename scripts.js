// ============================================================
//  CEUB RH – Scripts
//  Funções de navegação, toast e avaliação por estrelas
// ============================================================


// ------------------------------------------------------------
// Mapa de títulos por tela
// Para adicionar uma nova tela: inclua o id e o título aqui
// ------------------------------------------------------------
const PAGE_TITLES = {
  dashboard:   'Dashboard',
  candidatos:  'Candidatos',
  entrevistas: 'Entrevistas',
  avaliacoes:  'Avaliações',
  // Relatórios foi unido ao Dashboard – não há tela separada
};


// ------------------------------------------------------------
// go(id, el)
// Navega para a tela com o id informado e atualiza a sidebar
// ------------------------------------------------------------
function go(id, el) {
  // Esconde todas as telas
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

  // Remove destaque de todos os itens de navegação
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  // Ativa a tela e o item clicado
  document.getElementById('screen-' + id).classList.add('active');
  el.classList.add('active');

  // Atualiza o título da topbar
  document.getElementById('page-title').textContent = PAGE_TITLES[id] || id;
}


// ------------------------------------------------------------
// showToast(msg)
// Exibe uma mensagem temporária no canto inferior direito
// ------------------------------------------------------------
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;

  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}


// ------------------------------------------------------------
// rate(id, val)
// Atualiza as estrelas de avaliação para o grupo indicado
// Uso: rate('org', 3) → preenche 3 das 5 estrelas do grupo 'org'
// ------------------------------------------------------------
function rate(id, val) {
  const container = document.querySelector('.stars[data-id="' + id + '"]');
  if (!container) return;

  container.querySelectorAll('.star').forEach((star, index) => {
    star.classList.toggle('filled', index < val);
  });
}
