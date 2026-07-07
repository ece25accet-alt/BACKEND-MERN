import React, { useState } from 'react';
import './App.css';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({ name: '', category: '', dueDate: '' });
  const [editingId, setEditingId] = useState(null);


  const [searchInput, setSearchInput] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.dueDate) return;

    if (editingId) {
      setTasks(tasks.map(t => t.id === editingId ? { ...formData, id: editingId } : t));
      setEditingId(null);
    } else {
      setTasks([...tasks, { ...formData, id: Date.now() }]);
    }
    setFormData({ name: '', category: '', dueDate: '' });
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setFormData({ name: task.name, category: task.category, dueDate: task.dueDate });
  };

  const deleteTask = (e) => setTasks(tasks.filter(t => t.id !== e));


  const handleSearch = (e) => {
    e.preventDefault();
    setAppliedSearch(searchInput);
  };

  
  const filteredTasks = appliedSearch
    ? tasks.filter(task => task.name.toLowerCase().includes(appliedSearch.toLowerCase()))
    : tasks;

  return (
    <main className="app-shell">
      <section className="task-panel">
        <div className="panel-header flex justify-center">
          <h2>Task Manager</h2>
        </div>
     
        <form className="task-form" onSubmit={handleSubmit}>
          <input placeholder="Task Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
          <select 
          value={formData.category} 
          required 
          onChange={(e) => setFormData({...formData, category: e.target.value})}
        >
        
          <option value="" disabled>Select option below</option>
          <option value="Study">Study</option>
          <option value="Health">Health</option>
          <option value="Entertainment">Entertainment</option>
        </select>
          <input type="date" value={formData.dueDate} onChange={(e) => setFormData({...formData, dueDate: e.target.value})} required />
          <button className="glow-button primary" type="submit">{editingId ? 'Update Task' : 'Add Task'}</button>
        </form>

        
        <form className="search-form" onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', margin: '20px 0' }}>
          <input 
            placeholder="Search task name..." 
            value={searchInput} 
            onChange={(e) => setSearchInput(e.target.value)} 
            style={{ flex: 1 }}
          />
          <button className="glow-button primary" type="submit">Search</button>
          {appliedSearch && (
            <button 
              className="glow-button secondary" 
              type="button" 
              onClick={() => { setSearchInput(''); setAppliedSearch(''); }}
            >
              Clear
            </button>
          )}
        </form>

        {/* 5. Rendered filtered tasks instead of all tasks */}
        <div className="task-list">
          {filteredTasks.length === 0 && (
            <p className="empty-state">
              {tasks.length === 0 
                ? "No tasks yet." 
                : "No tasks match your search query."}
            </p>
          )}
          {filteredTasks.map(task => (
            <article className="task-card" key={task.id}>
              <div>
                <h3>{task.name}</h3>
                <p>Category: {task.category} <span>|</span> Due: {task.dueDate}</p>
              </div>
              <div className="task-actions">
                <button className="glow-button secondary" onClick={() => startEdit(task)}>Edit</button>
                <button className="glow-button danger" onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}