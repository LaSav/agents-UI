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
    return (
      <Flex direction='column' align='center' mt='9'>
        <Spinner />
      </Flex>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(workflows);

  return (
    <Flex direction='column' align='center' gap='2'>
      <h2>Your Workflows</h2>
      {workflows.length === 0 ? (
        <p>No workflows available</p>
      ) : (
        workflows.map((workflow) => (
          <Box width='400px' key={workflow.id} p='2'>
            <Card asChild variant='surface' size='3'>
              <Link to={`${workflow.id}`}>
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
      <Button>Press me</Button>
    </Flex>
  );
};

export default WorkflowsList;
