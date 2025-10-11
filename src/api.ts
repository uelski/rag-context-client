const API = import.meta.env.VITE_API_BASE_URL || "localhost:8000";

export async function health() {
    const r = await fetch(`${API}/health`);
    if (!r.ok) throw new Error("health_failed");
    return r.json();
}

// post a file
export async function postFile(file: File) {
    const r = await fetch(`${API}/upload_document`, {
        method: "POST",
        body: file,
    });
    if (!r.ok) throw new Error("postFile_failed");
    return r.json();
}

// post a query string as q
export async function postQuery(query: string) {
    const r = await fetch(`${API}/query`, {
        method: "POST",
        body: JSON.stringify({q: query}),
    });
    if (!r.ok) throw new Error("postQuery_failed");
    return r.json();
}