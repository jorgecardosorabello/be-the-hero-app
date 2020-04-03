exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    // esse é um relacionamento pra ser usado como chave primária
    table.string('ong_id').notNullable();

    // esse só permite que um "caso" seja criado, se o ID for de uma ONG
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};