import React from 'react';

const defaultChipType = { defaultChip: 'is-white' };

const JmsrChipList = ({
  chips = [],
  customTypes = {}
}) => {
  if (!chips || chips.length === 0) { return null; }

  const chipTypes = { ...defaultChipType, ...customTypes };

  const styledChips = chips.map((chip, index) => {
    const styleForChip = chipTypes[chip.type];
    const appliedStyle = styleForChip || chipTypes.defaultChip;
    return { ...chip, 'appliedStyle': appliedStyle, 'key': index };
  });

  return (
    <div className='tags'>
      {styledChips.map((chip) => (
        <span key={chip.key} className={`tag ${(chip.appliedStyle)}`}>
          {chip.content}
        </span>  
      ))}
    </div>
  );

};

export default JmsrChipList;
