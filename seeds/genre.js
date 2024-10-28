/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("genre").del();
    await knex("genre").insert([
        {
            id: 1,
            name: "Science Fiction",
            description:
                "A genre of speculative fiction that typically deals with imaginative and futuristic concepts.",
        },
        {
            id: 2,
            name: "Fantasy",
            description:
                "A genre of speculative fiction set in a fictional universe, often inspired by real world myth and folklore.",
        },
        {
            id: 3,
            name: "Mystery",
            description:
                "A genre of fiction that deals with the solution of a crime or the unraveling of secrets.",
        },
        {
            id: 4,
            name: "Romance",
            description:
                "A genre of fiction that places its primary focus on the relationship and romantic love between two people.",
        },
        {
            id: 5,
            name: "Horror",
            description:
                "A genre of fiction intended to, or has the capacity to frighten, scare, or disgust.",
        },
        {
            id: 6,
            name: "Thriller",
            description:
                "A genre of fiction that uses suspense, tension, and excitement as the main elements.",
        },
        {
            id: 7,
            name: "Non-Fiction",
            description:
                "A genre of writing that is based on facts, real events, and real people, such as biography or history.",
        },
        {
            id: 8,
            name: "Dystopian",
            description:
                "A genre of fiction that explores social and political structures in a dark, nightmare world.",
        },
        {
            id: 9,
            name: "Allegory",
            description:
                "A genre of fiction that uses symbolic figures, actions, imagery, and/or events to convey a message or teach a moral lesson.",
        },
        {
            id: 10,
            name: "Classic",
            description: "A genre of fiction that is regarded as having lasting literary merit.",
        },
        {
            id: 11,
            name: "Fiction",
            description:
                "A genre of literature that is based on imagination and not necessarily on fact.",
        },
        {
            id: 12,
            name: "Coming-of-age",
            description:
                "A genre of literature that focuses on the growth of a protagonist from youth to adulthood.",
        },
        {
            id: 13,
            name: "Children's",
            description: "A genre of literature that is written for children.",
        },
        {
            id: 14,
            name: "Young Adult",
            description: "A genre of literature that is written for young adults.",
        },
    ]);
};
