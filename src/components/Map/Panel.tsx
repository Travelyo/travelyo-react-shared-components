import React from 'react';

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  position?: 'top' | 'bottom';
}

const Panel = ({
  children,
  position = 'top',
  className,
}: PanelProps) => {

  return (
    <div className={`tsc-map-panel tsc-map-panel--${position}`}>
      <div className={`tsc-map-panel__content ${className}`}>
        {children}
      </div>
    </div>
  )
};

export default Panel;
