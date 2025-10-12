import { useState } from "react";
import { Box, Button, FileInput, Flex, Text, Title, Loader } from "@mantine/core";

export function FileUpload() {
    const [files, setFiles] = useState<File[]>([]);
    const [loading, setLoading] = useState(false);
    const onFileUpload = (files: File[]) => {
        console.log(files);
        setFiles(files);
        setLoading(true);
    }
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
            
        </Box>
    );
}