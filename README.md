# Comparador Salarial

Aplicação web para comparar, lado a lado, o pacote de remuneração do seu emprego atual com uma outra proposta.

## Como usar

1. Abra o arquivo `index.html` diretamente no navegador (duplo clique ou arraste para o browser)
2. Preencha os valores de cada benefício nas colunas **Emprego Atual** e **Proposta**
3. O totalizador atualiza automaticamente conforme você digita
4. Use o botão **+ Adicionar Item** para incluir benefícios personalizados
5. Remova itens personalizados clicando no botão ✕

## Funcionalidades

- **Comparação lado a lado** — Duas colunas para visualizar cada aspecto da remuneração
- **6 itens pré-definidos** — Salário, Vale Alimentação/Refeição, Plano de Saúde, PLR, Vale Transporte e Bônus
- **Itens personalizados** — Adicione quantos benefícios extras precisar
- **Totalizador automático** — Soma atualizada em tempo real, formatada em R$
- **Validação de entrada** — Aceita apenas valores numéricos positivos
- **Zero dependências** — HTML, CSS e JavaScript puro, sem frameworks

## Requisitos

- Qualquer navegador moderno (Chrome, Firefox, Edge, Safari)
- Não precisa de servidor web, instalação ou internet

## Desenvolvimento

### Testes

```bash
npm install
npm test
```

Os testes usam [Vitest](https://vitest.dev/) com JSDOM e [fast-check](https://fast-check.dev/) para property-based testing.

### Estrutura

```
salarx/
├── index.html          # Aplicação completa (HTML + CSS + JS inline)
├── package.json        # Dependências de desenvolvimento (testes)
├── vitest.config.js    # Configuração do Vitest
└── tests/
    └── setup.test.js   # Testes de verificação do ambiente
```

## Notas

- Os dados existem apenas durante a sessão do navegador — ao recarregar a página, tudo é reiniciado
- Valores são formatados como moeda brasileira (R$) no totalizador
- Campos vazios ou inválidos são tratados como zero no cálculo
