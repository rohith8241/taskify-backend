# taskify-backend

## Important Note
1. Please ensure to update the database credentials in the knexfile.js located in the src/services/knexfile.js and db/knexfile.js     directories before running the application.

2. DB used postgresSql: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

3. Postman collection: https://www.postman.com/spaceflight-geoscientist-24424966/workspace/my-workspace/collection/40888071-974440ec-59f3-4210-abc6-037749c8a33b?action=share&creator=40888071


## Run migrations in db directory to create tables in database

npx knex migrate:latest --knexfile knexfile.js


## Run the application
```
npm install

nodemon or node index.js

