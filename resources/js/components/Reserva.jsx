import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ReservationForm = () => {
  const [date, setDate] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [receipt, setReceipt] = useState('');
  const [status, setStatus] = useState('');
  const [clientId, setClientId] = useState('');
  const [personId, setPersonId] = useState('');
  const [menuOfferedId, setMenuOfferedId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      numPeople,
      totalAmount,
      receipt,
      status,
      clientId,
      personId,
      menuOfferedId,
    };
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Fecha:</label>
        <input type="datetime-local" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>

      <div>
        <label htmlFor="numPeople">Número de personas:</label>
        <input type="number" id="numPeople" value={numPeople} onChange={(e) => setNumPeople(e.target.value)} required />
      </div>

      <div>
        <label htmlFor="totalAmount">Total:</label>
        <input type="text" id="totalAmount" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} required />
      </div>

      <div>
        <label htmlFor="receipt">Recibo:</label>
        <input type="text" id="receipt" value={receipt} onChange={(e) => setReceipt(e.target.value)} required />
      </div>

      <div>
        <label htmlFor="status">Estado:</label>
        <input type="text" id="status" value={status} onChange={(e) => setStatus(e.target.value)} required />
      </div>

      <div>
        <label htmlFor="clientId">ID del Cliente:</label>
        <input type="number" id="clientId" value={clientId} onChange={(e) => setClientId(e.target.value)} required />
      </div>

      <div>
        <label htmlFor="personId">ID de la Persona:</label>
        <input type="number" id="personId" value={personId} onChange={(e) => setPersonId(e.target.value)} required />
      </div>

      <div>
        <label htmlFor="menuOfferedId">ID del Menú Ofrecido:</label>
        <input type="number" id="menuOfferedId" value={menuOfferedId} onChange={(e) => setMenuOfferedId(e.target.value)} required />
      </div>

      <button type="submit">Hacer Reserva</button>
    </form>
  );
};

const App = () => {
  return (
    <div>
      <h1>Formulario de Reserva</h1>
      <ReservationForm />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
