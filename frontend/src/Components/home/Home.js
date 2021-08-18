import React from 'react';
import "./Home.css";

function Home({userDetails}) {
  console.log(userDetails.id)
  return (
    <div className="home">
      <h1>Hello User </h1>
      <div className="button" onClick={() => userDetails({})} >Logout</div>
    </div>
  )
}

export default Home
