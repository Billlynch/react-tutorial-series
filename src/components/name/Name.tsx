import React from 'react';

interface NameProps {
    name: string
    lastName?: string;
}

export const Name: React.FunctionComponent<NameProps> = React.memo((props) => {
    const { name, lastName } = props;

    return <div>
        <h1>{name}</h1>
        {!!lastName && <h2>{lastName}</h2>}
    </div>
});

export default Name;