// this migration will track a users number of rounds and mantras per day

//TODO: somewhere in this app I should be able to take a users current round total
//and add it to the total completed rounds at a scheduled time.


exports.up = function(knex) {
    return knex.schema.createTable('japa', table => {
        table.uuid('id').references('id').inTable('users'),
        table.integer('current_mantra'),
        table.integer('current_round'),
        table.date('user_set_origin_date'),
        table.integer('total_completed_rounds'),
        table.integer('total_projected_rounds'),
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('japa')
};

