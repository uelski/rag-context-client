import { Box, Textarea, Title, Text, Button } from "@mantine/core";
import { useQueryInput } from "./useQueryInput";

export function QueryInput() {
    const { query, onQueryChange, onQuerySubmit } = useQueryInput();
    return (
        <Box>
            <Title mb="sm" mt="md" fz="xl" c="white">Query Input</Title>
            <Text c="white">Ask about your uploaded documents</Text>
            <Textarea c="white" label="Query" placeholder="Enter your query" value={query} onChange={onQueryChange} />
            <Button mt="sm" c="white" variant="outline" color="myColor" onClick={onQuerySubmit}>Submit</Button>
        </Box>
    );
}