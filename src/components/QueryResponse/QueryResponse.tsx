import { Box, Title, Text, Loader, List } from "@mantine/core";
import { useQuery } from "../../QueryContext";

export const QueryResponse = () => {
    const { response, loading, fileNames } = useQuery();

    return (
        <Box>
            <Title mb="sm" mt="md" fz="xl" c="white">Query Response</Title>
            {response === "" && <Text c="white">No response yet</Text>}
            {loading ? <Loader color="white" /> : <Text c="white">{response}</Text>}
            {fileNames.length > 0 && (
                <>
                    <Title mb="sm" mt="md" fz="xl" c="white">Files used:</Title>
                    <List>
                        {fileNames.map((fileName) => (
                            <List.Item key={fileName} c="white">{fileName}</List.Item>
                        ))}
                    </List>
                </>
            )}
        </Box>
    );

}