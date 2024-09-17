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
  TextArea,
} from '@radix-ui/themes';
import { useState } from 'react';

const EditWorkflow = () => {
  const [selectValue, setSelectValue] = useState('API');
  // Fetch workflow if exists
  // Fetch LLM Tools

  return (
    <>
      <Flex direction='column' gap='6' align='center'>
        <Box width='450px'>
          <Text size='3' weight='bold'>
            Data Input
          </Text>
          <Card variant='surface'>
            <Flex direction='row' p='1'>
              <Flex direction='column' justify='center'>
                <Text size='2' color='gray'>
                  Supply data to your workflow from an API endpoint, .csv or
                  .pdf file
                </Text>
              </Flex>
              <Flex direction='column' gap='4'>
                <SegmentedControl.Root
                  value={selectValue}
                  onValueChange={setSelectValue}
                  defaultValue='API'
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
        <Box width='450px'>
          <Text size='3' weight='bold' highContrast>
            Step 1
          </Text>
          <Card variant='surface'>
            <Flex direction='row' gap='3' justify='between' p='1'>
              <Flex
                direction='column'
                maxWidth='250px'
                minWidth='250px'
                gap='3'
              >
                <TextField.Root
                  placeholder='Step Name'
                  size='1'
                ></TextField.Root>
                <Select.Root size='1'>
                  <Select.Trigger placeholder='Pick a Tool' />
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
                <TextArea
                  size='1'
                  resize='vertical'
                  placeholder='Enter a description'
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
