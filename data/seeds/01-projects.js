exports.seed = function (knex) {
  // Inserts seed entries
  return knex('projects').insert([
    {
      name: 'Exterior Renovation',
      description: 'make it look nicer',
      completed: 0,
    },
    {
      name: 'Interior Renovation',
      description: 'live in a btter house',
      completed: 0,
    },
    {
      name: 'Basement Revonation',
      description: 'redesign the basement',
      completed: 0,
    },
  ]);
};
