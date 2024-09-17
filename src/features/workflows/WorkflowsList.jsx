import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWorkflows } from './workflowsAPI';
import {
  Flex,
  Box,
  Card,
  Text,
  Spinner,
  TextField,
  Button,
} from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Link, Outlet } from 'react-router-dom';

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
    <>
      <Flex p='5' gap='3' justify='between'>
        <Flex direction='column' gap='0' maxWidth='300px' minWidth='300px'>
          <Flex justify='between' direction='row' gap='2'>
            <Box maxWidth='250px'>
              <TextField.Root placeholder='Search Workflows'>
                <TextField.Slot>
                  <MagnifyingGlassIcon height='16' width='16' />
                </TextField.Slot>
              </TextField.Root>
            </Box>
            <Button variant='surface' color='green'>
              New
            </Button>
          </Flex>
          {workflows.length === 0 ? (
            <Text>No workflows available</Text>
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
        <Outlet />
        {/* this is going to be 2 columns */}
      </Flex>
    </>
  );
};

export default WorkflowsList;
