import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);

    // Destructuring the necessary functions from the useTodo context
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    // Function to update the todo item when editing is done
    const editTodo = () => {
        // Calling updateTodo with the updated message and toggling off edit mode
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false); // Once editing is complete, we disable the edit mode
    };

    // Function to toggle the completed state of the todo item
    const toggleCompleted = () => {
        toggleComplete(todo.id); // This toggles the completed status of the todo
    };

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            {/* Checkbox to mark the todo as completed or not */}
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted} // Calls toggleCompleted function when the checkbox is toggled
            />

            {/* Input field for editing the todo message */}
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg} // The input value is bound to todoMsg state
                onChange={(e) => setTodoMsg(e.target.value)} // Updates todoMsg when the input value changes
                readOnly={!isTodoEditable} // Only editable when isTodoEditable is true
            />

            {/* Button to toggle between editing and saving the todo */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return; // If the todo is completed, prevent editing
                    if (isTodoEditable) {
                        editTodo(); // If currently editable, save the changes
                    } else {
                        setIsTodoEditable((prev) => !prev); // Otherwise, toggle edit mode
                    }
                }}
                disabled={todo.completed} // Disable the button when the todo is marked as completed
            >
                {isTodoEditable ? "📁" : "✏️"} {/* Shows different icons based on edit mode */}
            </button>

            {/* Button to delete the todo */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)} // Calls deleteTodo to remove the todo from the list
            >
                ❌ {/* Delete icon */}
            </button>
        </div>
    );
}

// PropTypes validation for TodoItem component
TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // id can be string or number and is required
        todo: PropTypes.string.isRequired, // todo is a required string
        completed: PropTypes.bool.isRequired // completed is a required boolean
    }).isRequired // todo object is required
};

export default TodoItem;
