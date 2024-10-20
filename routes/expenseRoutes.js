const express = require('express');
const { addExpense, getUserExpenses, getAllExpenses } = require('../controllers/expenseController');
const router = express.Router();

router.post('/add', addExpense);
router.get('/user/:id', getUserExpenses);
router.get('/all', getAllExpenses);

module.exports = router;
