// build your server here
const express = require('express');

const ProjectsRouter = require('./project/router');

const server = express();

server.use(express.json());

server.use('/api/projects', ProjectsRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'the api is running' });
});

module.exports = server;
