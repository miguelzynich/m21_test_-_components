import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Select from '../../Select/Select';

test('renders Select component with given props', () => {
  const { getByTestId } = render(
    <Select
      direction="row"
      variation="primary"
      size="large"
      fSize="medium"
      id="mySelect"
      labelText="Select an option"
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </Select>
  );

  const selectElement = getByTestId('mySelect');

  expect(selectElement.getAttribute('class')).toBe('ba color-action-primary size-action-large fSize-action-medium f5 fl w-20 mh3');
});

test('renders Select component with missing labelText prop', () => {
  const { queryByTestId, queryByText } = render(
    <Select
      direction="row"
      variation="primary"
      size="large"
      fSize="medium"
      id="mySelect"
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </Select>
  );

  expect(queryByTestId('mySelect')).not.toBeNull();
  expect(queryByText('Select an option')).toBeNull();
});

test('Select component matches Snapshot', () => {
  const tree = renderer
    .create(
      <Select
        direction="row"
        variation="primary"
        size="large"
        fSize="medium"
        id="mySelect"
        labelText="Select an option"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
