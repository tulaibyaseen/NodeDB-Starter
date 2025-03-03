const jwt = require('jsonwebtoken')
const User = require('../modules/user/user.model')
const Role = require('../modules/auth/role.model')

module.exports = async function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization']
  if (!authHeader)
    return res.status(401).json({ message: 'Missing authorization header' })
  const token = authHeader.split(' ')[1]
  if (!token) return res.status(401).json({ message: 'Token not provided' })

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' })
    // Load user with associated roles
    const user = await User.findByPk(decoded.id, { include: Role })
    if (!user) return res.status(404).json({ message: 'User not found' })
    req.user = {
      id: user.id,
      email: user.email,
      roles: user.Roles.map((role) => role.name),
    }
    next()
  })
}
