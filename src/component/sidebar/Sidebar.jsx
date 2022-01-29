import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="/img/2.jpg" alt="image not found" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          aspernatur quae ratione fugiat ipsam minus nemo necessitatibus
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sideIcon fab fa-facebook-square"></i>
          <i className="sideIcon fab fa-twitter-square"></i>
          <i className="sideIcon fab fa-pinterest"></i>
          <i className="sideIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
