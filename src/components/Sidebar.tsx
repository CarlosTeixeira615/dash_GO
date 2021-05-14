import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center" color="pink.400">
              <Icon as={RiDashboardLine} />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>

            <Link display="flex" align="center" color="pink.400">
              <Icon as={RiContactsLine} />
              <Text ml="4" fontWeight="medium">
                Usuarios
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center" color="pink.400">
              <Icon as={RiInputMethodLine} />
              <Text ml="4" fontWeight="medium">
                Formulário
              </Text>
            </Link>

            <Link display="flex" align="center" color="pink.400">
              <Icon as={RiGitMergeLine} />
              <Text ml="4" fontWeight="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}