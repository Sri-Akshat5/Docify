import axios from 'axios';

const API_URI = "http://localhost:5000/api/ai";

export async function generateCardFromAI(prompt) {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URI}/generate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ prompt })
    });
    if (!res.ok) throw new Error("Failed to generate card from AI");
    return await res.json();
}
