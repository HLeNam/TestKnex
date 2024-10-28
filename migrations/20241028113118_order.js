exports.up = async function (knex) {
    await knex.raw(`
        CREATE TABLE IF NOT EXISTS public.order (
        id SERIAL PRIMARY KEY NOT NULL,
        customer character varying(100) COLLATE pg_catalog."default" NOT NULL,
        date timestamp without time zone NOT NULL,
        is_delivered BOOLEAN NOT NULL DEFAULT FALSE
    ) TABLESPACE pg_default;
    `);
};

exports.down = async function (knex) {
    await knex.raw(`
        DROP TABLE IF EXISTS public.order
    `);
};
