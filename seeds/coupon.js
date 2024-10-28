/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("coupon").del();
    await knex("coupon").insert([
        { id: 1, name: "SAVE 10%", discount: 0.1, expiry_date: "2024-12-31 23:59:59" },
        { id: 2, name: "SAVE 20%", discount: 0.2, expiry_date: "2024-06-30 23:59:59" },
        { id: 3, name: "SAVE 30%", discount: 0.3, expiry_date: "2025-01-01 23:59:59" },
    ]);
};
