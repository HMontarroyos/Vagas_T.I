# Site de Vagas de T.I 

<img width="938" alt="Jobs" src="https://user-images.githubusercontent.com/60220406/103300853-a6816f80-49de-11eb-93b0-21db3c023e67.png">


Projeto que consome as Vagas de T.I de um banco de Dados passados atraves de rotas pelo Metodo POST.

### Tecnologias Utilizadas 

 [DB Browser (SQLite)](https://sqlitebrowser.org/dl/).
 [POSTMAN](https://www.postman.com/).
 [Handlebars](https://handlebarsjs.com/).
 [Bootstrap](https://getbootstrap.com/).


## Como Instalar o Projeto 

```sh
npm install 
```
Após baixar todas as Dependências do Projeto dentro da pasta Raiz, inicie o Servidor com o Comando: 

```sh
 npm run dev
```


### Para Adicionar as Vagas atraves do DB Browser (SQLite)

Abra o DB Browser e em Arquivo escolha  `Abrir banco de Dados` e abra o Arquivo `app.db` dentro da pasta database.

### Para Adicionar as Vagas atraves das rotas Criada no Postman

Abra o Postman e nos metodos escolha `POST` após isso passe a rota `http://localhost:3000/jobs/add`  no body escolha a opção `x-www-form-urlencoded`.

E para cada `key` passe os atributos que são os mesmos de cada propriedade que esta no BD.

title
salary 
company
email
new_job
description

E para cada `value` preencha conforme desejar para adicionar vagas Atraves do metodo POST.



## 🚀 Let's code! 🚀