import React, { PropsWithChildren, ReactEventHandler } from 'react';
import 'tachyons/css/tachyons.min.css';
import './Button.css';

interface ButtonProps {
  align: string;
  variation: string;
  onClick?: ReactEventHandler;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ align, variation, children, onClick }) => {
  const btnClasses = `btn align-${align} ${getVariationClass(variation)} font-custom f5 link dim br3 bn ph5 ma3 b pv3 mb2 dib`;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Botão clicado!');
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className={btnClasses} onClick={handleClick}>
      {getTextByVariation(variation)} {children}
    </button>
  );
};

const getVariationClass = (variation: string): string => {
  switch (variation) {
    case 'primary':
      return 'bg-green white';
    case 'secondary':
      return 'bg-hot-pink white';
    case 'tertiary':
      return 'bg-blue white';
    default:
      return '';
  }
};

const getTextByVariation = (variation: string): string => {
  switch (variation) {
    case 'primary':
      return 'Comprar';
    case 'secondary':
      return 'Comprar Agora';
    case 'tertiary':
      return 'Colocar no Carrinho';
    default:
      return '';
  }
};

export default Button;
