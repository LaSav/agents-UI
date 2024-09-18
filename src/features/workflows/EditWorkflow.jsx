import { LinkNone1Icon, PlusIcon } from '@radix-ui/react-icons';
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
} from '@radix-ui/themes';
import WorkflowStep from '../../components/WorkflowStep';
import { useState } from 'react';

const EditWorkflow = () => {
  const workflow = {
    name: 'workflow 1',
    description: 'Summarize and prioritize documents',
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
        active: true,
      },
      {
        stepId: '2',
        tool: 'documentClassification',
        inputType: 'text',
        outputType: 'PDF',
        active: true,
        description:
          'Classifies summaries from step 1 by construction contracts only. Final step, generate to PDF.',
        parameters: {
          classifications: 'construction',
          keywords: 'ACME',
        },
      },
    ],
  };

  const [selectValue, setSelectValue] = useState(workflow.sourceType);
  // Fetch workflow if exists
  // Fetch LLM Tools

  console.log(workflow);

  return (
    <>
      <Flex direction='column' gap='4' align='center'>
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
                  defaultValue={workflow.data.sourceType || 'API'}
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
        {workflow.workflowSteps.map((step) => (
          <WorkflowStep
            key={step.stepId}
            stepId={step.stepId}
            tool={step.tool}
            inputType={step.inputType}
            outputType={step.outputType}
            description={step.description}
            active={step.active}
            parameters={step.parameters}
          />
        ))}
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

// Todo:
//      - flag 'reading from document' when working from existing workflow
//      - maxHeight on steps
//      - refactor data input & step cards into seperate components

// Optimizations/ edge cases:
//      - React Memoization to only re-render the WorkflowStep when its props
//        are changed
