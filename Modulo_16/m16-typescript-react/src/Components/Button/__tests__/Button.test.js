import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';
import '@testing-library/jest-dom'


test('renders button with default variation', () => {
  const { getByText } = render(<Button align="left" variation="primary">Click me</Button>);
  const button = getByText(/Comprar/);
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('btn align-left bg-green white');
});

test('renders button with secondary variation', () => {
  const { getByText } = render(<Button align="center" variation="secondary">Click me</Button>);
  const button = getByText(/Comprar Agora/);
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('btn align-center bg-hot-pink white');
});

test('renders button with tertiary variation', () => {
  const { getByText } = render(<Button align="right" variation="tertiary">Click me</Button>);
  const button = getByText(/Colocar no Carrinho/);
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('btn align-right bg-blue white');
});

test('handles click event', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button align="left" variation="primary" onClick={handleClick}>Click me</Button>);
  const button = getByText(/Comprar/);
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
