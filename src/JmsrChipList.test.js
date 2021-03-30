import React from 'react';
import { render, screen } from '@testing-library/react';
import JmsrChipList from './JmsrChipList';

jest.mock('./JmsrChipList.module.scss', () => ({
  'tags': 'tags',
  'tag': 'tag'
}));

test('renders chip content', () => {
  // Arrange
  const chips = [{ content: 'A' }];

  // Action
  render(<JmsrChipList chips={chips} />);
  const contentElement = screen.getByText(chips[0].content);

  // Assert
  expect(contentElement).toBeInTheDocument();
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
  const foundChips = chips.map(chipContent => screen.getByText(chipContent.content));

  expect(foundChips.length).toEqual(chips.length);
});

test('renders no chip', () => {
  const chips = [];

  const { container } = render(<JmsrChipList chips={chips} />);

  expect(container).toBeEmptyDOMElement();
});

test('renders a chip with full custom style', () => {
  const chips = [{ content: 'A', type: 'customType' }];
  const defaultClassName = 'custom-class extra-class';
  const customTypes = { customType: defaultClassName };
  const customCssModuleMock = {
    'tag': 'tag',
    'tags': 'tags',
    'custom-class': 'custom-class',
    'extra-class': 'extra-class'
  };

  render(<JmsrChipList chips={chips} customTypes={customTypes} cssModule={customCssModuleMock} />);
  const contentElement = screen.getByText(chips[0].content);

  expect(contentElement).toHaveClass(`tag ${defaultClassName}`);
});

test('renders a chip with partial custom style', () => {
  const chips = [{ content: 'A', type: 'customType' }];
  const defaultClassName = 'custom-class extra-class';
  const customTypes = { customType: defaultClassName };
  const customCssModuleMock = {
    'custom-class': 'custom-class',
    'extra-class': 'extra-class'
  };

  render(<JmsrChipList chips={chips} customTypes={customTypes} cssModule={customCssModuleMock} />);
  const contentElement = screen.getByText(chips[0].content);

  expect(contentElement).toHaveClass(`tag ${defaultClassName}`);
});

test('renders a chip with external style', () => {
  const chips = [{ content: 'A', type: 'customType' }];
  const chipClassTypes = 'custom-class extra-class';
  const globalClassName = 'global-class';
  const fullChipClassName = `${chipClassTypes} ${globalClassName}`;
  const customTypes = { customType: fullChipClassName };
  const customCssModuleMock = {
    'custom-class': 'custom-class',
    'extra-class': 'extra-class'
    // Notice that 'global-class' is not defined in this CSS module. Assumed to be a global class
  };

  render(<JmsrChipList chips={chips} customTypes={customTypes} cssModule={customCssModuleMock} />);
  const contentElement = screen.getByText(chips[0].content);

  expect(contentElement).toHaveClass(`tag ${fullChipClassName}`);
});

test('renders custom nav element', () => {
  const chips = [{ content: 'I\'m a nav tag' }];
  const elementTag = 'nav';

  render(<JmsrChipList chips={chips} listTagName={elementTag} />);
  const contentElement = screen.getByText(chips[0].content);

  expect(contentElement.parentElement.tagName.toLowerCase()).toBe(elementTag);
});
