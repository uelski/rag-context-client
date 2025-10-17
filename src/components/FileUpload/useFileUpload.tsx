import { useState } from "react";
import { postFile } from "../../api";
import { useFiles } from "../../hooks";

export const useFileUpload = () => {
    const [loading, setLoading] = useState(false);
    const { uploadedFiles, loading: loadingFiles, refetch } = useFiles()
    
    const onFileUpload = async (files: File[]) => {
        // loop through files and upload them
        setLoading(true);
        try {
            for (const file of files) {
                await postFile(file);
            }
            await refetch()
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    return { uploadedFiles, onFileUpload, loading, loadingFiles };
}