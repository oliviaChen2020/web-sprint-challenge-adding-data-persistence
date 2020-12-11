exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      task_description: 'Paint the Fence',
      notes: 'white color paint',
      task_completed: 0,
      project_id: 1,
    },
    {
      task_description: 'Install new ketchen cabinets',
      notes: 'shop for Cherry wood cabinets at Home Depot ',
      task_completed: 0,
      project_id: 2,
    },
    {
      task_description: 'Install underground utilities',
      notes: 'buy parts from Home Depot',
      task_completed: 0,
      project_id: 3,
    },
  ]);
};
