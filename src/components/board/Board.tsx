import BoardHeader from './BoardHeader';
import BoardActivity from '../boardActivity/BoardActivity';
import Panel from '../panel/Panel';
import AddCard from '../addCard/AddCard';
import './style.css';
import { useState } from 'react';

export type ICard = {
  id: number;
  cardTitle: string;
  cardStatus: string;
  panelStatus: string;
}

function Board() {
  const [ searchText, setSearchText ] = useState<string>('');
  const [ isSideMenuVisible, setIsideMenuVisible ] = useState<boolean>(false);
  const [ isAddCardPopupVisible, setIsAddCardPopupVisible ] = useState<boolean>(false);
  const [ cards, setCards ] = useState<ICard[]>(JSON.parse(localStorage.getItem('cards') as string) as ICard[] || ([
    {
      "id": 1,
      "cardTitle": "HelpDesk Call AA999",
      "cardStatus": "blue-status",
      "panelStatus": "toDo"
    },
    {
      "id": 2,
      "cardTitle": "HelpDesk Call CC999",
      "cardStatus": "red-status",
      "panelStatus": "toDo"
    },
    {
      "id": 3,
      "cardTitle": "HelpDesk Call AA999",
      "cardStatus": "blue-status",
      "panelStatus": "development"
    },
    {
      "id": 4,
      "cardTitle": "HelpDesk Call CC999",
      "cardStatus": "red-status",
      "panelStatus": "development"
    },
    {
      "id": 5,
      "cardTitle": "HelpDesk Call AA999",
      "cardStatus": "blue-status",
      "panelStatus": "testing"
    },
    {
      "id": 6,
      "cardTitle": "HelpDesk Call CC999",
      "cardStatus": "red-status",
      "panelStatus": "testing"
    },
    {
      "id": 7,
      "cardTitle": "HelpDesk Call AA999",
      "cardStatus": "blue-status",
      "panelStatus": "done"
    },
    {
      "id": 8,
      "cardTitle": "HelpDesk Call CC999",
      "cardStatus": "red-status",
      "panelStatus": "done"
    }
  ]));
  const [filteredCards, setFilteredCards] = useState<ICard[]>(JSON.parse(JSON.stringify(cards)));

  function handleSearchTextChange(searchText: string) {
    setSearchText(searchText);
    setFilteredCards(cards.filter((card: ICard) => card.cardTitle.includes(searchText)));
  }

  function handleShowSideMenuClick() {
    setIsideMenuVisible(!isSideMenuVisible);
  }

  function addCard({ cardTitle, cardStatus, panelStatus }: { cardTitle: string, cardStatus: string, panelStatus: string }) {
    const cardsCpy = JSON.parse(JSON.stringify(cards));
    cardsCpy.push({
      id: cards.length + 1,
      cardTitle,
      cardStatus,
      panelStatus
    });
    setCards(cardsCpy);
    localStorage.setItem('cards', JSON.stringify(cardsCpy));
    if (searchText) {
      handleSearchTextChange(searchText);
    } else {
      setFilteredCards(cardsCpy);
    }
  }

  function toggleAddCardPopup() {
    setIsAddCardPopupVisible(!isAddCardPopupVisible);
  }

  return (
    <div className='board-container'>
      <>
        <BoardHeader
          searchText={searchText}
          handleSearchTextChange={handleSearchTextChange}
          toggleAddCardPopup={toggleAddCardPopup}
          handleShowSideMenuClick={handleShowSideMenuClick}
        />
        <div className="panels-section">
          <Panel
            panelName="To Do"
            cards={filteredCards.filter((card: ICard) => card.panelStatus === 'toDo')}
          />
          <Panel
            panelName="Development"
            cards={filteredCards.filter((card: ICard) => card.panelStatus === 'development')}
          />
          <Panel
            panelName="Testing"
            cards={filteredCards.filter((card: ICard) => card.panelStatus === 'testing')}
          />
          <Panel
            panelName="Done"
            cards={filteredCards.filter((card: ICard) => card.panelStatus === 'done')}
          />
        </div>
        { isSideMenuVisible && <BoardActivity handleShowSideMenuClick={handleShowSideMenuClick} /> }
      </>
      {
        isAddCardPopupVisible &&
        <AddCard
          toggleAddCardPopup={toggleAddCardPopup}
          addCard={addCard}
        />
      }
    </div>
  );
}

export default Board;
