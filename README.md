## Scripts Disponíveis

No diretório deste projeto você pode utilizar os seguintes comandos:

### `yarn install`

Instala as dependências do projeto.

### `yarn server`

Executa um json-server na porta 3333, com delay de 200ms para a resposta e com os endpoints /abaixo10 e /acima10.

É importante rodar este comando para testar a aplicação, já que a mesma faz requisições utilizando essa api.

### (EM CASO DE USO DE NPM, RODAR O SEGUINTE COMANDO PORÉM SOMENTE APÓS O NPM INSTALL)

### npx json-server -p 3333 -d 200 server.json

### `yarn start`

Executa a aplicação em ambiente de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) Para ver a aplicação em seu navegador.
