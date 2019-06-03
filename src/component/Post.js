import React from 'react'
import Layout from '../component/Layout';
import UserInfo from '../component/UserInfo'
import PostContent from '../component/PostConent'

const Post = () => {
  return (
    <div>
      <Layout>
        <UserInfo/>
        <PostContent/>
      </Layout>
    </div>
  )
}

export default Post;