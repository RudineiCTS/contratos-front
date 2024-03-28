import React, { useState } from 'react';


const CascadeForm = () => {
  const [formVisible, setFormVisible] = useState(true);

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Formulário</h2>
        <button onClick={toggleFormVisibility}>
          {formVisible ? 'Recolher' : 'Expandir'}
        </button>
      </div>
      {formVisible && (
        <form>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome" />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" placeholder="Digite sua mensagem"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default CascadeForm;
