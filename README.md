# 👟 Outlet Senai — Curadoria & Design de Tênis Premium

> **Reformulação Visual e Textual:** A transição de um layout de varejo comum para uma identidade de e-commerce premium, minimalista e focada na cultura *sneakerhead* urbana.

---

## 📖 Sobre o Projeto

Este projeto consiste em uma plataforma de e-commerce conceitual de tênis desenvolvida sob princípios de **design consciente, separação de responsabilidades (SoC) e UX Writing premium**. 

Originalmente estruturado com uma identidade visual focada em apelo promocional agressivo (vermelho chamativo, gatilhos de pressa e descontos bruscos), o site foi completamente reformulado para atuar como uma **marca premium contemporânea**, adotando um layout limpo, com amplo respiro visual, tons sóbrios e um tom de voz que preza pela autenticidade e curadoria.

---

## 🎨 Identidade Visual & Design System

A nova identidade foi construída sob os seguintes pilares estilísticos em [style.css](file:///c:/Users/miguu/OneDrive/Desktop/Outlet/Site-Tenis-Senai-Outlet/assets/css/style.css):

*   **Paleta de Cores**:
    *   `--color-light` (`#F9F6F0`): Tom base Off-White que suaviza o contraste da tela e traz refinamento.
    *   `--color-dark` / `--color-primary` (`#1A1A1A`): Preto puro e profundo para tipografia de alto contraste, botões e elementos estruturais.
    *   `--color-secondary` / `--color-gray` (`#8C867E`): Cinza minimalista para descrições secundárias e elementos de apoio.
    *   `--color-earth-light` (`#E5DFD3`): Tom terroso sutil para divisores, linhas de grade e bordas finas.
*   **Tipografia**: Uso da fonte **Poppins** (Google Fonts) com pesos contrastantes, alternando entre títulos marcantes em negrito e subtítulos e textos de manifesto leves e espaçados.
*   **Design de Componentes**: Formas retas com cantos minimamente arredondados (`border-radius: 4px`), bordas sutis no lugar de sombras pesadas e transições de hover suaves (`cubic-bezier`).

---

## ✨ Funcionalidades Principais

*   **Curadoria Exclusiva**: Catálogo expandido de 7 modelos de silhuetas selecionadas de grandes marcas (Nike, Adidas e Puma).
*   **Seção de Manifesto**: Substituição do clássico "Quem Somos" institucional por um manifesto narrativo que explica a nova filosofia e o propósito urbano da marca.
*   **Gatilhos Mentais Sofisticados**: Benefícios reescritos sem clichês de pressa (*"Corra e Aproveite"*) ou promoções apelativas. Foco em *Entrega com cuidado*, *Flexibilidade sob medida* e *Autenticidade Certificada*.
*   **Carrinho Interativo de Compras**:
    *   Painel lateral dinâmico deslizante.
    *   Cálculo automático de total cumulativo.
    *   Novo Toast de Notificação animado no canto inferior, estilizado no tema escuro da marca.
*   **Páginas Dedicadas de Produto**: Layout em duas colunas responsivo, contendo especificações técnicas completas, controle de quantidade e botão de favoritos.

---

## 📁 Arquitetura de Pastas e Código

O projeto foi reestruturado para seguir padrões profissionais de engenharia front-end, aplicando a **separação de responsabilidades (HTML para estrutura, CSS para estilo e JS para comportamento)**:

```
Site-Tenis-Senai-Outlet/
├── index.html                       ← Ponto de entrada (HTML semântico e SEO otimizado)
├── assets/                          ← Diretório de recursos estáticos
│   ├── css/
│   │   ├── style.css                ← Estilos globais (Base, Navbar, Banner, Rodapé)
│   │   └── produto.css              ← Estilos específicos compartilhados pelas páginas de produto
│   ├── js/
│   │   └── carrinho.js              ← Lógica do carrinho de compras e animação de toasts
│   └── img/
│       ├── produtos/                ← Imagens dos tênis nomeadas em kebab-case
│       │   ├── nike-air.jpg
│       │   ├── adidas-ultra.jpg
│       │   ├── puma-sport.jpg
│       │   ├── nike-air-max-alpha.png
│       │   ├── adidas-grand-court.webp
│       │   ├── adidas-duramo-sl.jpg
│       │   └── nike-revolution-7.jpg
│       ├── banner.png               
│       ├── logo.png                 
│       └── favicon.png              ← Favicon minimalista com fundo preto
├── pages/                           ← Páginas de detalhe dos produtos
│   ├── nike-air.html
│   ├── adidas-ultra.html
│   ├── puma-sport.html
│   ├── nike-air-max-alpha.html
│   ├── adidas-grand-court.html
│   ├── adidas-duramo-sl.html
│   └── nike-revolution-7.html
├── .gitignore                       ← Configuração do Git
└── README.md                        ← Documentação técnica do projeto
```

---

## 🚀 Como Executar Localmente

Como a aplicação é estruturada em tecnologias nativas da web (Vanilla HTML5, CSS3 e JS), não há necessidade de etapas complexas de compilação ou empacotamento:

1. Clone o repositório em sua máquina:
   ```bash
   git clone https://github.com/seu-usuario/Site-Tenis-Senai-Outlet.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Site-Tenis-Senai-Outlet
   ```
3. Abra o arquivo `index.html` em qualquer navegador moderno para interagir com o site.

---

## 👥 Autores do Projeto

Desenvolvido de forma colaborativa pelos acadêmicos da turma de Análise e Desenvolvimento de Sistemas do SENAI:

*   **Gabriel**
*   **Jonathan**
*   **Kauê**
*   **Miguel**

---

## 💻 Acessar site pelo Github Pages
https://miguuellaube.github.io/Site-Tenis-Senai-Outlet/

---

## 📄 Termos e Licença

Este projeto é de caráter puramente educacional e acadêmico. Todos os direitos de imagem e marcas pertencem aos seus respectivos detentores (Nike, Adidas e Puma).

© 2026 Outlet Senai. Todos os direitos reservados.
