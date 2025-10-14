import { Box, FileInput, Flex, Text, Title, Loader } from "@mantine/core";
import { useFileUpload } from "./useFileUpload";
import { UploadedFilesList } from "../";

export function FileUpload() {

    const { files, filenames, onFileUpload, loading } = useFileUpload();

    return (
        <Box>
            <Title mb="sm" mt="md" fz="xl" c="white">File Upload</Title>
            {loading && <Loader color="white" />}
            {!loading && (
                <FileInput 
                    c="white"
                    multiple
                    value={files}
                    onChange={onFileUpload}
                    label="Upload one or more files"
                    description="Files uploaded here will be added to the context of the RAG model."
                    placeholder="File Upload"
                />
            )}
            <UploadedFilesList files={filenames} />
        </Box>
    );
}