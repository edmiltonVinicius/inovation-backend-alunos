## Variáveis de ambiente:

**dotenv**

→ Instale o pacote: `npm i dotenv`

→ Crie um arquivo **.env** na raiz do projeto.

→ Abra o arquivo .env e crie um variável de ambiente que recebrá os dados da conexão com o mongodb:
`MONGO_DB_URL=.....`

→ Importe o pacote instalado no arquivo principal:
`import "dotenv/config";`

→ Adicionar o arquivo **.env** no **.gitignore** para não ser enviado para o repositório.

→ Agora para acessar a variável de ambiente criada, utilize o objeto **_process.env_** do node, como a criamos a variábel com nome de **_MONGO_DB_URL_** para acessar, digite: `process.env.MONGO_DB_URL`
