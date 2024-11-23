import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('executions', (table) => {
        table.uuid('id').primary();
        table.timestamp('timestamp').notNullable();
        table.integer('commands').notNullable();
        table.integer('result').notNullable();
        table.float('duration').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('executions');
}

