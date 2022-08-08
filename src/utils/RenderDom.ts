function render(query, block) {
  const root = document.getElementById("app");
  // app.innerHTML = routes[window.location.pathname]?.();
  console.log('root', root);
  console.log('render', query, block);
  // Можно завязаться на реализации вашего класса Block
  root.appendChild(block.getContent());

  block.dispatchComponentDidMount();

  return root;
}

export default render;
