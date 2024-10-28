exports.up = async function (knex) {
    await knex.raw(`
        CREATE TABLE IF NOT EXISTS public.order_coupon (
    order_id INT REFERENCES "order"(id) ON DELETE CASCADE,
    coupon_id INT REFERENCES coupon(id) ON DELETE CASCADE,
    PRIMARY KEY (order_id, coupon_id)
) TABLESPACE pg_default;

    `);
};

exports.down = async function (knex) {
    await knex.raw(`
        DROP TABLE IF EXISTS public.order_coupon
    `);
};
