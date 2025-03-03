'use strict'

/** @type {import('sequelize-cli').Migration} */
'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Roles',
      [
        { id: 1, name: 'Candidate' },
        { id: 2, name: 'RPU' },
        { id: 3, name: 'Recruiter' },
        { id: 4, name: 'Admin' },
        { id: 5, name: 'SuperAdmin' },
      ],
      {}
    )
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Roles', null, {})
  },
}
