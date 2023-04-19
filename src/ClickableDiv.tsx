import React from 'react';

interface ClickableDivProps {
    onClick: () => void;
    onKeyDown : (event: React.KeyboardEvent<HTMLDivElement>) => void;
    children: React.ReactNode;
    classnm: string;

    tabIndex: number;
}



