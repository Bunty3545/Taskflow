const API_URL = '/api/tasks';

// DOM Elements
const taskForm = document.getElementById('taskForm');
const taskIdInput = document.getElementById('taskId');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const taskList = document.getElementById('taskList');

// State
let isEditing = false;

// Event Listeners
document.addEventListener('DOMContentLoaded', fetchTasks);
taskForm.addEventListener('submit', handleFormSubmit);
cancelBtn.addEventListener('click', resetForm);

// Functions
async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        const tasks = await response.json();
        renderTasks(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        taskList.innerHTML = '<div class="loading">Error loading tasks. Please try again.</div>';
    }
}

function renderTasks(tasks) {
    if (tasks.length === 0) {
        taskList.innerHTML = '<div class="loading">No tasks found. Add a task to get started!</div>';
        return;
    }

    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        taskItem.innerHTML = `
            <div class="task-content">
                <div class="task-title">${escapeHTML(task.title)}</div>
                <div class="task-desc">${escapeHTML(task.description)}</div>
            </div>
            <div class="task-actions">
                <button class="action-btn complete-btn" onclick="toggleTaskStatus(${task.id}, ${task.completed})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button class="action-btn edit-btn" onclick="editTask(${task.id}, '${escapeHTML(task.title)}', '${escapeHTML(task.description)}')">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const taskData = {
        title: titleInput.value.trim(),
        description: descriptionInput.value.trim(),
        completed: false
    };

    try {
        if (isEditing) {
            const id = taskIdInput.value;
            // Fetch existing task to preserve 'completed' status
            const currentTaskRes = await fetch(`${API_URL}/${id}`);
            const currentTask = await currentTaskRes.json();
            taskData.completed = currentTask.completed;

            await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(taskData)
            });
        } else {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(taskData)
            });
        }
        
        resetForm();
        fetchTasks();
    } catch (error) {
        console.error('Error saving task:', error);
        alert('Failed to save task. Please try again.');
    }
}

async function toggleTaskStatus(id, currentStatus) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const task = await response.json();
        
        task.completed = !currentStatus;
        
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
        
        fetchTasks();
    } catch (error) {
        console.error('Error updating task status:', error);
    }
}

async function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }
}

function editTask(id, title, description) {
    isEditing = true;
    taskIdInput.value = id;
    titleInput.value = title;
    descriptionInput.value = description;
    
    submitBtn.textContent = 'Update Task';
    cancelBtn.style.display = 'inline-block';
    
    document.querySelector('.task-form-section').scrollIntoView({ behavior: 'smooth' });
}

function resetForm() {
    isEditing = false;
    taskForm.reset();
    taskIdInput.value = '';
    submitBtn.textContent = 'Add Task';
    cancelBtn.style.display = 'none';
}

function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
