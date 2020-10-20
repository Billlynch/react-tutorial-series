import React from "react";
import "./MainPage.css";

import Profile from "../../components/profile/Profile";

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tutorial CV</h1>
      </header>
      <Profile />
    </div>
  );
}

export default MainPage;
