import { Box, Title, Text } from "@mantine/core";
import { useQuery } from "../../QueryContext";

export const QueryResponse = () => {
    const { response } = useQuery();
    return (
        <Box>
            <Title mb="sm" mt="md" fz="xl" c="white">Query Response</Title>
            <Text>{response}</Text>
        </Box>
    );

}