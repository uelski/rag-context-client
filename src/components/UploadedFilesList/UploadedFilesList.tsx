import { Box, Title, List, ListItem, Text } from "@mantine/core";

export function UploadedFilesList({ files }: { files: string[] }) {
    return (
        <Box>
            <Title mb="sm" mt="md" fz="xl" c="white">Uploaded Files:</Title>
            <Text mb="sm" mt="md" c="white">{files.length} files uploaded</Text>
            <List>
                {files.map((file) => (
                    <ListItem key={file}>{file}</ListItem>
                ))}
            </List>
        </Box>
    );
}