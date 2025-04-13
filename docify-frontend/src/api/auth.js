import axios from 'axios';

const API_URI = "https://docify-g95p.onrender.com/api/auth";

export const registerUser = async function(name, email, password){
    try {
        const response = await axios.post( `${API_URI}/register`, {name, email, password});
        return {success: true, message: response.data.message};
    } catch (error) {
        return {success: false, message: error.response?.data?.error || "Registration Failed! Try Again."};
    }
};

export const loginUser = async function(email, password){
    try{
        const response = await axios.post(`${API_URI}/login`, {email, password});
        
        return {success: true, message: response.data.message, token: response.data.token};
    } catch(error){
        return {success: false, message: error.response?.data?.error || "Login Failed!"};
    }
};

export const userAccount = async function(){
    try{
        const token = localStorage.getItem("token");  
        if (!token) return { success: false, message: "No token found" };

        const response = await axios.get(`${API_URI}/account`, { headers: { Authorization: `Bearer ${token}` } });
        console.log("Fetched User Data:", response.data);
        return {success: true, name: response.data.name, email: response.data.email};
        
        
    } catch(error) {
        return {success: false, message: error.response?.data?.error || "Invalid account"};
    }
}