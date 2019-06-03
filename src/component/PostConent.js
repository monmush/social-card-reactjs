import React from 'react';
import image from '../assets/img/post.png'
const PostConent = () => {
  return (
    <div className="post-content">
      <p>Learning React? Start small.</p>
      <p>{"Author: "}
        <a href="/">@daveceddia</a>
      </p>
      <div href="" className="shared-post">
        <a href="">
          <img src={image} alt=""/>
          <h6 className="bold">Learning React? Start Small.</h6>
          <p>Can't pry yourself away from the tutorials? The cure is to make tiny little
            experiment apps.</p>
        </a>

        <p className="grey">dev.to</p>
      </div>
    </div>

  )
}

export default PostConent;
