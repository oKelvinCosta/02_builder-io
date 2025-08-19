# Builder.io Static Site

Este projeto utiliza o Builder.io como CMS headless para gerenciar o conteúdo do site, combinado com React, TypeScript e Vite para criar uma experiência de desenvolvimento moderna e eficiente.

## 🚀 Visão Geral

O Builder.io é uma plataforma de composição visual que permite criar e gerenciar páginas e componentes de forma visual, enquanto o código React é gerado automaticamente. Este projeto foi configurado para trabalhar em modo estático, permitindo deploy em qualquer serviço de hospedagem estática.

## 🛠️ Configuração do Ambiente

### Pré-requisitos

- Node.js 16+ e npm/yarn
- Conta no [Builder.io](https://www.builder.io/)
- Chave de API do Builder.io

### Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```
3. Crie um arquivo `.env` na raiz do projeto com suas credenciais:
   ```
   VITE_PUBLIC_BUILDER_API_KEY=sua_chave_api_aqui
   ```

## 🚦 Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O servidor estará disponível em `http://localhost:5173`

## 🏗️ Criando Páginas no Builder.io

1. Acesse o [Painel do Builder.io](https://builder.io/)
2. Crie um novo modelo de página ou utilize um existente
3. Use o editor visual para criar e estilizar suas páginas
4. Salve as alterações
5. As páginas serão automaticamente sincronizadas com seu ambiente de desenvolvimento

## 🏗️ Build para Produção

Para gerar a versão estática do site:

```bash
npm run build
# ou
yarn build
```

O comando irá:

1. Fazer build da aplicação React
2. Gerar versões estáticas de todas as páginas
3. Otimizar os assets para produção

Os arquivos finais serão gerados na pasta `dist/` prontos para deploy.

## 🌐 Deploy Estático

O projeto foi configurado para funcionar de forma totalmente estática, permitindo deploy em serviços como:

- Vercel
- Netlify
- GitHub Pages
- Qualquer hospedagem estática

### Configuração de Deploy

O processo de build gera arquivos estáticos que podem ser servidos por qualquer servidor web. As rotas são gerenciadas pelo cliente usando React Router, com fallback para `index.html` para suporte a rotas do lado do cliente.

## 🔄 Sincronização Offline

O projeto inclui uma configuração personalizada que:

1. Faz cache das páginas do Builder.io durante o build
2. Permite acesso offline ao conteúdo

## 📂 Estrutura do Projeto

```
src/
├── components/     # Componentes React reutilizáveis
├── pages/         # Componentes de página
├── lib/           # Utilitários e configurações
└── builder/       # Componentes e configurações do Builder.io
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## ✉️ Contato

Kelvin - [kelvin.castro@fiemg.com.br](mailto:kelvin.castro@fiemg.com.br) / [okelvincosta@gmail.com](mailto:okelvincosta@gmail.com)
