/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = async function (knex) {
    await knex.raw(`
        CREATE TABLE IF NOT EXISTS public.coupon (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        discount NUMERIC(5, 2) NOT NULL,
        expiry_date TIMESTAMP WITHOUT TIME ZONE NOT NULL
    );  
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.raw(`
        DROP TABLE IF EXISTS public.coupon
    `);
};
