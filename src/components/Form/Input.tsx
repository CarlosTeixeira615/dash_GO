import { forwardRef, ForwardRefRenderFunction } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  ({ name, label, error, ...res }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraInput
          name={name}
          id={name}
          type={name}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          ref={ref}
          _hover={{
            bgColor: "gray.900",
          }}
          size="lg"
          {...res}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    );
  };

export const Input = forwardRef(InputBase);
