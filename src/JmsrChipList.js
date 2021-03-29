import React from 'react';
import defaultStyles from './JmsrChipList.module.scss';

const defaultChipType = { defaultChip: 'is-white' };

const getAllTheClasses = (cssModule, classNames) =>
  classNames.split(' ').reduce(
    (names, className) => {
      const transformedName = cssModule[className];
      return `${names} ${transformedName ? `${transformedName}` : `${className}`}`;
    }, '');

const JmsrChipList = ({
  chips = [],
  customTypes = {},
  cssModule = {}
}) => {
  if (!chips || chips.length === 0) { return null; }

  const chipTypes = { ...defaultChipType, ...customTypes };

  const styledChips = chips.map((chip, index) => {
    const styleForChip = chipTypes[chip.type];
    const appliedStyle = styleForChip || chipTypes.defaultChip;
    return { ...chip, 'appliedStyle': appliedStyle, 'key': index };
  });

  const mergedStyles = { ...defaultStyles, ...cssModule };
  const { tags, tag } = mergedStyles;

  return (
    <div className={tags}>
      {styledChips.map((chip) => (
        <span key={chip.key}
          className={`${tag}${getAllTheClasses(mergedStyles, chip.appliedStyle)}`}
        >
          {chip.content}
        </span>  
      ))}
    </div>
  );

};

export default JmsrChipList;
