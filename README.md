# Doctor API

Uma API REST desenvolvida em TypeScript para gerenciar registros de médicos, permitindo o cadastro e consulta de CRM e email.

## 🚀 Tecnologias

- TypeScript
- Node.js
- Express
- Jest (Testes)
- Clean Architecture
- SOLID Principles

## ✨ Características

- Validação de email
- Verificação de duplicidade de email
- 100% de cobertura de testes
- Arquitetura limpa e princípios SOLID
- Documentação clara e objetiva

## 📋 Pré-requisitos

- Node.js >= 16.0.0
- npm (Node Package Manager)

## 🛠️ Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/doctor-api.git
cd doctor-api
```

2. Instale as dependências
```bash
npm install
```

## 💻 Uso

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm run prod
```

### Testes
```bash
# Executar testes
npm test

# Verificar cobertura de testes
npm run test:coverage
```

## 🔗 Endpoints

### POST /doctors
Cadastra um novo médico.

#### Request
```json
{
  "numCRM": "12345",
  "email": "medico@exemplo.com"
}
```

#### Response
- 201 Created: Médico cadastrado com sucesso
- 400 Bad Request: Email inválido ou já cadastrado

### GET /doctors
Lista todos os médicos cadastrados.

#### Response
```json
[
  {
    "numCRM": "12345",
    "email": "medico@exemplo.com"
  }
]
```

## 🏗️ Arquitetura

O projeto segue os princípios da Clean Architecture:

```
src/
  ├── domain/          # Regras de negócio e entidades
  ├── application/     # Casos de uso da aplicação
  ├── infra/          # Implementações de infraestrutura
  └── presentation/    # Controllers e adaptadores de API
```

## ✅ Princípios SOLID Aplicados

- **S** - Single Responsibility Principle
  - Cada classe tem uma única responsabilidade
- **O** - Open/Closed Principle
  - Extensível para novos comportamentos sem modificar o código existente
- **L** - Liskov Substitution Principle
  - Implementações podem ser substituídas sem afetar o sistema
- **I** - Interface Segregation Principle
  - Interfaces específicas para cada necessidade
- **D** - Dependency Inversion Principle
  - Dependência de abstrações, não implementações

## 🧪 Testes

O projeto mantém 100% de cobertura de testes, incluindo:
- Testes unitários
- Testes de integração
- Validações de regras de negócio

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Seu Nome
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Nome](https://linkedin.com/in/seu-usuario)

## 🤝 Contribuindo

Contribuições são sempre bem-vindas!

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request