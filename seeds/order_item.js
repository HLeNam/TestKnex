/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("order_item").del();
    await knex("order_item").insert([
        { order_id: 1, book_id: 1, quantity: 1 },
        { order_id: 2, book_id: 2, quantity: 2 },
        { order_id: 3, book_id: 3, quantity: 3 },
        { order_id: 4, book_id: 4, quantity: 4 },
        { order_id: 5, book_id: 5, quantity: 5 },
        { order_id: 6, book_id: 6, quantity: 6 },
        { order_id: 7, book_id: 7, quantity: 7 },
        { order_id: 8, book_id: 8, quantity: 8 },
        { order_id: 9, book_id: 9, quantity: 9 },
        { order_id: 10, book_id: 10, quantity: 10 },
    ]);
};
