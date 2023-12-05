import React, { useState } from "react";

const Modal = ({ onSubmit, onClose, menu }) => {
  if (!menu) {
    return null;
  }

  const [numPeople, setNumPeople] = useState(1);

  const handleNumPeopleChange = (e) => {
    setNumPeople(parseInt(e.target.value, 10));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://tu-servidor.com/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`, // Ajusta según tus necesidades
        },
        body: JSON.stringify({
          date: new Date().toISOString(), // Puedes ajustar la fecha según tus necesidades
          num_people: numPeople,
          total_amount: menu.price * numPeople,
          receipt: "generar_recibo", // Ajusta cómo generas el recibo
          status: "A", // Estado inicial, ajusta según tus necesidades
          client_id: tuClientId, // Ajusta según tu lógica
          person_id: tuPersonId, // Ajusta según tu lógica
          menu_offered_id: menu.id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        onSubmit(data);
      } else {
        console.error("Error al procesar la reserva:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Detalles del Menú</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>ID del Menú: {menu.id}</p>
            <p>Precio: {menu.price}</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="numPeople" className="form-label">
                  Número de Personas:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="numPeople"
                  value={numPeople}
                  onChange={handleNumPeopleChange}
                  min="1"
                  max="10"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Confirmar reserva
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
