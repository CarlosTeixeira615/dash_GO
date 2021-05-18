import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ShowProfileData {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ShowProfileData) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" ml="4" textAlign="right">
          <Text>Carlos Eduardo</Text>
          <Text color="gray.300" fontSize="small">
            carlosteixeira.tc@hotmal.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="carlos eduardo"
        src="https://avatars.githubusercontent.com/u/63177558?s=400&u=a88f60141873e8101d3ac3d662a9cd7a63e3f731&v=4"
      />
    </Flex>
  );
}
