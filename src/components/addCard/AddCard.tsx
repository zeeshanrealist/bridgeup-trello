import { useState } from 'react';

function AddCard({ addCard, toggleAddCardPopup }: { toggleAddCardPopup: any, addCard: any }) {
  const [ cardTitle, setCardTitle ] = useState<string>('');
  const [ panelStatus, setPanelStatus ] = useState<string>('toDo');
  const [ cardStatus, setCardStatus ] = useState<string>('blue-status');

  function handleCardTitleChange(cardTitle: string) {
    setCardTitle(cardTitle);
  }

  function handleCardPanelStatusChange(panelStatus: string) {
    setPanelStatus(panelStatus);
  }

  function handleCardStatusChange(cardStatus: string) {
    setCardStatus(cardStatus);
  }

  function handleSubmit() {
    addCard({ cardStatus, cardTitle, panelStatus });
    closePopup();
  }

  function resetFormInputs() {
    setCardStatus('');
    setCardTitle('');
    setPanelStatus('toDo');
  }

  function closePopup() {
    resetFormInputs();
    toggleAddCardPopup();
  }

  return (
    <div className="add-card-container">
      <div className="add-card-title">
        <span>Add Card</span>
        <span className="close-popup-icon" onClick={closePopup}>X</span>
      </div>
      <div className="add-card-form">
        <div className="mb-20">
          <label>
            Card Title:
            <input
              type="text"
              value={cardTitle}
              onChange={(evt) => handleCardTitleChange(evt.target.value)}
              className="add-card-input"
            />
          </label>
        </div>
        <div className="mb-20">
          <label>
            <input
              type="radio"
              value="toDo"
              checked={panelStatus === "toDo"}
              onChange={(evt) => handleCardPanelStatusChange(evt.target.value)}
            />
            To Do
          </label>
          <label>
            <input
              type="radio"
              value="development"
              checked={panelStatus === "development"}
              onChange={(evt) => handleCardPanelStatusChange(evt.target.value)}
            />
            Development
          </label>
          <label>
            <input
              type="radio"
              value="testing"
              checked={panelStatus === "testing"}
              onChange={(evt) => handleCardPanelStatusChange(evt.target.value)}
            />
            Testing
          </label>
          <label>
            <input
              type="radio"
              value="done"
              checked={panelStatus === "done"}
              onChange={(evt) => handleCardPanelStatusChange(evt.target.value)}
            />
            Done
          </label>
        </div>
        <div className="mb-20">
          <label>
            <input
              type="radio"
              value="blue-status"
              checked={cardStatus === "blue-status"}
              onChange={(evt) => handleCardStatusChange(evt.target.value)}
            />
            Feature
          </label>
          <label>
            <input
              type="radio"
              value="red-status"
              checked={cardStatus === "red-status"}
              onChange={(evt) => handleCardStatusChange(evt.target.value)}
            />
            Fault
          </label>
        </div>
        <button onClick={handleSubmit} type="button" className="add-card-btn" disabled={!cardTitle || !panelStatus || !cardStatus}>Add</button>
      </div>
    </div>
  );
}

export default AddCard;
