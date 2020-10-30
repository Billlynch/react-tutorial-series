import React from 'react';

interface ExperienceProps {
    showAll: boolean;
}

const jobs = ['Job A', 'Job B', 'Job C'];

// Memoized so it doesn't have to calculate what to render on every page re-render
export const Experience: React.FunctionComponent<ExperienceProps> = React.memo((props) => {
    const { showAll } = props;

    console.log('Experience rendering');
    return <div>
        <h2>Experience</h2>
        <ul>
            {showAll ? jobs.map((j) => <li key={j}>{j}</li>) : <li key={jobs[0]}>{jobs[0]}</li>}
        </ul>
    </div>
});

export default Experience;