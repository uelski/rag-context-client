import { useState } from "react";
import { postFile } from "../../api";

export const useFileUpload = () => {
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const [filenames, setFilenames] = useState<string[]>([]);
    const onFileUpload = async (files: File[]) => {
        // loop through files and upload them
        setLoading(true);
        for (const file of files) {
            const response = await postFile(file);
            console.log(response);
            setFiles(prev => [...prev, file]);
            setFilenames(prev => [...prev, response.filename]);
        }
        setLoading(false);
    }
    return { files, filenames, onFileUpload, loading };
}