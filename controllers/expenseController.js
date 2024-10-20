const Expense = require('../models/Expense');
const User = require('../models/User');

const addExpense = async (req, res) => {
  const { description, amount, paidBy, participants, method } = req.body;

  if (!description || !amount || !paidBy || !participants || !method) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (method === 'percentage') {
    const totalPercentage = participants.reduce((acc, p) => acc + p.amountOwed, 0);
    if (totalPercentage !== 100) {
      return res.status(400).json({ message: 'Percentages must add up to 100%' });
    }
  }

  try {
    const expense = await Expense.create({ description, amount, paidBy, participants, method });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ 'participants.user': req.params.id });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all expenses
const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().populate('paidBy participants.user');
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addExpense, getUserExpenses, getAllExpenses };
