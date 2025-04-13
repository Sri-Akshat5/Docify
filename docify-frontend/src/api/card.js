import axios from 'axios';

const API_URI = "https://docify-g95p.onrender.com/api/cards";

export const getCards = async function () {
    const token = localStorage.getItem('token');

    try {
        const response = await axios.get(`${API_URI}/cards`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return { success: true, cards: response.data };
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Failed to fetch cards"
        };
    }
};

export const createCard = async function (text) {
    const token = localStorage.getItem("token");
    const title = text.split(" ").slice(0, 3).join(" ");

    try {
        const response = await axios.post(
            `${API_URI}/post`,
            { title, description: text },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return {
            success: true,
            message: response.data.message,
            card: response.data.card
        };
    } catch (err) {
        return {
            success: false,
            message: err.response?.data?.message || "Failed to create card"
        };
    }
};


export async function deleteCard(id){
    const res = await fetch(`${API_URI}/delete/${id}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
    });
    const data = await res.json();
    return data;
};

export async function editCard(id, data) {
    const res = await fetch(`${API_URI}/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
  
    return res.json();
  };
  
  