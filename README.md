# taskify-backend

## Important Note
1. Please ensure to update the database credentials in the knexfile.js located in the src/services/knexfile.js and db/knexfile.js     directories before running the application.

2. DB used postgresSql: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads


## Run migrations in db directory to create tables in database

npx knex migrate:latest --knexfile knexfile.js


## Run the application
```
npm install

nodemon or node index.js

