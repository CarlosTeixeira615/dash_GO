import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface SingInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;
  console.log(errors);

  const handleSigin: SubmitHandler<SingInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        onSubmit={handleSubmit(handleSigin)}
        w="100%"
        maxWidth={360}
        bg="gray.800"
        flexDir="column"
        p="8"
        borderRadius="8"
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
            type="email"
          />

          <Input
            name="password"
            label="Senha"
            error={errors.password}
            type="password"
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          isLoading={formState.isSubmitting}
          colorScheme="pink"
          mt="6"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
