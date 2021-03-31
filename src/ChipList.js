import React from 'react';
import useChipList from './useChipList';
import { getACleanedTagName } from './utils/dom.utils';

const ChipList = ({
  chips = [],
  customTypes = {},
  cssModule = {},
  listTagName = 'div'
}) => {
  const [listClassName, styledChips]
    = useChipList(chips, customTypes, cssModule);

  if (!styledChips.length) { return null; }

  const ListTag = getACleanedTagName(listTagName);

  return (
    <ListTag className={listClassName}>
      {styledChips}
    </ListTag>
  );
};

export default ChipList;
