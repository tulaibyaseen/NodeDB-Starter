'use strict'

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt')
module.exports = {
  up: async (queryInterface) => {
    const passwordHash = bcrypt.hashSync('password123', 10)
    const now = new Date()

    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: '00000000-0000-0000-0000-000000000001',
          name: 'Candidate User',
          email: 'candidate@mail.com',
          passwordHash,
          isVerified: true,
          createdAt: now,
          updatedAt: now,
        },
        {
          id: '00000000-0000-0000-0000-000000000002',
          name: 'RPU User',
          email: 'rpu@mail.com',
          passwordHash,
          isVerified: true,
          createdAt: now,
          updatedAt: now,
        },
        {
          id: '00000000-0000-0000-0000-000000000003',
          name: 'Recruiter User',
          email: 'recruiter@mail.com',
          passwordHash,
          isVerified: true,
          createdAt: now,
          updatedAt: now,
        },
        {
          id: '00000000-0000-0000-0000-000000000004',
          name: 'Admin User',
          email: 'admin@mail.com',
          passwordHash,
          isVerified: true,
          createdAt: now,
          updatedAt: now,
        },
        {
          id: '00000000-0000-0000-0000-000000000005',
          name: 'SuperAdmin User',
          email: 'superadmin@mail.com',
          passwordHash,
          isVerified: true,
          createdAt: now,
          updatedAt: now,
        },
      ],
      {}
    )

    // Insert into UserRoles join table.
    // Assumes a join table named 'UserRoles' with columns 'userId' (UUID) and 'roleId' (INTEGER)
    await queryInterface.bulkInsert(
      'UserRoles',
      [
        { userId: '00000000-0000-0000-0000-000000000001', roleId: 1 },
        { userId: '00000000-0000-0000-0000-000000000002', roleId: 2 },
        { userId: '00000000-0000-0000-0000-000000000003', roleId: 3 },
        { userId: '00000000-0000-0000-0000-000000000004', roleId: 4 },
        { userId: '00000000-0000-0000-0000-000000000005', roleId: 5 },
      ],
      {}
    )
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('UserRoles', null, {})
    await queryInterface.bulkDelete('Users', null, {})
  },
}
