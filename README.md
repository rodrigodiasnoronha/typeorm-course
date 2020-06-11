## Description

-   API created in the TypeORM course. This API has all relationship methods, how to configure TypeORM migrations, its Entities and its Repositories.

## Instalation

-   Run:

    ```shell script
    npm install
    ```

-   Run API:

    ```shell script
    npm run dev:serve
    ```

-   API will run on port [localhost:3333](http://localhost:3333)

# Anotações

-   Para salvar algo com relacionamentos, basta um objeto com o id sendo passado. Por exemplo, 1 Usuário pode ter várias Imagens, logo, para salvar um usuário junto com uma imagem, basta salvar a imagem primeiro no banco e depois, referenciar o ID dela na hora de salvar no TYPEORM

-   Usando o método `find({ relations: [] })`:

    -   Você precisa especificar Array `relations` o nome do campo de relacionamento que está na Entity

-   Para atualizar as `migrations`, rode: `typeorm migration:generate`. Ele criará suas migrations de acordo com suas entidades
