exports.up = async function (knex) {
    await knex.raw(`
        CREATE TABLE IF NOT EXISTS public.genre (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL COLLATE pg_catalog."default",
        description TEXT
    ) TABLESPACE pg_default;
    `);
};

exports.down = async function (knex) {
    await knex.raw(`
        DROP TABLE IF EXISTS public.genre
    `);
};
