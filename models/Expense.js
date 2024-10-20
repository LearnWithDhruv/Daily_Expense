const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paidBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  participants: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amountOwed: { type: Number, required: true }
  }],
  method: {
    type: String,
    enum: ['equal', 'exact', 'percentage'],
    required: true,
  }
}, {
  timestamps: true,
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;
