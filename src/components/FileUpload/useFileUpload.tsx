import { useState } from "react";
import { postFile } from "../../api";

export const useFileUpload = () => {
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
    const onFileUpload = async (files: File[]) => {
        // loop through files and upload them
        setLoading(true);
        try {
            for (const file of files) {
                const response = await postFile(file);
                console.log(response);
                setFiles(prev => [...prev, file]);
                setUploadedFiles(prev => [...prev, response.file]);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    return { files, uploadedFiles, onFileUpload, loading };
}