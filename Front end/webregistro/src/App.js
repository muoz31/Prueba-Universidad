import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    identificacion: "",
    telefono: "",
    correo: "",
    direccion: "",
    genero: "",
    cargo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Datos registrados:\n
    Nombre: ${formData.nombre}\n
    Identificación: ${formData.identificacion}\n
    Teléfono: ${formData.telefono}\n
    Correo: ${formData.correo}\n
    Dirección: ${formData.direccion}\n
    Género: ${formData.genero}\n
    Cargo: ${formData.cargo}`);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>Formulario de Registro</h1>
        <img
           src={`${process.env.PUBLIC_URL}/cuestionario.jpg`} 
           alt="Logo"
          className="header-logo"
        />
      </header>

      {/* Formulario */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

          <label>Identificación:</label>
          <input type="text" name="identificacion" value={formData.identificacion} onChange={handleChange} required />

          <label>Teléfono:</label>
          <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} required />

          <label>Correo Electrónico:</label>
          <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />

          <label>Dirección:</label>
          <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />

          <label>Género:</label>
          <select name="genero" value={formData.genero} onChange={handleChange} required>
            <option value="">--Selecciona--</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>

          <label>Cargo:</label>
          <select name="cargo" value={formData.cargo} onChange={handleChange} required>
            <option value="">--Selecciona--</option>
            <option value="Profesor">Profesor</option>
            <option value="Estudiante">Estudiante</option>
          </select>

          <button type="submit">Enviar</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Correo electronico: Registrouniversidad@gmail.com - Teléfono:123456789</p>
        <p>Carrera 9 #21-02 Centro - Pereira - Risaralda - Colombia</p>
        <p>Síguenos en nuestras redes sociales: 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> | 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
