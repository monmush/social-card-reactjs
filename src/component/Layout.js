import React from 'react'

const Layout = (props) => {
  return (
    <div className="Layout">
      <hr/>
        {props.children}
      <div className="icons">
        <i className="far fa-comment"></i>
        <i className="fas fa-retweet"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-envelope"></i>
      </div>
      <hr/>
    </div>
  )
}

export default Layout;

