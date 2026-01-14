const Agent = require('../models/agent.model');

// CREATE AGENT
exports.createAgent = async (req, res) => {
  try {
    const agent = await Agent.create(req.body);
    res.status(201).json(agent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET ALL AGENTS
exports.getAgents = async (req, res) => {
  const agents = await Agent.find();
  res.json(agents);
};

// GET AGENT BY ID
exports.getAgentById = async (req, res) => {
  const agent = await Agent.findById(req.params.id);
  if (!agent) return res.status(404).json({ message: "Agent not found" });
  res.json(agent);
};
