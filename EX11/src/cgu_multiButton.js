// src/cgu_multiButton.js
import React from 'react';

// 1. 點擊按鈕時觸發的事件
const changeText = (event) => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + "被點了";
};

// 2. 宣告產生按鈕的函式
const cgu_multiButton = (num) => {
  let output = [];
  for (let i = 1; i <= num; i++) {
    output.push(
      <button key={i} onClick={changeText}>
        第{i}個按鍵
      </button>
    );
  }
  return output;
};

// 3. 重點：把這個函式導出，讓別的檔案可以 import
export default cgu_multiButton;