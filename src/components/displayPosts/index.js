import React from 'react';


const displayPosts = ({posts}) => {
  const renderPosts = posts && posts.length ?
  posts.map((post, idx) => <li key={idx}>{post.name}</li>)
  : [];
 return (
   <div className='post-container' data-test='posts-component'>
     <h5>Posts</h5>
     <ul className='posts'>
       {renderPosts}
     </ul>
   </div>
 )
};

export default displayPosts;