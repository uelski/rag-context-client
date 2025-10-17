import { useState } from "react";
import { postQuery } from "../../api";
import { useQuery } from "../../QueryContext";

export const useQueryInput = () => {
    const { setResponse, setLoading, setFileNamesList } = useQuery();
    const [query, setQuery] = useState("");
    const onQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuery(event.target.value);
    }
    const onQuerySubmit = async () => {
        setLoading(true);
        const response = await postQuery(query);
        // set context
        setResponse(response.answer);
        setFileNamesList(response.citations);
        setLoading(false);
    }
    return { query, onQueryChange, onQuerySubmit };
}