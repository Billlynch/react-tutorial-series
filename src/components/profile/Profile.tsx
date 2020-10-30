import React from "react";

// import the CSS for this component, this is so webpack knows to bundle the styles.
import "./Profile.css";
import Name from "../name/Name";

// A react function component that takes no properties (no params to the function) and returns some JSX
export const Profile: React.FunctionComponent = () => {

    console.log('Profile rendering');
  return (
    <div className="profile">
      <h2>Profile</h2>
        <Name name="First" lastName="Last" />
      <p>Some Profile information here [ fill in if you want :) ]</p>
    </div>
  );
};

// exporting the function as default as it makes the import look cleaner in my opinion in other files
export default Profile;
