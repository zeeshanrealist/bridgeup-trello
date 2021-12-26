import Card from '../card/Card';
import './style.css';
import { ICard } from '../board/Board';

function Panel({ panelName, cards }: { panelName: string, cards: ICard[] }) {
  return (
    <div className="panel">
      <div className="panel-header">{ panelName }</div>
      <div className="panel-cards-section">
        {
          cards.map((card: ICard) =>
            <Card
              key={card.id}
              cardStatus={card.cardStatus}
              cardTitle={card.cardTitle}
            />
          )
        }
      </div>
    </div>
  )
}

export default Panel;
