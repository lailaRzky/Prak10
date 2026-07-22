import { useState } from 'react';

const initialFormState = {
  title: '',
  description: '',
  priority: 'low',
  dueDate: '',
};

function TodoForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Title wajib diisi!');
      return;
    }

    
    const payload = { ...formData };
    if (!payload.dueDate) delete payload.dueDate;

    onSubmit(payload);
    setFormData(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>Tambah Todo</h3>

      <div style={styles.formGroup}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Masukkan judul todo"
          style={styles.input}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Masukkan deskripsi (opsional)"
          style={styles.textarea}
          rows="3"
        />
      </div>

      <div style={styles.grid}>
        <div style={styles.formGroup}>
          <label>Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
      </div>

      <button type="submit" disabled={loading} style={styles.submitButton}>
        {loading ? 'Menyimpan' : 'Tambah'}
      </button>
    </form>
  );
}

const styles = {
  form: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default TodoForm;
