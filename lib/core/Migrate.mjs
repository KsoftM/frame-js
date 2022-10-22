export class Migrate {
  /**
   * create the table
   * @param {Knex} knex
   */
  static up(knex) {
    throw new Error(`${this.constructor.name} must implement abstract member`);
  }

  /**
   * delete the table from database
   * @param {Knex} knex
   */
  static down(knex) {
    throw new Error(`${this.constructor.name} must implement abstract member`);
  }
}
