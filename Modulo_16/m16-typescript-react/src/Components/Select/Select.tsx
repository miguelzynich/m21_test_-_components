import React, { ReactNode } from 'react';
import Flex from '../Flex/Flex';
import 'tachyons/css/tachyons.min.css';
import './Select.css';

enum ActionVariation {
  Primary = 'primary',
}

enum ActionSize {
  Large = 'large',
}

enum ActionFontSize {
  Medium = 'medium',
}

interface SelectProps {
  direction: string;
  variation: ActionVariation;
  size: ActionSize;
  fSize: ActionFontSize;
  id: string;
  labelText: string;
  children: ReactNode;
}

const Select: React.FC<SelectProps> = (props) => {
  const color = `color-action-${props.variation}`;
  const size = `size-action-${props.size}`;
  const fSize = `fSize-action-${props.fSize}`;

  return (
    <Flex direction={props.direction} align="center" justify="center">
      <label className={`f4 ${color} ${fSize} db mb2 mt3 mh3`} htmlFor={props.id}>
        {props.labelText}
      </label>
      <select className={`ba ${color} ${size} ${fSize} f5 fl w-20 mh3`} id={props.id} data-testid="mySelect">
        <option value=''></option>
        {props.children}
      </select>
    </Flex>
  );
}

export default Select;
