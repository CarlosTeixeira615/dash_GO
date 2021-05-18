import { Stack, Button, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

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
        <Stack spacing="2" direction={["column", "row"]}>
          <PaginationItem number={1} isCurrent />
          <PaginationItem number={2} />
          <PaginationItem number={3} />
        </Stack>
      </Stack>
    </Stack>
  );
}
