import "./topbar.css";
export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
          <i className="topIcon fab fa-pinterest"></i>
          <i className="topIcon fab fa-instagram"></i>
        </div>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="/img/3.jpg" alt="img" />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
