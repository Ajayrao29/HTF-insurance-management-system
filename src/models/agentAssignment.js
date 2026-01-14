const mongoose = require('mongoose');

const AgentAssignmentSchema = new mongoose.Schema(
  {
    agentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Agent',
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date
    },
    assignmentStatus: {
      type: String,
      enum: ['Active', 'Expired', 'Cancelled'],
      required: true
    },
    policyCode: {
      type: String,
      required: true
    },
    policyHolderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('AgentAssignment', AgentAssignmentSchema);
