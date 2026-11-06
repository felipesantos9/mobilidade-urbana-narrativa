# Dados

- `raw/`: arquivos baixados das fontes (CSV, GeoJSON). Ficam fora do Git; anote aqui de onde vieram.
- `scripts/`: scripts em Python que leem `raw/`, calculam os números de cada cena e gravam JSON em `src/data/`.

Cada JSON gerado leva os campos `fonte` e `atualizado_em`. Rodar um script de novo precisa dar o mesmo resultado.

## Fontes

| Arquivo em `raw/` | Origem | Baixado em |
| ----------------- | ------ | ---------- |
