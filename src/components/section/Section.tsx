import React from 'react';

interface SectionProps {
    title: string;
}

export const Section: React.FunctionComponent<SectionProps> = React.memo((props) => {
    const { title } = props;

    return <div>
        <h2>{title}</h2>
        <div>{props.children}</div>
    </div>
})