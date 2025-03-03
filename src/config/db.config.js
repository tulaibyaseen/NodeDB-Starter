require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  pool: {
    max: Number(process.env.DB_POOL_MAX) || 10,
    min: Number(process.env.DB_POOL_MIN) || 0,
    acquire: Number(process.env.DB_POOL_ACQUIRE) || 30000,
    idle: Number(process.env.DB_POOL_IDLE) || 10000,
  },
})

module.exports = sequelize
