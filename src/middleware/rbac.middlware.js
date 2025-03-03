module.exports = function requirePermission(required) {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      // Assume req.user.roles and req.user.permissions exist
      const { roles = [], permissions = [] } = req.user
      if (roles.includes(required) || permissions.includes(required)) {
        return next()
      }
      return res
        .status(403)
        .json({ message: 'Forbidden: insufficient permissions' })
    } catch (error) {
      next(error)
    }
  }
}
