const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    resetid: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "resetid",
      autoIncrement: false
    },
    userid: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "userid",
      autoIncrement: false,
      references: {
        key: "userid",
        model: "users_model"
      }
    },
    hash: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: "NULL",
      comment: null,
      primaryKey: false,
      field: "hash",
      autoIncrement: false
    },
    usedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "usedat",
      autoIncrement: false
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "createdat",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "user_password_reset",
    comment: "",
    indexes: []
  };
  const UserPasswordResetModel = sequelize.define("user_password_reset_model", attributes, options);
  return UserPasswordResetModel;
};