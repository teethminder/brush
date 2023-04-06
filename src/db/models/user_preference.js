const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    preferenceid: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "preferenceid",
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
    morningbrushat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "morningbrushat",
      autoIncrement: false
    },
    nightbrushat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nightbrushat",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "user_preference",
    comment: "",
    indexes: []
  };
  const UserPreferenceModel = sequelize.define("user_preference_model", attributes, options);
  return UserPreferenceModel;
};