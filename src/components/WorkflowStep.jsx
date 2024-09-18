import {
  Box,
  Text,
  Flex,
  Switch,
  TextField,
  TextArea,
  Select,
  Card,
} from '@radix-ui/themes';
import { useState } from 'react';

const WorkflowStep = ({
  stepId,
  tool,
  inputType,
  outputType,
  description,
  active,
  parameters,
}) => {
  const [selectedTool, setSelectedTool] = useState(tool);

  console.log(tool);

  const renderToolParameters = () => {
    switch (selectedTool) {
      case 'documentClassification':
        return (
          <>
            <TextField.Root
              placeholder='Enter Classifications'
              size='1'
              defaultValue={parameters ? parameters : ''}
            />
          </>
        );
      case 'translation':
        return (
          <>
            <TextField.Root placeholder='Enter language' size='1' />
          </>
        );
      case 'textGeneration':
        return (
          <>
            <TextArea
              size='1'
              resize='vertical'
              placeholder='Enter prompt for text generation'
            />
          </>
        );
      case 'textSummarization':
        return (
          <>
            <TextField.Root
              size='1'
              resize='vertical'
              placeholder='Enter summarization instructions'
              defaultValue={parameters ? parameters : ''}
            />
          </>
        );
      case 'NER':
        return (
          <>
            <TextField.Root
              placeholder='Entity Type (e.g., people, organizations)'
              size='1'
            />
          </>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <Box width='500px'>
        <Text size='3' weight='bold' highContrast>
          Step {stepId}
        </Text>
        <Card variant='surface'>
          <Flex direction='row' gap='3' justify='between' p='1'>
            <Flex direction='column' maxWidth='250px' minWidth='250px' gap='3'>
              <Select.Root
                size='1'
                value={selectedTool}
                onValueChange={(value) => setSelectedTool(value)}
              >
                <Select.Trigger placeholder='Select Tool' />
                <Select.Content>
                  <Select.Group>
                    <Select.Label>Text Processing</Select.Label>
                    <Select.Item value='textSummarization'>
                      text summarization
                    </Select.Item>
                    <Select.Item value='textGeneration'>
                      text generation
                    </Select.Item>
                    <Select.Item value='sentimentAnalysis'>
                      sentiment analysis
                    </Select.Item>
                    <Select.Item value='NER'>
                      Named Entity Recognition
                    </Select.Item>
                    <Select.Item value='translation'>translation</Select.Item>
                    <Select.Item value='moderation'>moderation</Select.Item>
                  </Select.Group>
                  <Select.Separator />
                  <Select.Group>
                    <Select.Label>
                      Data Extraction and Understanding
                    </Select.Label>
                    <Select.Item value='documentClassification'>
                      document classification
                    </Select.Item>
                    <Select.Item value='NER'>
                      Named Entity Recognition
                    </Select.Item>
                    <Select.Item value='documentSearchAndRetrieval'>
                      document search and retrieval
                    </Select.Item>
                  </Select.Group>
                  <Select.Separator />
                  <Select.Group>
                    <Select.Label>
                      Interaction and Customer Support
                    </Select.Label>
                    <Select.Item value='questionAnswering'>
                      question answering
                    </Select.Item>
                    <Select.Item value='sentimentAnalysis'>
                      sentiment analysis
                    </Select.Item>
                  </Select.Group>
                  <Select.Separator />
                  <Select.Group>
                    <Select.Label>Developer and Automation</Select.Label>
                    <Select.Item value='codeGeneration'>
                      code generation
                    </Select.Item>
                    <Select.Item value='codeTextGeneration'>
                      text generation (for code)
                    </Select.Item>
                  </Select.Group>
                  <Select.Separator />
                  <Select.Group>
                    <Select.Label>Industry Specific</Select.Label>
                    <Select.Item value='legalDocumentClassification'>
                      legal document classification
                    </Select.Item>
                    <Select.Item value='mediaTextSummarization'>
                      media text summarization
                    </Select.Item>
                    <Select.Item value='healthcareNER'>
                      healthcare Named Entity Recognition
                    </Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
              {renderToolParameters()}
              <TextArea
                size='1'
                resize='vertical'
                placeholder='Enter a description for this step'
                defaultValue={description ? description : ''}
              />
            </Flex>
            <Flex direction='column' justify='end'>
              <Text as='div' size='1'>
                active
              </Text>
              <Switch defaultChecked color='green'></Switch>
            </Flex>
          </Flex>
        </Card>
      </Box>
    </>
  );
};

export default WorkflowStep;
