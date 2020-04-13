
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.uuid('id').primary(),
        table.string('username'),
        table.string('pass_hash'),
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
