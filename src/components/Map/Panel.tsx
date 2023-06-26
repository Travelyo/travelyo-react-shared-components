import React from 'react';

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  position?: 'top' | 'bottom';
}

const Panel = ({
  children,
  position = 'top',
}: PanelProps) => {

  return (
    <div className={`tsc-map-panel tsc-map-panel--${position}`}>
      {children}
    </div>
  )
};

export default Panel;
