exports.seed = function (knex) {
  // Inserts seed entries
  return knex('projects').insert([
    {
      name: 'Exterior Renovation',
      description: 'make it look nicer',
      completed: false,
    },
    {
      name: 'Interior Renovation',
      description: 'live in a btter house',
      completed: false,
    },
    {
      name: 'Basement Revonation',
      description: 'redesign the basement',
      completed: false,
    },
  ]);
};
