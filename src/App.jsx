import { Box, Button, Heading, Input, Stack, Text } from "@chakra-ui/react";

export default function App() {
  return (
    <Box
      minH="100vh"
      bg="gray.50"
      color="gray.900"
      display="grid"
      placeItems="center"
      p="6"
    >
      <Box
        bg="white"
        borderWidth="1px"
        borderRadius="xl"
        p="6"
        w="full"
        maxW="420px"
      >
        <Stack gap="4">
          <Heading size="md">Newsletter</Heading>

          <Text color="fg.muted">
            Get product updates once a week. No spam.
          </Text>

          <Input placeholder="Email address" />

          <Button colorPalette="brand">Subscribe</Button>
        </Stack>
      </Box>
    </Box>
  );
}
