exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

// o método DOWN ele entra em ação quando ocorre algum problema na criação da tabela. O que deve acontecer: deletar a tabela e voltar atrás.
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};