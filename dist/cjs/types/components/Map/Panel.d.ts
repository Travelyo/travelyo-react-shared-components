import React from 'react';
interface PanelProps {
    children: React.ReactNode;
    className?: string;
    position?: 'top' | 'bottom';
}
declare const Panel: ({ children, position, className, }: PanelProps) => React.JSX.Element;
export default Panel;
