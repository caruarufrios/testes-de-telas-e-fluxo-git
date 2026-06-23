# Git Flow do Projeto

Este documento descreve o fluxo básico de trabalho com Git utilizado neste projeto.

## Branches principais

### `main`

Branch principal do projeto.

Ela deve conter apenas código estável e pronto para produção.

Regras:

* Não trabalhar diretamente nessa branch.
* Recebe merge apenas de versões finalizadas.
* Deve sempre representar uma versão segura do sistema.

---

### `develop`

Branch principal de desenvolvimento.

Todas as novas funcionalidades, correções e melhorias devem partir dessa branch.

Regras:

* Serve como base para o desenvolvimento diário.
* Recebe merge de branches de feature, bugfix e hotfix quando necessário.
* Deve conter código testado antes de ser integrado à `main`.

---

## Tipos de branches

### `feature/*`

Usada para desenvolver uma nova funcionalidade.

Padrão de nome:

```bash
feature/nome-da-funcionalidade
```

Exemplo:

```bash
feature/cadastro-clientes
```

Fluxo:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/cadastro-clientes
```

Ao finalizar:

```bash
git checkout develop
git pull origin develop
git merge feature/cadastro-clientes
git push origin develop
```

---

### `bugfix/*`

Usada para corrigir problemas encontrados durante o desenvolvimento.

Padrão de nome:

```bash
bugfix/descricao-do-problema
```

Exemplo:

```bash
bugfix/corrigir-validacao-cliente
```

Fluxo:

```bash
git checkout develop
git pull origin develop
git checkout -b bugfix/corrigir-validacao-cliente
```

Ao finalizar, fazer merge na `develop`.

---

### `release/*`

Usada para preparar uma nova versão antes de enviar para produção.

Padrão de nome:

```bash
release/versao
```

Exemplo:

```bash
release/1.0.0
```

Fluxo:

```bash
git checkout develop
git pull origin develop
git checkout -b release/1.0.0
```

Nessa branch podem ser feitos apenas ajustes finais, correções pequenas, revisão de versão e documentação.

Ao finalizar:

```bash
git checkout main
git pull origin main
git merge release/1.0.0
git tag -a v1.0.0 -m "Versão 1.0.0"
git push origin main --tags
```

Depois, atualizar a `develop`:

```bash
git checkout develop
git merge release/1.0.0
git push origin develop
```

---

### `hotfix/*`

Usada para corrigir problemas urgentes em produção.

A branch deve ser criada a partir da `main`.

Padrão de nome:

```bash
hotfix/descricao-do-problema
```

Exemplo:

```bash
hotfix/corrigir-erro-login
```

Fluxo:

```bash
git checkout main
git pull origin main
git checkout -b hotfix/corrigir-erro-login
```

Ao finalizar:

```bash
git checkout main
git merge hotfix/corrigir-erro-login
git tag -a v1.0.1 -m "Hotfix 1.0.1"
git push origin main --tags
```

Depois, aplicar a correção também na `develop`:

```bash
git checkout develop
git pull origin develop
git merge hotfix/corrigir-erro-login
git push origin develop
```

---

## Resumo do fluxo

```text
main
  ↑
release/*
  ↑
develop
  ↑
feature/*
bugfix/*
```

Para correções urgentes:

```text
main
  ↑
hotfix/*
  ↓
develop
```

---

## Convenção de commits

Usar mensagens claras e objetivas.

Exemplos:

```bash
git commit -m "feat: adicionar cadastro de clientes"
git commit -m "fix: corrigir validação de CPF"
git commit -m "docs: atualizar README do projeto"
git commit -m "refactor: reorganizar serviço de vendas"
```

Tipos comuns:

* `feat`: nova funcionalidade
* `fix`: correção de bug
* `docs`: documentação
* `style`: ajustes de formatação
* `refactor`: refatoração de código
* `test`: criação ou ajuste de testes
* `chore`: tarefas internas do projeto

---

## Boas práticas

* Sempre criar branches a partir da branch correta.
* Nunca fazer commit direto na `main`.
* Atualizar a branch local antes de começar o trabalho.
* Fazer commits pequenos e com mensagens claras.
* Antes de abrir merge/pull request, testar a alteração.
* Após finalizar uma branch, removê-la se não for mais necessária.

---

## Comandos úteis

Atualizar branch atual:

```bash
git pull origin nome-da-branch
```

Criar nova branch:

```bash
git checkout -b nome-da-branch
```

Enviar branch para o repositório remoto:

```bash
git push origin nome-da-branch
```

Trocar de branch:

```bash
git checkout nome-da-branch
```

Listar branches:

```bash
git branch
```

Excluir branch local:

```bash
git branch -d nome-da-branch
```

Excluir branch remota:

```bash
git push origin --delete nome-da-branch
```

---

## Exemplo prático

Criando uma nova funcionalidade:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/cadastro-produtos
```

Depois de desenvolver:

```bash
git add .
git commit -m "feat: adicionar cadastro de produtos"
git push origin feature/cadastro-produtos
```

Após revisão, a branch deve ser mesclada na `develop`.
