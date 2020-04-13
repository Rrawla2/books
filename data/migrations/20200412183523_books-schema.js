
exports.up = function(knex) {
// id - primary key, increment
// title - book title, string -text
// author - author name, string - text
// description - string - text
// price - decimal
return knex.schema.createTable('books', table => {
    table.increments();
    table.string('title').unique().notNullable();
    table.string('author').notNullable();
    table.string('description').notNullable();
    table.decimal('price').notNullable()
})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books')
};
