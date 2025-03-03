const User = require('./user.model')

exports.getUserById = async (id) => {
  return await User.findByPk(id)
}

exports.updateUser = async (id, updateData) => {
  const user = await User.findByPk(id)
  if (!user) throw new Error('User not found')
  return await user.update(updateData)
}
