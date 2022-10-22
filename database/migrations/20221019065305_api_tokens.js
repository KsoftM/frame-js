/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("api_tokens", function (table) {
    table.increments("TokenId").primary();
    table
      .integer("UserId")
      .notNullable()
      .unsigned()
      .references("UserId")
      .inTable("users");
    table.text("accessToken").notNullable();
    table.text("refreshToken").notNullable();
    table.boolean("isActive").defaultTo(false);
    table
      .timestamp("createAt")
      .nullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table
      .timestamp("updateAt")
      .nullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("api_tokens");
};
