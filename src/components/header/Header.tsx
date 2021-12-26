import "./style.css";

function Header() {
  return (
    <header className="app-header">
      <div className="app-links">
        <a href="#">Home</a>
        <a href="#">Tour</a>
        <a href="#">Blog</a>
      </div>
      <div className="user-action-btns">
        <button className="btn signin-btn">Sign up</button>
        <button className="btn login-btn">Log in</button>
      </div>
    </header>
  );
}

export default Header;
