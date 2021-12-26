import './style.css'

function Card({ cardStatus, cardTitle } : { cardStatus: string, cardTitle: string }) {
  return (
    <div className="card-container">
      <div className="card-status">
        <div className={`${cardStatus}`}></div>
      </div>
      <div className="card-title">{ cardTitle }</div>
    </div>
  )
}

export default Card;