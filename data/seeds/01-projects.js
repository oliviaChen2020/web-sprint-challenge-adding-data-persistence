exports.seed = function (knex) {
  // Inserts seed entries
  return knex('projects').insert([
    {
      project_name: 'Exterior Renovation',
      project_description: 'make it look nicer',
      project_completed: 0,
    },
    {
      project_name: 'Interior Renovation',
      project_description: 'live in a btter house',
      project_completed: 0,
    },
    {
      project_name: 'Basement Revonation',
      project_description: 'redesign the basement',
      project_completed: 0,
    },
  ]);
};
