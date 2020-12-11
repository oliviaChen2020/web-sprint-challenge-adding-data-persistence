exports.seed = function (knex) {
  return knex('resources').insert([
    {
      name: 'Electric contractor',
      description: 'the best electric contractor in town ',
      project_id: 3,
    },
    {
      name: 'Fencing contractor',
      description: 'the best fencing contractor in town',
      project_id: 1,
    },
    {
      name: 'Cabinet Installer',
      description: 'the best cabinet installer in town',
      project_id: 3,
    },
  ]);
};
