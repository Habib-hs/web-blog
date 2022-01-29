import SinglePost from "../../component/singlePost/SinglePost";
import Sidebar from "../../component/sidebar/Sidebar";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
