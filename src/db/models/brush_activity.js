const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    activityid: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "activityid",
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
    tableName: "brush_activity",
    comment: "",
    indexes: []
  };
  const BrushActivityModel = sequelize.define("brush_activity_model", attributes, options);
  return BrushActivityModel;
};