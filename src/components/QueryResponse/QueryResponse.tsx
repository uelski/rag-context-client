import { Box, Title, Text, Loader } from "@mantine/core";
import { useQuery } from "../../QueryContext";

export const QueryResponse = () => {
    const { response, loading } = useQuery();

    return (
        <Box>
            <Title mb="sm" mt="md" fz="xl" c="white">Query Response</Title>
            {response === "" && <Text c="white">No response yet</Text>}
            {loading ? <Loader color="white" /> : <Text>{response}</Text>}
        </Box>
    );

}