import {
  LinkNone1Icon,
  PlusIcon,
  PersonIcon,
  Share1Icon,
  GearIcon,
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
  Switch,
  Separator,
} from '@radix-ui/themes';
import WorkflowStep from '../../components/WorkflowStep';
import { useState } from 'react';

const EditWorkflow = () => {
  // Fetch workflow
  const initialWorkflow = {
    name: 'workflow 1',
    description: 'Summarize and prioritize documents',
    assignedUser: 'user_368',
    data: {
      sourceType: 'PDF_upload',
      metadata: {
        uploadedBy: 'user_368',
        uploadDate: '2024-09-17',
        size: '2MB',
      },
    },
    workflowSteps: [
      {
        stepId: '1',
        tool: 'textSummarization',
        inputType: 'PDF',
        outputType: 'text',
        description: 'summarizes data from ACME_contracts_2024.pdf',
        parameters: 'summarise in 500 words',
        assignedUser: 'user_368',
        active: true,
      },
      {
        stepId: '2',
        tool: 'documentClassification',
        inputType: 'text',
        outputType: 'PDF',
        description:
          'Classifies summaries from step 1 by construction contracts only. Final step, generate to PDF.',
        parameters: 'construction',
        assignedUser: 'user_599',
        active: true,
      },
    ],
  };

  const [selectValue, setSelectValue] = useState('API'); // This needs to be dynamic

  const [workflowSteps, setWorkflowSteps] = useState(
    initialWorkflow.workflowSteps
  );

  // On Saving workflow I need to submit a put request with the workflow data object. Which means I have to include the useState workflowSteps.

  const addNewStep = () => {
    const newStep = {
      stepId: (workflowSteps.length + 1).toString(),
      tool: '',
      inputType: '',
      outputType: '',
      description: '',
      active: true,
    };

    setWorkflowSteps([...workflowSteps, newStep]);
  };

  return (
    <>
      <Flex direction='column' gap='4' align='center' overflowY='auto'>
        {/* refactor this into seperate component */}
        <Box width='500px'>
          <Text size='3' weight='bold' highContrast>
            Data Input
          </Text>
          <Card variant='surface'>
            <Flex direction='row' p='1' gap='4'>
              <Flex direction='column' width='250px' gap='3'>
                <SegmentedControl.Root
                  value={selectValue}
                  onValueChange={setSelectValue}
                  defaultValue='API'
                >
                  <SegmentedControl.Item value='PDF_upload'>
                    PDF
                  </SegmentedControl.Item>
                  <SegmentedControl.Item value='API'>API</SegmentedControl.Item>
                  <SegmentedControl.Item value='CSV_upload'>
                    CSV
                  </SegmentedControl.Item>
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
              <Flex direction='column' width='200px' gap='2' justify='end'>
                <Text size='2' color='gray'>
                  Supply data to your workflow from an API endpoint, .csv or
                  .pdf file
                </Text>
                <Flex direction='column' align='end'>
                  <Text as='div' size='1'>
                    active
                  </Text>
                  <Switch defaultChecked color='green'></Switch>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Box>
        {workflowSteps.map((step) => (
          <WorkflowStep
            key={step.stepId}
            stepId={step.stepId}
            tool={step.tool}
            inputType={step.inputType}
            outputType={step.outputType}
            description={step.description}
            active={step.active}
            parameters={step.parameters}
            assignedUser={step.assignedUser}
          />
        ))}
        <Box>
          <IconButton
            radius='full'
            color='purple'
            variant='surface'
            onClick={addNewStep}
          >
            <PlusIcon></PlusIcon>
          </IconButton>
        </Box>
      </Flex>
      <Flex
        direction='column'
        height='80vh'
        position='sticky'
        maxWidth='300px'
        minWidth='300px'
        top='4'
        align='center'
        gap='4'
      >
        <Flex direction='column' align='center' p='2' width='150px'>
          <PersonIcon height='20' width='20' />
          <Text size='2'>Maintained by:</Text>
          <Text size='2'>{initialWorkflow.assignedUser}</Text>
        </Flex>
        <Separator orientation='horizontal' size='4' />
        {/* <Flex direction='column' align='center' p='2' width='150px'>
          <Text size='2'>Contributors:</Text>
          {workflowSteps.map((step) => (
            <Text size='2'>{step.assignedUser}</Text>
          ))}
        </Flex> */}
        <Flex direction='row' gap='2'>
          <Button variant='surface' color='sky'>
            <Share1Icon />
            Fork
          </Button>
          <Button variant='surface' color='purple'>
            <GearIcon />
            Generate
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default EditWorkflow;

// Todo:
//      - flag 'reading from document' when working from existing workflow
//      - maxHeight on steps
//      - refactor data input into seperate components
//      - Add remove step option

// Optimizations/ edge cases:
//      - React Memoization to only re-render the WorkflowStep when its props
//        are changed
