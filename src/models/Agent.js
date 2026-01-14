const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema(
  {
    agentName: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Agent', AgentSchema);
