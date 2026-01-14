const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  agentName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String
  },
  policyCode: {
    type: String,
    required: true
  },
  numberOfPolicies: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Agent', agentSchema);
