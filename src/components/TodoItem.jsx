function getPriorityBadge(priority) {
  const badges = {
    low: { color: '#28a745', label: 'Low' },
    medium: { color: '#ffc107', label: 'Medium' },
    high: { color: '#dc3545', label: 'High' },
  };
  return badges[priority] || badges.low;
}

function TodoItem({ todo, onToggle, onDelete, loading }) {
  const priority = getPriorityBadge(todo.priority);

  return (
    <div style={{ ...styles.todoItem, opacity: todo.completed ? 0.6 : 1 }}>
      <div style={styles.todoContent}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id, todo.completed)}
          style={styles.checkbox}
          disabled={loading}
        />
        <div style={styles.todoText}>
          <h4
            style={{
              ...styles.todoTitle,
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#888' : '#333',
            }}
          >
            {todo.title}
          </h4>
          {todo.description && (
            <p
              style={{
                ...styles.todoDescription,
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.description}
            </p>
          )}
          <div style={styles.todoMeta}>
            <span style={{ ...styles.priorityBadge, backgroundColor: priority.color }}>
              {priority.label}
            </span>
            {todo.dueDate && <span style={styles.dueDate}>{todo.dueDate}</span>}
            {todo.completed && <span style={styles.completedBadge}>Selesai</span>}
          </div>
        </div>
      </div>

      <button onClick={() => onDelete(todo.id)} style={styles.deleteButton} disabled={loading}>
        Hapus
      </button>
    </div>
  );
}

const styles = {
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    marginBottom: '10px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  },
  todoContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    flex: 1,
  },
  checkbox: {
    width: '20px',
    height: '20px',
    marginTop: '5px',
    cursor: 'pointer',
  },
  todoText: {
    flex: 1,
  },
  todoTitle: {
    margin: '0 0 5px 0',
    fontSize: '16px',
  },
  todoDescription: {
    margin: '0 0 8px 0',
    color: '#666',
    fontSize: '14px',
  },
  todoMeta: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  priorityBadge: {
    padding: '2px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    color: 'white',
  },
  dueDate: {
    fontSize: '12px',
    color: '#555',
  },
  completedBadge: {
    padding: '2px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    backgroundColor: '#28a745',
    color: 'white',
  },
  deleteButton: {
    padding: '6px 12px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '13px',
  },
};

export default TodoItem;
