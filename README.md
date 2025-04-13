# 📄 Docify – Smart Document Workspace with AI 🧠

Docify is an intelligent document management and editing web app where users can:
- ✏️ Create and edit documents manually
- 📤 Upload PDF/DOC files and extract content
- 🤖 Use AI to generate documents from prompts
- 📂 Organize and interact with docs
- 📥 Download docs in `.doc` format
- 🔁 Edit in-place without reloading
- 🗑️ Delete instantly 

Tech Stack:
- **React.js**, **TailwindCSS**, **Framer Motion**
- **Node.js**, **Express**, **MongoDB**
- **OpenRouter.ai** for AI text generation

---

## ✨ Features

### 🔐 Authentication
- User registration & login
- Session-based access to personal dashboard

### 📇 Doc System
- Draggable docs for each document
- Live edit title & description
- Save changes without refreshing
- Download docs content as a `.doc` file
- Delete instantly 

### 🧠 AI Textbox
- Enter prompts to generate document text using OpenRouter.ai
- Automatically creates a new docs with the response
- Smart title extracted from the first few words

### 📁 File Upload
- Upload `.pdf`, `.doc`, or `.docx` files
- Extracts and parses text into new docs

### 💡 Interactive Tour Guide
- Built using `Intro.js`
- Guides user through features like Create, Edit, AI, Upload, Download, Delete

### ⚙️ Dashboard
- Displays all docs for the logged-in user
- Real-time interactions (no need to refresh manually)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/docify.git
cd docify
```

### 2. Install Dependencies
```
npm install
```

### 3. Setup Environment Variables
```
Create a .env file for backend:
MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_key
```

### 4. Run the App
```
# Run backend
cd backend
npm start

# Run frontend
cd frontend
npm start
```

---
## 📌 Roadmap
- Add tags/categories to cards

- Collaborative editing

- Export all cards as ZIP or PDF bundle

- Dark/light theme toggle
