import React, { ReactNode } from 'react';

interface FlexProps {
  direction: string;
  align: string;
  justify: string;
  children: ReactNode;
}

const Flex: React.FC<FlexProps> = (props) => {
  const direction = `direction-action-${props.direction}`;
  const align = `align-action-${props.align}`;
  const justify = `justify-action-${props.justify}`;

  return (
    <div className={`ds-flex ${direction} ${align} ${justify}`}>
      {props.children}
    </div>
  );
};

export default Flex;
