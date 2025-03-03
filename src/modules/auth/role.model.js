const { DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

const Role = sequelize.define(
  'Role',
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  { timestamps: false }
)

module.exports = Role
