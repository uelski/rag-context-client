import { Box, Title, List, ListItem, Text, Loader } from "@mantine/core";

interface FileUpload {
    doc_id: string;
    filename: string;
    page_number: number;
    chunks: number;
}
export function UploadedFilesList({ files, loading }: { files: FileUpload[], loading: boolean }) {
    return (
        <Box>
            <Title mb="sm" mt="md" fz="xl" c="white">Uploaded Files:</Title>
            <Text mb="sm" mt="md" c="white">{files.length} files uploaded</Text>
            {loading ? <Loader color="white" /> : (
                <List>
                {files.map((file: FileUpload) => (
                        <ListItem c="white" key={file.doc_id}>{file.filename} - {file.page_number} - {file.chunks} chunks</ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
}