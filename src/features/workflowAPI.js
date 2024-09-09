import { createAsyncThunk } from '@reduxjs/toolkit';

const dummyWorkflows = [
  {
    id: '1',
    name: 'Project 1',
    extractionType: 'PDF',
    tools: [
      {
        toolA: 'tool A',
        toolB: 'tool B',
        toolC: 'tool C',
      },
    ],
  },
  {
    id: '2',
    name: 'Project 2',
    extractionType: 'API',
    tools: [
      {
        toolA: 'tool A',
        toolB: 'tool B',
        toolC: 'tool C',
        toolD: 'tool D',
        toolE: 'tool E',
      },
    ],
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
