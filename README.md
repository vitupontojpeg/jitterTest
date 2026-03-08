📝 Documentação da API (Orders API)

📥 Como instalar as dependências

1. Execute o comando de instalação

O comando abaixo lê o arquivo package.json e baixa automaticamente todas as dependências listadas na seção dependencie.
Bash

npm install

⚙️ Configuração do Banco de Dados

Para que a API funcione, você deve configurar a String de Conexão fornecida pelo MongoDB Atlas.
1. Obtendo a String de Acesso

    Acesse o painel do MongoDB Atlas.

    No seu Cluster (Tier Free), clique em Connect.

    Escolha Drivers e selecione Node.js.

    Copie a URL que se parece com isto:
    mongodb+srv://<usuario>:<senha>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority

2. Configurando no Código

Recomenda-se o uso de um arquivo .env para segurança, mas a conexão básica no arquivo app.js deve seguir este modelo:
JavaScript

// Exemplo de String de Acesso (substitua pelos seus dados)
const MONGO_URI = "mongodb+srv://seu_usuario:sua_senha@cluster0.xxxxx.mongodb.net/JitterBitTest?retryWrites=true&w=majority";


Esta API permite o gerenciamento completo de pedidos integrados ao MongoDB.
🚀 Base URL

http://127.0.0.0:3000/

📌 Endpoints
1. Listar Todos os Pedidos

Retorna um array com todos os pedidos cadastrados no banco de dados.

    URL: /order/list

    Método: GET


2. Buscar um Pedido Específico

Busca os detalhes de um único pedido através do seu ID único do MongoDB.

    URL: /order/:id

    Método: GET

    Parâmetros de URL: id=[string] (ID gerado pelo MongoDB)


3. Criar Novo Pedido

Registra um novo pedido no sistema.

    URL: /order

    Método: POST

    Corpo da Requisição (JSON):
    JSON

    {
      "orderId": 105,
      "value": 2,
      "items": [productId, quantity, price]
    }


4. Atualizar Pedido

Atualiza os dados de um pedido existente e retorna a versão já atualizada.

    URL: /order/:id

    Método: PUT

    Parâmetros de URL: id=[string]

5. Deletar Pedido

Remove um pedido do banco de dados e retorna os dados do objeto que foi excluído.

    URL: /order/:id

    Método: DELETE

    Parâmetros de URL: id=[string]


