function BoardHeader(
  {
    searchText,
    handleSearchTextChange,
    handleShowSideMenuClick,
    toggleAddCardPopup
  } :
  {
    searchText: string,
    handleSearchTextChange: any,
    handleShowSideMenuClick: any
    toggleAddCardPopup: any
  }) {
  return (
    <div className="board-header">
      <div className="float-left left-block-header">
        <div className="board-header-title">Kanban Board</div>
        <span className="divider"></span>
        <a href="#" className="board-header-btn">
          <span className="btn-text">Public</span>
        </a>
        <span className="divider"></span>
        <a href="#" className="user-member">
          <span className="user-member-title">AH</span>
        </a>
        <span className="divider"></span>
        <input
          type="text"
          value={searchText}
          onChange={(evt) => handleSearchTextChange(evt.target.value)}
          placeholder="Search cards by title"
        />
        <span className="divider"></span>
        <button onClick={toggleAddCardPopup} className="btn add-card-header-btn">Add Card</button>
      </div>
      <div className="float-right right-block-header">
        <span className="divider"></span>
        <button className="filter-btn btn">
          <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.61799 6C3.87461 6 3.39111 6.78231 3.72356 7.44721L3.99996 8H20L20.2763 7.44721C20.6088 6.78231 20.1253 6 19.3819 6H4.61799ZM10.8618 17.7236C10.9465 17.893 11.1196 18 11.309 18H12.6909C12.8803 18 13.0535 17.893 13.1382 17.7236L14 16H9.99996L10.8618 17.7236ZM17 13H6.99996L5.99996 11H18L17 13Z" fill="currentColor"></path>
          </svg>
          Filter
        </button>
        <button className="sidebar-btn btn" onClick={handleShowSideMenuClick}>
          <span className="sidebar-icon">...</span>
          Show menu
        </button>
      </div>
    </div>
  );
}

export default BoardHeader;
