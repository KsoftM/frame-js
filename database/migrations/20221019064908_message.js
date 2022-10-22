/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("message", function (table) {
    table.increments("MessageId").primary();
    table
      .integer("UserId")
      .notNullable()
      .unsigned()
      .references("UserId")
      .inTable("users");
    table.text("message").notNullable();
    table.boolean("isActive").defaultTo(false);
    table
      .timestamp("createAt")
      .nullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table
      .timestamp("updateAt")
      .nullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    table.timestamp("deletedAt").nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("message");
};
