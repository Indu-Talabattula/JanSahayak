const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User reference is required'],
      index: true,
    },
    title: {
      type: String,
      default: 'New Conversation',
      trim: true,
    },
    language: {
      type: String,
      enum: ['English', 'Hindi', 'Telugu'],
      default: 'English',
    },
  },
  {
    timestamps: true,
  }
);

// Virtual alias for userId to match both conventions
conversationSchema.virtual('userId').get(function () {
  return this.user;
});

module.exports = mongoose.model('Conversation', conversationSchema);
