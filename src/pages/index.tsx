import { Flex, Button, Stack } from "@chakra-ui/react";
import Input from "../components/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        flexDir="column"
        p="8"
        borderRadius="8"
      >
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" />

          <Input name="password" label="Senha" type="password" />
        </Stack>

        <Button type="submit" colorScheme="pink" mt="6" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
