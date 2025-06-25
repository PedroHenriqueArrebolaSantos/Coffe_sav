# Projeto de E-commerce Simplificado - Cafeteria - Coffe_sav

## Objetivo do Projeto

Este projeto tem como objetivo desenvolver uma aplicação web de e-commerce simplificada, voltada para uma cafeteria virtual. Nele, o usuário pode visualizar os produtos disponíveis, acessar os detalhes dos itens, adicionar ao carrinho e simular uma finalização de pedido.

## Tecnologias Utilizadas

- **React JS** (componentes, props, estado)
- **React Router DOM** (navegação entre páginas)
- **CSS** (estilização)
- **LocalStorage** (armazenamento de dados do carrinho e produtos)
- **JavaScript**

## Funcionalidades

### Área do Cliente

- Página inicial com exibição dos produtos (cafés, bolos e etc.)
- Página de detalhes do produto (imagem, descrição e preço)
- Carrinho de compras:
  - Adicionar produtos
  - Remover produtos
  - Listar produtos adicionados
- Simulação de finalização de pedido (sem sistema de pagamento)

### Área Administrativa

- Cadastro de novos produtos via código (formulário interno ou JSON)
- Edição e exclusão de produtos (via interface ou localStorage manualmente)
- Listagem dos produtos cadastrados

## Armazenamento de Dados

Todos os dados (produtos e carrinho) são armazenados utilizando o `localStorage` do navegador. Assim, ao recarregar a página, os produtos e o carrinho permanecem salvos até serem apagados manualmente ou via função de exclusão.