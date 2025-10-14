import { Box, Title, List, ListItem } from "@mantine/core";

export function UploadedFilesList({ files }: { files: string[] }) {
    return (
        <Box>
            <Title mb="sm" mt="md" fz="xl" c="white">Uploaded Files</Title>
            <List>
                {files.map((file) => (
                    <ListItem key={file}>{file}</ListItem>
                ))}
            </List>
        </Box>
    );
}