import BaseModel from "../../lib/core/BaseModel.mjs";
import { Sequelize, DataTypes } from "sequelize";

class ApiTokenModel extends BaseModel {
  static init(sequelize) {
    super.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        // firstName: { type: DataTypes.STRING },
        // lastName: { type: DataTypes.STRING },
        // username: { type: DataTypes.STRING },
        // email: { type: DataTypes.STRING },
        // active: { type: DataTypes.BOOLEAN },
        // password: { type: DataTypes.STRING },
      },
      {
        sequelize: sequelize,
        tableName: "api_token",
        // createdAt: "created_at",
        // updatedAt: "updated_at",
        deletedAt: "active",
        timestamps: true,
      }
    );

    return this;
  }
}

export default ApiTokenModel;
