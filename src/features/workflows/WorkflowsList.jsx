import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWorkflows } from './workflowsAPI';
import { Flex, Button, Box, Card, Text, Spinner } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

const WorkflowsList = () => {
  const dispatch = useDispatch();
  const { workflows, loading, error } = useSelector((state) => state.workflows);

  useEffect(() => {
    dispatch(fetchWorkflows());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(workflows);

  return (
    <Flex direction='column' gap='0'>
      {workflows.length === 0 ? (
        <p>No workflows available</p>
      ) : (
        workflows.map((workflow) => (
          <Box key={workflow.id} pt='2'>
            <Card asChild variant='surface' size='1'>
              <Link to={`/workflows/${workflow.id}`}>
                <Text weight='bold' size='2'>
                  {workflow.name}
                </Text>
                <Text as='div' size='2'>
                  {workflow.description}
                </Text>
                <Text as='div' size='2'>
                  Created by:{workflow.createdBy}
                </Text>
              </Link>
            </Card>
          </Box>
        ))
      )}
    </Flex>
  );
};

export default WorkflowsList;
