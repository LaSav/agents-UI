import { NavLink, Outlet } from 'react-router-dom';
import { Flex, Button, Box, Container, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import WorkflowsList from '../features/workflows/WorkflowsList';

export default function Root() {
  return (
    <>
      <div id='nav'>
        <NavLink to='/'>Workflows</NavLink>
      </div>
      <Flex>
        <Box minWidth='400px' pl='1'>
          <Flex justify='between' direction='row' gap='2'>
            <Box maxWidth='250px'>
              <TextField.Root placeholder='Search workflows'>
                <TextField.Slot>
                  <MagnifyingGlassIcon height='16' width='16' />
                </TextField.Slot>
              </TextField.Root>
            </Box>
            <Button>New</Button>
          </Flex>
          <WorkflowsList />
        </Box>
        <Container size='2'>
          <Box>
            <Outlet />
          </Box>
        </Container>
      </Flex>
    </>
  );
}
