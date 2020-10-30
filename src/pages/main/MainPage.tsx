import React, {useState} from "react";
import "./MainPage.css";

import Profile from "../../components/profile/Profile";
import Education from "../../components/education/Education";
import Experience from "../../components/experience/Experience";

function MainPage() {
    const [showAllExperience, setShowAllExperience] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tutorial CV</h1>
      </header>
        <div>
            <label>Show all jobs?</label>
            <input type="checkbox" checked={showAllExperience} onChange={(e) => setShowAllExperience(e.target.checked)}/>
        </div>
      <Profile />
      <Experience showAll={showAllExperience}/>
      <Education />
    </div>
  );
}

export default MainPage;
