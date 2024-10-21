# Daily Expenses Sharing Application

This is a backend service for a daily expenses sharing application. It allows users to add expenses and split them between participants using different methods: exact amounts, percentages, and equal splits.

## Features

- **User Management**: Create users with details such as name, email, and mobile number.
- **Expense Management**: Users can add expenses and split them between participants.
- **Split Methods**: 
  - **Equal Split**: Split equally among all participants.
  - **Exact Split**: Specify the exact amount each participant owes.
  - **Percentage Split**: Specify the percentage each participant owes.
- **Balance Sheet**: Downloadable balance sheet of expenses.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (optional if you implement)
- **Environment Variables**: dotenv for environment management

## Prerequisites

- Node.js (>= v14.x.x)
- MongoDB (Local instance or MongoDB Atlas cloud)
- Git

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/daily-expenses-sharing.git
cd daily-expenses-sharing
