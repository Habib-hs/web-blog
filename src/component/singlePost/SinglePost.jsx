import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="/img/1.jpg" alt="no image yet" />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostDate">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostAuthor">2 Hours ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          consequuntur fugiat aspernatur maxime vero. Architecto laborum et
          ratione libero aliquid. Provident enim sunt iusto debitis repellat
          consectetur, architecto corporis suscipit consequuntur molestias harum
          laudantium a laboriosam laborum! Accusamus distinctio doloremque
          quibusdam architecto. Corporis dolore similique a sequi, ad ducimus
          soluta! Laborum esse praesentium vel repellendus cum nihil impedit
          voluptatibus perferendis voluptates. Quibusdam blanditiis ex
          temporibus? Enim, beatae quod libero dolorum quos ratione odit eveniet
          alias doloribus deserunt! Quaerat quisquam iusto eum illum quo. Id,
          cumque dolorum? Facere illum optio saepe blanditiis expedita iure in
          necessitatibus? Eligendi sint tempora aut quo!
        </p>
      </div>
    </div>
  );
}
