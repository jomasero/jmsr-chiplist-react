import React from 'react';
import { render, screen } from '@testing-library/react';
import JmsrChipList from './JmsrChipList';

test('renders chip content', () => {
  // Arrange
  const chips = [{ content: 'A' }];

  // Action
  render(<JmsrChipList chips={chips} />);
  const contentElement = screen.getByText(chips[0].content);

  // Assert
  expect(contentElement).toBeInTheDocument();
});

test('renders chip custom style', () => {
  const chips = [{ content: 'A', type: 'custom-type' }];
  const customTypes = { 'custom-type': 'custom-class' };

  render(<JmsrChipList chips={chips} customTypes={customTypes} />);
  const contentElement = screen.getByText(chips[0].content);

  expect(contentElement.className).toBe('tag custom-class');
});

test('renders all the chips', () => {
  const chips = [
    { content: 'A' },
    { content: 'B' },
    { content: 'C' },
    { content: 'D' },
    { content: 'E' }
  ];

  render(<JmsrChipList chips={chips} />);
  const container = document.querySelectorAll('.tag');

  expect(container.length).toEqual(chips.length);
});

test('renders no chip', () => {
  const chips = [];

  const { container } = render(<JmsrChipList chips={chips} />);

  expect(container).toBeEmptyDOMElement();
});
