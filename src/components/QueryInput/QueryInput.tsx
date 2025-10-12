import { Box, Textarea, Title, Text } from "@mantine/core";
import { useState } from "react";
export function QueryInput() {
    const [query, setQuery] = useState("");
    const onQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuery(event.target.value);
    }
    return (
        <Box>
            <Title mb="sm" mt="md" fz="xl" c="white">Query Input</Title>
            <Text c="white">Ask about your uploaded documents</Text>
            <Textarea c="white" label="Query" placeholder="Enter your query" value={query} onChange={onQueryChange} />
        </Box>
    );
}