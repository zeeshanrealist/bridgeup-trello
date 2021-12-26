import './style.css';

function BoardActivity({ handleShowSideMenuClick }: { handleShowSideMenuClick: any }) {
  return (
    <div className="side-menu-container">
      <div className="side-menu-title">
        <span>Menu</span>
        <span className="close-menu-icon" onClick={handleShowSideMenuClick}>X</span>
      </div>
      <div className="side-menu-content">
        <div className="board-info">
          <div className="info-links">About this board</div>
          <div className="info-links"><span>...</span> More</div>
        </div>
        <div className="board-activity-container">
          <div className="info-links activity-title">Activity</div>
          <div className="activity-card-container">
            <div className="activity-card">
              <div className="activity-user-icon">AH</div>
              <div className="activity-info">
                <div className="activity-text"><span className="username">Andew Hyde</span> made this board visible to the public</div>
                <div className="activity-timestamp">Mar 13, 2012 at 10:21 AM</div>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-user-icon">AH</div>
              <div className="activity-info">
                <div className="activity-text"><span className="username">Andew Hyde</span> added <span className="card-title">HelpDesk Call GG999</span> to Development</div>
                <div className="activity-timestamp">Mar 13, 2012 at 10:12 AM</div>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-user-icon">AH</div>
              <div className="activity-info">
                <div className="activity-text"><span className="username">Andew Hyde</span> added <span className="card-title">HelpDesk Call GG999</span> to Done</div>
                <div className="activity-timestamp">Mar 13, 2012 at 10:12 AM</div>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-user-icon">AH</div>
              <div className="activity-info">
                <div className="activity-text"><span className="username">Andew Hyde</span> added <span className="card-title">HelpDesk Call GG999</span> to Testing</div>
                <div className="activity-timestamp">Mar 13, 2012 at 10:12 AM</div>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-user-icon">AH</div>
              <div className="activity-info">
                <div className="activity-text"><span className="username">Andew Hyde</span> added <span className="card-title">HelpDesk Call GG999</span> to Development</div>
                <div className="activity-timestamp">Mar 13, 2012 at 10:12 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardActivity;
