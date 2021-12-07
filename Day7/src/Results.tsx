import { Stack, Heading, Box, Text, Spinner, Flex } from "@chakra-ui/react";

export interface Result {
  alignment: number;
  fuel: number;
}

interface ResultCardProps {
  title: string;
  result: Result;
}

export enum State {
  Empty,
  Error,
  Pending,
  Ready,
}

interface ResultsProps {
  titles: string[];
  results: Result[] | undefined;
  state: State;
}

const ResultCard = (props: ResultCardProps) => (
  <Stack
    boxShadow="lg"
    bgColor="blue.500"
    rounded={15}
    p={4}
    w="100%"
    h="100%"
    spacing={2}
  >
    <Heading as="h3" size="sm" color="white" fontWeight={600} opacity={0.7}>
      {props.title}
    </Heading>
    <Heading as="h4" color="white" fontSize="4xl">
      Best alignment: {props.result.alignment}
    </Heading>
    <Text color="white" opacity={0.9} fontWeight={600} fontSize="xl">
      Fuel cost: {props.result.fuel}
    </Text>
  </Stack>
);

export const Results = (props: ResultsProps) => {
  switch (props.state) {
    case State.Empty:
      return (
        <Box w={500} h={400}>
          <Text as="h3" size="sm" mb={2} fontWeight={600} w={400} opacity={0.3}>
            Result will appear here...
          </Text>
        </Box>
      );
    case State.Error:
      return (
        <Box w={500} h={400}>
          <Text
            as="h3"
            size="sm"
            mb={2}
            color="red.500"
            fontWeight={600}
            w={400}
          >
            Error in input
          </Text>
        </Box>
      );
    case State.Pending:
      return (
        <Flex w={500} h={400} align="center" justify="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      );
    case State.Ready:
      return (
        <Stack w={500} h={400}>
          <ResultCard
            title={props.titles[0]}
            result={props.results![0]}
          ></ResultCard>
          <ResultCard
            title={props.titles[1]}
            result={props.results![1]}
          ></ResultCard>
        </Stack>
      );
  }
};
