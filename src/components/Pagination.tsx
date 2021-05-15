import { Stack, Button, Box } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack direction="row" mt="8" align="center" spacing="6">
      <Stack
        direction="row"
        spacing="2"
        display="flex"
        flex="1"
        justify="space-between"
      >
        <Box>
          <strong>0</strong> - <strong>10</strong> de 200
        </Box>
        <Stack spacing="2" direction="row">
          <Button
            size="sm"
            fontSize="xs"
            width="4"
            colorScheme="pink"
            disabled
            _disabled={{
              bgColor: "pink.500",
              cursor: "default",
            }}
          >
            1
          </Button>
          <Button
            size="sm"
            fontSize="xs"
            width="4"
            colorScheme="pink"
            disabled
            bgColor="gray.700"
            _hover={{
              bg: "gray.500",
            }}
          >
            2
          </Button>
          <Button
            size="sm"
            fontSize="xs"
            width="4"
            colorScheme="pink"
            disabled
            bgColor="gray.700"
            _hover={{
              bg: "gray.500",
            }}
          >
            3
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
