const express = require('express');
const router = express.Router();
const {
  createAgent,
  getAgents,
  getAgentById
} = require('../controller/agent.controller');

router.post('/', createAgent);
router.get('/', getAgents);
router.get('/:id', getAgentById);

module.exports = router;
