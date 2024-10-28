exports.up = async function (knex) {
    await knex.raw(`
        CREATE TABLE IF NOT EXISTS public.order_item (
        id SERIAL PRIMARY KEY,
        order_id INT REFERENCES "order"(id) ON DELETE CASCADE,
        book_id INT REFERENCES book(index) ON DELETE CASCADE,
        quantity INT NOT NULL
    ) TABLESPACE pg_default;
    `);
};

exports.down = async function (knex) {
    await knex.raw(`
        DROP TABLE IF EXISTS public.order_item
    `);
};
