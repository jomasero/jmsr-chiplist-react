import React from 'react';
import { getAllTheClasses } from './utils/cssModule.utils';
import defaultStyles from './JmsrChipList.module.scss';

const defaultChipType = { defaultChip: 'is-white' };

const useJmsrChipList = (
  chips = [],
  customTypes = {},
  cssModule = {}
) => {
  if (!chips || !chips.length) {
    return ['', '', [] ];
  }

  const chipTypes = { ...defaultChipType, ...customTypes };

  const styledChips = chips.map((chip, index) => {
    const styleForChip = chipTypes[chip.type];
    const appliedStyle = styleForChip || chipTypes.defaultChip;
    return { ...chip, 'appliedStyle': appliedStyle, 'key': index };
  });

  const mergedStyles = { ...defaultStyles, ...cssModule };
  const { tags, tag } = mergedStyles;

  const chipList = styledChips.map((chip) => (
    <span key={chip.key}
      className={`${tag}${getAllTheClasses(mergedStyles, chip.appliedStyle)}`}
    >
      {chip.content}
    </span>
  ));

  return [
    tags,
    chipList
  ];
};

export default useJmsrChipList;
