exports.seed = function (knex) {
  return knex('resources').insert([
    {
      resource_name: 'Electric contractor',
      resource_description: 'the best electric contractor in town ',
      project_id: 3,
    },
    {
      resource_name: 'Fencing contractor',
      resource_description: 'the best fencing contractor in town',
      project_id: 1,
    },
    {
      resource_name: 'Cabinet Installer',
      resource_description: 'the best cabinet installer in town',
      project_id: 3,
    },
  ]);
};
