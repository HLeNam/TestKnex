/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.raw(`
        CREATE TABLE IF NOT EXISTS public.book(
        imageurl character varying(255) COLLATE pg_catalog."default",
        title character varying(255) COLLATE pg_catalog."default",
        publisher character varying(255) COLLATE pg_catalog."default",
        author character varying(255) COLLATE pg_catalog."default",
        isbn character varying(13) COLLATE pg_catalog."default",
        year integer,
        selling_price numeric(10,2),
        purchase_price numeric(10,2),
        genre character varying(50) COLLATE pg_catalog."default",
        quantity integer,
        index integer NOT NULL,
        CONSTRAINT book_pkey PRIMARY KEY (index)
    )
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
