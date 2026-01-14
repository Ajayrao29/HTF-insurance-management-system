const Agent = require('../models/Agent');
const AgentAssignment = require('../models/agentAssignment');

/* Create Agent */
exports.createAgent = async (req, res) => {
  try {
    const agent = new Agent(req.body);
    await agent.save();
    res.status(201).json(agent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* Get All Agents */
exports.getAllAgents = async (req, res) => {
  try {
    const agents = await Agent.find();
    res.json(agents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* Assign Policy to Agent */
exports.assignPolicy = async (req, res) => {
  try {
    const assignment = new AgentAssignment(req.body);
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* Get Agent Assignments with Agent Details */
exports.getAssignments = async (req, res) => {
  try {
    const assignments = await AgentAssignment.find()
      .populate('agentId', 'agentName phone city');
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
