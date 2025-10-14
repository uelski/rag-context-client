import { useState } from "react";
import { postQuery } from "../../api";
import { useQuery } from "../../QueryContext";

export const useQueryInput = () => {
    const { setResponse } = useQuery();
    const [query, setQuery] = useState("");
    const onQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuery(event.target.value);
    }
    const onQuerySubmit = async () => {
        const response = await postQuery(query);
        console.log(response);
        // set context
        setResponse(response);
    }
    return { query, onQueryChange, onQuerySubmit };
}