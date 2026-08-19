# Santander 2026 — AI React Front-end

Repositório com os estudos, exercícios e projetos do bootcamp **Santander 2026 - AI React Front-end** da [DIO](https://www.dio.me).

O objetivo do bootcamp é aprender a criar as interfaces que as pessoas usam todo dia em sites e aplicativos, combinando os fundamentos do desenvolvimento front-end com Inteligência Artificial para entregar experiências digitais modernas, responsivas e orientadas ao usuário.

---

## Sobre o bootcamp

| | |
|---|---|
| **Nível** | Básico |
| **Carga horária** | 42 horas |
| **Instituição** | DIO + Santander |
| **Início** | 26/07/2026 |
| **Prazo de conclusão** | 23/08/2026 |

### Conteúdo programático

- Fundamentos do **React 19** com JSX, componentes funcionais e hooks
- Estruturação de projetos com **Vite** e boas práticas de organização
- Princípios de **UI/UX Design** para interfaces acessíveis e consistentes
- Sistemas de **theming** e **design responsivo**
- Integração com a **API Gemini** para gerar orientações financeiras personalizadas no projeto final

### Trilha de atividades

| Módulo | Atividades |
|---|---|
| Copilotos com IA no Desenvolvimento de Soluções | 5 |
| Conceitos Básicos para Começar a Programar em React | 6 |
| Entendendo Componentes em React do Zero | 6 |
| Componentes em React na Prática | 3 |
| Projeto Final: Educador Financeiro Inteligente | 1 |

**Total:** 17 cursos · 1 desafio de projeto · 1 desafio de código · 1 live · 1 desafio de criação

---

## Projetos deste repositório

Cada pasta é um experimento prático de um módulo diferente — principalmente do módulo de **empacotadores e compiladores**, onde o mesmo app React é montado com ferramentas distintas para comparar as abordagens.

### [`react-babel-webpack-example/`](react-babel-webpack-example/)
App React configurado **manualmente** com Babel + Webpack, sem nenhum starter pronto. Serve para entender o que ferramentas como o Vite fazem por baixo dos panos.

- `@babel/preset-env` + `@babel/preset-react` para transpilar JSX
- `babel-loader`, `html-webpack-plugin` e `webpack-dev-server`

```bash
cd react-babel-webpack-example
npm install
npm start      # dev server
npm run build  # build de produção
```

### [`react-esbuild-config/`](react-esbuild-config/)
Mesmo app, agora empacotado com **esbuild** — bem mais rápido e com muito menos configuração que o Webpack.

```bash
cd react-esbuild-config
npm install
npm run build  # gera dist/bundle.js
```

### [`setup-react-course/`](setup-react-course/)
Projeto React + **Vite** + **TypeScript**, com `oxlint` para linting. Preparação do ambiente de desenvolvimento moderno.

```bash
cd setup-react-course
npm install
npm run dev
```

### [`vitejs-vite-mgaw9q5i/`](vitejs-vite-mgaw9q5i/)
Projeto React + **Vite** em JavaScript puro (JSX), com `date-fns` entre as dependências. Base para os exercícios de componentes e hooks.

```bash
cd vitejs-vite-mgaw9q5i
npm install
npm run dev
```

---

## Tecnologias

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black)
![esbuild](https://img.shields.io/badge/esbuild-FFCF00?style=for-the-badge&logo=esbuild&logoColor=black)

---

## Progresso

- [x] Conhecendo o React — *certificado emitido*
- [x] Preparando o Ambiente de Desenvolvimento React — *certificado emitido*
- [ ] Empacotadores e Compiladores do React
- [ ] Criando Aplicações React com Create React App
- [ ] Criando Aplicações React com Vite
- [ ] Desafio de código: Conhecendo os Pilares do Frontend
- [ ] Entendendo Componentes em React do Zero
- [ ] Componentes em React na Prática
- [ ] Projeto Final: Educador Financeiro Inteligente

---

## Projeto final

**Educador Financeiro Inteligente** — aplicação React que integra a **API Gemini** para gerar orientações financeiras personalizadas, aplicando tudo o que foi visto no bootcamp: componentização, hooks, theming, responsividade e IA.

---

## Autora

**Fernanda Souza**

Feito com 💜 durante o bootcamp Santander 2026 - AI React Front-end da DIO.
# Santander-2026---AI-React-Front-end
