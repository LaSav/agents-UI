import {
  LinkNone1Icon,
  FilePlusIcon,
  InfoCircledIcon,
  PlusIcon,
} from '@radix-ui/react-icons';
import {
  Box,
  Flex,
  Text,
  SegmentedControl,
  TextField,
  Button,
  IconButton,
  Card,
  Select,
  Switch,
} from '@radix-ui/themes';
import { useState } from 'react';

const EditWorkflow = () => {
  const [selectValue, setSelectValue] = useState('PDF');
  // Fetch workflow if exists
  // Fetch LLM Tools

  return (
    <>
      <Flex direction='column' gap='6' align='center'>
        <Flex direction='column' gap='4' align='center'>
          <Box>
            <Text as='div' size='4' weight='bold'>
              Data Input
            </Text>
            <Text as='div' size='2' color='gray'>
              Supply data as an API endpoint, .csv or .pdf files
            </Text>
          </Box>
          <SegmentedControl.Root
            value={selectValue}
            onValueChange={setSelectValue}
            defaultValue='PDF'
          >
            <SegmentedControl.Item value='PDF'>PDF</SegmentedControl.Item>
            <SegmentedControl.Item value='API'>API</SegmentedControl.Item>
            <SegmentedControl.Item value='CSV'>CSV</SegmentedControl.Item>
          </SegmentedControl.Root>
          {selectValue === 'API' ? (
            <TextField.Root placeholder='Enter API Endpoint'>
              <TextField.Slot>
                <LinkNone1Icon height='16' width='16' />
              </TextField.Slot>
            </TextField.Root>
          ) : (
            <Button variant='surface' color='gray' highContrast>
              Add {selectValue} File
            </Button>
          )}
        </Flex>
        <Box width='400px'>
          <Card variant='surface'>
            <Text size='4' weight='bold' as='div'>
              Create LLM Tool
            </Text>
            <TextField.Root placeholder='Step Name' size='1'></TextField.Root>
            <TextField.Root
              placeholder='Step Description'
              size='1'
            ></TextField.Root>
            <Text as='div' size='3'>
              Active
            </Text>
            <Switch defaultChecked color='green'></Switch>
          </Card>
        </Box>
        <Box>
          <IconButton radius='full' color='purple' variant='surface'>
            <PlusIcon></PlusIcon>
          </IconButton>
        </Box>
      </Flex>
      <Flex direction='column'>
        <h3>Workflow Settings</h3>
      </Flex>
    </>
  );
};

export default EditWorkflow;
