/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("order").del();
    await knex("order").insert([
        { id: 1, customer: "Alice Johnson", date: "2024-10-01 12:00:00" },
        { id: 2, customer: "Bob Smith", date: "2024-10-02 13:30:00" },
        { id: 3, customer: "Charlie Brown", date: "2024-10-03 14:45:00" },
        { id: 4, customer: "Diana Prince", date: "2024-10-04 09:15:00" },
        { id: 5, customer: "Edward Elric", date: "2024-10-05 16:20:00" },
        { id: 6, customer: "Fiona Gallagher", date: "2024-10-06 08:10:00" },
        { id: 7, customer: "George Washington", date: "2024-10-07 10:00:00" },
        { id: 8, customer: "Hannah Montana", date: "2024-10-08 11:30:00" },
        { id: 9, customer: "Ian Malcolm", date: "2024-10-09 15:00:00" },
        { id: 10, customer: "Julia Child", date: "2024-10-10 17:30:00" },
    ]);
};
