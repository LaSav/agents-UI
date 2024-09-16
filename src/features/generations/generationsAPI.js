import { createAsyncThunk } from '@reduxjs/toolkit';

const dummyGenerations = [
  {
    id: '4473',
    name: 'ACME Contracts 16/09/24',
    description:
      'Summarized and prioritized housing policies 1,2,3 from the ACME contract.',
    workflowUsed: '9634',
    createdBy: 'user_368',
  },
  {
    id: '8472',
    name: 'ACME Budgeting 09/09/24',
    description: 'Budgeted Q3 ACME contracts based on past contracts.',
    workflowUsed: '2597',
    createdBy: 'user_368',
  },
];

const generation1 = {
  id: '3759',
  name: 'Workflow 1',
  description: 'workflow for summarizing documents and prioritizing them',
  createdBy: 'user_368',
};

export const fetchGenerations = createAsyncThunk(
  'generations/fetchGenerations',
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyGenerations);
      }, 500);
    });
  }
);
