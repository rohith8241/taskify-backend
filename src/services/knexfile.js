const Knex = require('knex');
const { Model } = require('objection');

module.exports = () => {

  const conn = {
    client: 'postgresql',
        connection: {
            host: 'localhost',
            user: 'postgres', // set user DB user
            password: 'root', //set your DB password
            database: 'Test' //mention the DB name to be used
        },
    pool: {
      min: 2,
      max: 10
    }
  };
  const knex = Knex(conn);
  Model.knex(knex);
  return true;
};


