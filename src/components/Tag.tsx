import React from 'react';
import x from '../img/x.png';
import style from '../style/RegisterForm.module.css';
interface TagMember {
  name: string;
  tagId: number;
  onclick: (tagId: number) => void;
}
const Tag = ({ name, tagId, onclick }: TagMember) => {
  return (
    <div className={style['tagFrame']} style={{ width: name.length * 43 }}>
      {name}
      <button className={style['tagCancel']} onClick={() => onclick(tagId)}>
        <img src={x} />
      </button>
    </div>
  );
};

export default Tag;

