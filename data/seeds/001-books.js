
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: "Ender's Game", author: "Orson Scott Card", description: "Boy defeats aliens", price: 5.99},
        {title: "Zero to One", author: "Peter Thiel", description: "Startup advice", price: 8.99},
        {title: "The Book Thief", author: "Markus Zusak", description: "It's 1939 Nazi Germany, the country is holding it's breath. Death Has never been busier, and it will become busier still.", price: 12.99}
      ]);
    });
};
