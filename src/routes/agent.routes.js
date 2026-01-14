const express = require('express');
const router = express.Router();
const agentController = require('../controller/agent.controller');

/* Agent routes */
router.post('/', agentController.createAgent);
router.get('/', agentController.getAllAgents);

/* Assignment routes */
router.post('/assign', agentController.assignPolicy);
router.get('/assignments', agentController.getAssignments);

module.exports = router;
