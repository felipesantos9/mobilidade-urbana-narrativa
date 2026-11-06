import { defineConfig } from 'vite';
import { parse } from 'yaml';

// Permite `import conteudo from './arquivo.yaml'` devolvendo o objeto já convertido.
const yaml = () => ({
  name: 'yaml',
  transform(code, id) {
    if (!/\.ya?ml$/.test(id)) return null;
    return { code: `export default ${JSON.stringify(parse(code))};`, map: null };
  },
});

export default defineConfig({
  plugins: [yaml()],
});
