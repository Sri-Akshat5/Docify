const API_URI = "https://docify-g95p.onrender.com/api/files";

export async function uploadCardFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  const token = localStorage.getItem("token"); 

  const res = await fetch(`${API_URI}/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`, 
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Upload Failed");
  }

  return await res.json();
}
