import * as React from 'react';
import Position from './Position';

export interface IAppProps {
    st?: string;
}

export function PreferredPosition(props: IAppProps) {
    return (
        <>
            <Position />
        </>
    );
}
