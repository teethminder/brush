const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    userid: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "userid",
      autoIncrement: false
    },
    firstname: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "firstname",
      autoIncrement: false
    },
    middlename: {
      type: DataTypes.CHAR(32),
      allowNull: true,
      defaultValue: "NULL",
      comment: null,
      primaryKey: false,
      field: "middlename",
      autoIncrement: false
    },
    surname: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "surname",
      autoIncrement: false
    },
    email: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email",
      autoIncrement: false
    },
    password: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: "NULL",
      comment: null,
      primaryKey: false,
      field: "password",
      autoIncrement: false
    },
    profilepicture: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "profilepicture",
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
    },
    deactivatedat: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "deactivatedat",
      autoIncrement: false
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "updatedat",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "users",
    comment: "",
    indexes: []
  };
  const UsersModel = sequelize.define("users_model", attributes, options);
  return UsersModel;
};