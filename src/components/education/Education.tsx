import React from "react";


// A react function component that takes no properties (no params to the function) and returns some JSX
// Memoized so it doesn't have to calculate what to render on every page re-render
export const Education: React.FunctionComponent = React.memo(() => {

   console.log('Education rendering');

    return (
    <div>
      <h2>Education</h2>
        <ul>
            <li>School 1</li>
            <li>School 2</li>
            <li>Uni</li>
        </ul>
    </div>
  );
});

// exporting the function as default as it makes the import look cleaner in my opinion in other files
export default Education;