import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTtileLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/8633722/pexels-photo-8633722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Image"
      />
    </div>
  );
}
