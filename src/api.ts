const API = import.meta.env.VITE_API_BASE_URL || "https://rag-api-agcfrxhq4q-uc.a.run.app";

export async function health() {
    const r = await fetch(`${API}/health`, { credentials: "include" });
    if (!r.ok) throw new Error("health_failed");
    return r.json();
}

export async function getFiles() {
    const r = await fetch(`${API}/uploads`, { credentials: "include" });
    if (!r.ok) throw new Error("getFiles_failed");
    return r.json();
}

// post a file
export async function postFile(file: File) {
    const form = new FormData();
    form.append("file", file);
    const r = await fetch(`${API}/upload_document`, {
        method: "POST",
        body: form,
        credentials: "include",
    });
    if (!r.ok) throw new Error("postFile_failed");
    return r.json();
}

// post a query string as q
export async function postQuery(query: string) {
    const r = await fetch(`${API}/query_documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({query}),
        credentials: "include",
    });
    if (!r.ok) throw new Error("postQuery_failed");
    return r.json();
}