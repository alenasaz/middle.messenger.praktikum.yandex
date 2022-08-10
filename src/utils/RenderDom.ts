function render(query, block) {
  const root = document.getElementById('app');
  root.appendChild(block.getContent());

  block.dispatchComponentDidMount();

  return root;
}

export default render;
