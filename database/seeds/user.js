/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      UserId: 1,
      firstName: "sam",
      lastName: "roy",
      username: "sam_roy",
      email: "sam@app.com",
      password: "sam",
    },
    {
      UserId: 2,
      firstName: "david",
      lastName: "roy",
      username: "david_roy",
      email: "david@app.com",
      password: "david",
    },
    {
      UserId: 3,
      firstName: "Kajalan",
      lastName: "Siva",
      username: "admin",
      email: "admin@app.com",
      password: "password",
    },
  ]);
};
