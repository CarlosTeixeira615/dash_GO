import { Input, Icon, Flex } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>();

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Busca na plataforma"
        px="4"
        mr="4"
        ref={searchInputRef}
        _placeholder={{
          color: "gray.400",
        }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
