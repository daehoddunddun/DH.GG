import React from "react";

function ItemModal() {
  return (
    <div className="item-modal-wrap">
      <div className="item-name-box">
        <strong className="item-name">아이템 이름</strong>
      </div>
      <div className="item-intro-box">
        <p className="item-main-intro">아이템 설명</p>
        <p className="item-sub-intro">아이템 부가설명</p>
      </div>
      <p className="item-price">가격</p>
    </div>
  );
}

export default ItemModal;
