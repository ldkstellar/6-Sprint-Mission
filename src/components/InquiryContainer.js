import React, { useState } from "react";
import { getComments } from "../api/api";
import NoInquire from "./NoInquire";
import Comments from "./Comments";
import "../style/BackButton.css";
import backImage from "../img/backImage.png";
import { useNavigate } from "react-router-dom";
const InquiryContainer = ({ inquiryList }) => {
  const now = new Date();
  const navigation = useNavigate();
  if (inquiryList.length === 0) {
    return <NoInquire />;
  }
  return (
    <div>
      {inquiryList.length === 0 ? (
        <NoInquire />
      ) : (
        inquiryList.map((element) => (
          <Comments now={now} key={element.id} element={element} />
        ))
      )}
      <div className="backBtnContainer">
        <button className="backBtnContainer-btn">
          목록으로 돌아가기
          <img
            className="backBtnContainer-image"
            src={backImage}
            alt="뒤로가기"
          />
        </button>
      </div>
    </div>
  );
};

export default InquiryContainer;

