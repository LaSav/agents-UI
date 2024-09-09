import { createAsyncThunk } from '@reduxjs/toolkit';

const dummyWorkflows = [
  {
    id: '3795',
    name: 'Project 1',
    description: 'workflow for summarizing documents and prioritizing them',
    workflowStepsLength: '3',
    createdBy: 'user_368',
  },
  {
    id: '8576',
    name: 'Project 2',
    description: 'workflow for summarizing documents and translating them',
    workflowStepsLength: '3',
    createdBy: 'user_885',
  },
];

export const fetchWorkflows = createAsyncThunk(
  'workflows/fetchWorkflows',
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyWorkflows);
      }, 500);
    });
  }
);
