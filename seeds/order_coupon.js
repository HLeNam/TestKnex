/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("order_coupon").del();
    await knex("order_coupon").insert([
        { order_id: 1, coupon_id: 1 },
        { order_id: 2, coupon_id: 2 },
        { order_id: 3, coupon_id: 3 },
        { order_id: 4, coupon_id: 1 },
        { order_id: 5, coupon_id: 2 },
        { order_id: 6, coupon_id: 3 },
        { order_id: 7, coupon_id: 1 },
        { order_id: 8, coupon_id: 2 },
        { order_id: 9, coupon_id: 3 },
        { order_id: 10, coupon_id: 1 },
    ]);
};
