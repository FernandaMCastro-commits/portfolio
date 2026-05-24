# Portfolio — Fernanda Castro

Portfolio pessoal de desenvolvedora frontend, construído com foco em performance, microinterações e experiência fluida.

**Live:** _em breve_
**Autora:** [Fernanda Castro](https://github.com/FernandaMCastro-commits)

---

## Stack

| Categoria       | Tecnologia                        |
| --------------- | --------------------------------- |
| Build           | [Vite](https://vitejs.dev)        |
| UI              | [React 19](https://react.dev)     |
| Estilização     | [Tailwind CSS 3](https://tailwindcss.com) |
| Animações       | [Framer Motion](https://www.framer.com/motion/) |
| Ícones          | [Lucide React](https://lucide.dev) + SVG inline |
| Tipografia      | Inter (Google Fonts)              |

---

## Estrutura

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navegação responsiva com efeito glass on-scroll
│   │   ├── Hero.jsx         # Apresentação + CTA principal
│   │   ├── Sobre.jsx        # Pilares do trabalho
│   │   ├── Skills.jsx       # Stack com barras animadas
│   │   ├── Projetos.jsx     # Grid de projetos
│   │   ├── Contato.jsx      # Formulário animado
│   │   └── BrandIcons.jsx   # SVGs inline (GitHub, LinkedIn)
│   ├── App.jsx
│   ├── index.css            # Tailwind + utilitários customizados
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## Como rodar

> Pré-requisitos: **Node.js 18+** e **npm**.

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em **http://localhost:5173**.

### Build de produção

```bash
npm run build
npm run preview
```

### Reiniciar o servidor (Windows / PowerShell)

```powershell
Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue |
  ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
npm run dev
```

---

## Funcionalidades

- Tema dark moderno com gradientes animados e glassmorphism
- Navegação responsiva com transição de blur ao rolar
- Animações scroll-triggered com Framer Motion
- Barras de skills com animação progressiva
- Grid de projetos com hover micro-interactions
- Formulário de contato com estado de envio animado
- 100% responsivo (mobile-first)

---

## Personalização rápida

| O que mudar          | Onde                                              |
| -------------------- | ------------------------------------------------- |
| Nome / apresentação  | `src/components/Hero.jsx`                         |
| Sobre / pilares      | `src/components/Sobre.jsx`                        |
| Skills / níveis      | `src/components/Skills.jsx` (array `skills`)      |
| Projetos             | `src/components/Projetos.jsx` (array `projetos`)  |
| Redes sociais        | `src/components/Hero.jsx` (array de ícones)       |
| Paleta / tema        | `tailwind.config.js` + `src/index.css`            |

---

## Contato

- **GitHub:** [FernandaMCastro-commits](https://github.com/FernandaMCastro-commits)
- **E-mail:** _atualize em `src/components/Hero.jsx`_

---

_Feito com React + Vite + Framer Motion._
