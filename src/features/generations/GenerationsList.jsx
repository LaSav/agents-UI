import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenerations } from './generationsAPI';
import {
  Flex,
  Box,
  Card,
  Text,
  Spinner,
  TextField,
  Button,
} from '@radix-ui/themes';
import { Link, Outlet } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const generationsList = () => {
  const dispatch = useDispatch();
  const { generations, loading, error } = useSelector(
    (state) => state.generations
  );

  useEffect(() => {
    dispatch(fetchGenerations());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Flex p='5' gap='5'>
        <Flex direction='column' gap='0' maxWidth='300px' minWidth='300px'>
          <Flex justify='between' direction='row' gap='2'>
            <Box maxWidth='250px'>
              <TextField.Root placeholder='Search Generations'>
                <TextField.Slot>
                  <MagnifyingGlassIcon height='16' width='16' />
                </TextField.Slot>
              </TextField.Root>
            </Box>
            <Button>New</Button>
          </Flex>
          {generations.length === 0 ? (
            <Text>No generations available</Text>
          ) : (
            generations.map((generation) => (
              <Box key={generation.id} pt='2'>
                <Card asChild variant='surface' size='1'>
                  <Link to={`/generations/${generation.id}`}>
                    <Text weight='bold' size='2'>
                      {generation.name}
                    </Text>
                    <Text as='div' size='2'>
                      {generation.description}
                    </Text>
                    <Text as='div' size='2'>
                      Created by:{generation.createdBy}
                    </Text>
                  </Link>
                </Card>
              </Box>
            ))
          )}
        </Flex>
        <Outlet />
      </Flex>
    </>
  );
};

export default generationsList;
