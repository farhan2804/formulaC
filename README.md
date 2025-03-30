
#  Todo List – Project Overview

This is a simple **Todo List** application built using **React.js** and styled with **CSS**. It allows users to add, delete, and manage tasks efficiently.



## 🛠️ Technologies Used

- **React.js** – For building the UI and managing state.
- **CSS** – For styling and responsiveness.


## 📂 Project Structure

```
/TodoList  
│── src/  
│   ├── components/  
│   │   ├── TodoList/  
│   │   │   ├── TodoList.jsx  # Main TodoList Component  
│   │   │   ├── TodoList.css  # Styling for TodoList  
│── public/  
│── package.json  
│── README.md  
```



## 🚀 Features

✅ Add new tasks
✅ Remove tasks
✅ Maximum task limit (5 tasks)
✅ User-friendly validation messages
✅ Responsive design for mobile screens



## 📝 Code Explanation

### 1️⃣ **React State Management (****`useState`****)**

- The component uses `useState` to manage:
  - `tasks` → Stores the list of tasks.
  - `data` → Stores user input.
  - `message` → Displays validation messages.

```jsx
const [data, setData] = useState("");
const [tasks, setTasks] = useState([]);
const [message, setMessage] = useState("");
```



### 2️⃣ **Adding a Task**

- Prevents adding empty tasks.
- Restricts the task list to 5 items.
- Displays a success message when a task is added.

```jsx
const handleClick = () => {
  if (!data.trim()) {
    setMessage("⚠️ Empty Tasks cannot be added");
    return;
  }
  
  if (tasks.length >= 5) {
    setMessage("⚠️ Delete Tasks to add more");
    return;
  }

  setTasks([...tasks, data]);
  setMessage("✅ Successfully Added the Task");
  setData("");
};
```



### 3️⃣ **Deleting a Task**

- Removes a task based on its index.
- Updates the state after deletion.

```jsx
const handleDelete = (id) => {
  setTasks(tasks.filter((_, index) => index !== id));
  setMessage("");
};
```



### 4️⃣ **Styling (CSS)**

- **Container Styling**: The todo list is wrapped inside a `.todo-container` with a clean design.
- **Input & Button**: Styled with borders, padding, and hover effects.
- **Task List**: Uses a `ul` and `li` structure for displaying tasks with delete buttons.
- **Responsiveness**: Uses `@media (max-width: 500px)` to adjust the layout for smaller screens.

```css
@media (max-width: 500px) {
  .todo-container {
    width: 90%;
    padding: 15px;
  }
  
  input {
    width: 70%;
    padding: 8px;
  }
  
  button {
    padding: 8px 12px;
    font-size: 14px;
  }
}
```



## 📦 Installation & Usage

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/todo-list.git
cd todo-list
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm start
```



## 🎯 Future Enhancements

🔹 Add task completion feature (mark as done)\
🔹 Implement local storage for persistence\
🔹 Improve UI with animations


