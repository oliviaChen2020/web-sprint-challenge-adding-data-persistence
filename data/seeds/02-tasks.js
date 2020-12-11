exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      description: 'Paint the Fence',
      notes: 'white color paint',
      completed: false,
      project_id: 1,
    },
    {
      description: 'Install new ketchen cabinets',
      notes: 'shop for Cherry wood cabinets at Home Depot ',
      completed: false,
      project_id: 2,
    },
    {
      description: 'Install underground utilities',
      notes: 'buy parts from Home Depot',
      completed: false,
      project_id: 3,
    },
  ]);
};
