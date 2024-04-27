import React from "react";
import x from "../img/x.png";
const Tag = ({ name, tagId, onclick }) => {
  return (
    <div className="tagFrame" style={{ width: name.length * 43 }}>
      {name}
      <button className="tagCancel" onClick={() => onclick(tagId)}>
        <img src={x} />
      </button>
    </div>
  );
};

export default Tag;

