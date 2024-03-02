import React, { useState } from "react";

function UpladForm() {
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
}

function ReactFormComponent() {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="image">Image:</label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReactFormComponent;
