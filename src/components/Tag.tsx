import React from 'react';
import x from '../img/x.png';

interface TagMember {
  name: string;
  tagId: number;
  onclick: (tagId: number) => void;
}
const Tag = ({ name, tagId, onclick }: TagMember) => {
  return (
    <div className='tagFrame' style={{ width: name.length * 43 }}>
      {name}
      <button className='tagCancel' onClick={() => onclick(tagId)}>
        <img src={x} />
      </button>
    </div>
  );
};

export default Tag;

