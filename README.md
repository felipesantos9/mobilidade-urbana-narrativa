# Mobilidade Urbana

Scrollytelling sobre motos, o 192 e o transporte no Recife. Projeto da disciplina Narrativas Inovadoras com Dados na Comunicação Digital (UFPE, 2026.2).

## Rodar localmente

Requer Node.js 22 ou mais novo.

```bash
npm install
npm run dev
```

| Comando                | O que faz                                 |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Servidor local com recarga automática     |
| `npm run build`        | Gera o site final em `dist/`              |
| `npm run preview`      | Serve o `dist/` para conferir o build     |
| `npm run lint`         | Verifica o código com ESLint              |
| `npm run format`       | Formata tudo com Prettier                 |
| `npm run format:check` | Confere a formatação sem alterar arquivos |

## Estrutura

```
content/        textos, números e posições (jornalismo e design editam aqui)
  historia.yaml ordem das cenas e altura de cada uma
  cenas/        um YAML por cena
data/           dados brutos (fora do Git) e scripts que geram src/data/
src/
  main.js       monta as cenas e liga as animações
  cenas/        um módulo por cena
  styles/       tokens.css (cores e fontes) + estilos base
```

## Como adicionar uma cena

1. Crie `content/cenas/<id>.yaml` com o conteúdo.
2. Crie `src/cenas/<id>.js` exportando `id`, `montar(el)` e `animar(el, { reduzido })`.
3. Importe o módulo em `src/main.js` e inclua no objeto `cenas`.
4. Adicione `{ id, altura }` em `content/historia.yaml`, na posição da cena.

Regras: todo texto da matéria vem do YAML; seletores dentro da cena usam `gsap.utils.selector(el)`; com `reduzido`, a cena fica estática.

## Contribuir

- `main` sempre publicável; mudanças entram por pull request revisado.
- Branches curtas: `cena/moto`, `dados/samu`, `fix/flash-queda`.
- Rode `npm run lint` e `npm run format:check` antes de abrir o PR.
