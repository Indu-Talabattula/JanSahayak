const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema(
  {
    schemeName: {
      type: String,
      required: [true, 'Scheme name is required'],
      trim: true,
      index: true,
    },
    department: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Scheme category is required'],
      trim: true,
      index: true,
    },
    beneficiary: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      default: 'All',
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    benefits: {
      type: [String],
      default: [],
    },
    eligibilityText: {
      type: String,
    },
    rules: {
      minAge: {
        type: Number,
        default: null,
      },
      maxAge: {
        type: Number,
        default: null,
      },
      gender: {
        type: String,
        default: 'All',
      },
      state: {
        type: String,
        default: 'All',
      },
      occupation: {
        type: String,
        default: 'All',
      },
      category: {
        type: String,
        default: 'All',
      },
      disability: {
        type: Boolean,
        default: null,
      },
      maxAnnualIncome: {
        type: Number,
        default: null,
      },
    },
    documents: {
      type: [String],
      default: [],
    },
    applicationProcess: {
      type: [String],
      default: [],
    },
    officialWebsite: {
      type: String,
      trim: true,
    },
    source: {
      type: String,
      trim: true,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Scheme', schemeSchema);
