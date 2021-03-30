import React from 'react';
import useJmsrChipList from './useJmsrChipList';
import { getACleanedTagName } from './utils/dom.utils';

const JmsrChipList = ({
  chips = [],
  customTypes = {},
  cssModule = {},
  listTagName = 'div'
}) => {
  const [listClassName, styledChips]
    = useJmsrChipList(chips, customTypes, cssModule);

  if (!styledChips.length) { return null; }

  const ListTag = getACleanedTagName(listTagName);

  return (
    <ListTag className={listClassName}>
      {styledChips}
    </ListTag>
  );
};

export default JmsrChipList;
