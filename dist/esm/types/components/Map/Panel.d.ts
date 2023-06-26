import React from 'react';
interface PanelProps {
    children: React.ReactNode;
    className?: string;
    position?: 'top' | 'bottom';
}
declare const Panel: ({ children, position, }: PanelProps) => React.JSX.Element;
export default Panel;
