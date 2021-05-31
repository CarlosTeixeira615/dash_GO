import { Stack, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface paginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

let siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(siblingsCount)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: paginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

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
          {currentPage > 1 + siblingsCount && (
            <>
              <PaginationItem onPageChange={onPageChange} number={1} />
              {currentPage > 2 + siblingsCount && (
                <Text color="gray.300" width="8" textAlign="center">
                  ...
                </Text>
              )}
            </>
          )}

          {previousPage.length > 0 &&
            previousPage.map((page) => {
              return (
                <PaginationItem
                  onPageChange={onPageChange}
                  key={page}
                  number={page}
                />
              );
            })}

          <PaginationItem
            onPageChange={onPageChange}
            number={currentPage}
            isCurrent
          />

          {nextPages.length > 0 &&
            nextPages.map((page) => {
              return (
                <PaginationItem
                  onPageChange={onPageChange}
                  key={page}
                  number={page}
                />
              );
            })}

          {currentPage + siblingsCount < lastPage && (
            <>
              {currentPage + 1 + siblingsCount < lastPage && (
                <Text color="gray.300" width="8" textAlign="center">
                  ...
                </Text>
              )}
              <PaginationItem onPageChange={onPageChange} number={lastPage} />
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
