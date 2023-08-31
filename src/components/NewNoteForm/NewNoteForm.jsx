import React, { useState } from "react";

const initialState = {
  text: "enter text here",
};

export default function NewNoteForm({ addNote }) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNote(formData);
    setFormData(initialState);
  }

  return (
    <form className="NewNoteForm" onSubmit={handleSubmit}>
      <label>Note</label>
      <input name="note" type= "textarea"  value= {formData.text} onChange={handleChange} />
      <button type="submit">ADD NOTE</button>
    </form>
  );
}